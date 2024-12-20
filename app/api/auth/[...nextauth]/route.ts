import NextAuth, { getServerSession, NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import prisma from "@/prisma/db";
import FacebookProvider from "next-auth/providers/facebook";
import { redirect } from "next/navigation";
import GitHubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  jwt: {},
  debug: true,
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID || "",
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET || "",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
  ],

  callbacks: {
    async signIn({ account, profile }: { account: any; profile: any }) {
      try {
        if (!profile) {
          console.error("Profile is null. Check the provider configuration.");
          return false; // Abort the sign-in process.
        }

        if (!profile.email) {
          console.error("No email found in profile");
          return false;
        }

        let image =
          "https://static.vecteezy.com/system/resources/previews/016/058/540/non_2x/icon-person-design-and-line-art-icon-free-vector.jpg"; // Default image

        // Set image based on the provider
        if (account?.provider === "google" && "picture" in profile) {
          image = profile.picture;
        } else if (account?.provider === "github" && "avatar_url" in profile) {
          image = profile.avatar_url;
        } else if (
          account?.provider === "facebook" &&
          profile.picture?.data?.url
        ) {
          image = profile.picture.data.url;
        }

        // Upsert user in Prisma database
        await prisma.user.upsert({
          where: { email: profile.email },
          create: {
            email: profile.email,
            name: profile.name || "Unknown",
            image,
            role: "USER",
          },
          update: {
            name: profile.name || "Unknown",
            image,
          },
        });

        return true;
      } catch (error) {
        console.error("Sign-in error:", error);
        return false;
      }
    },

    async jwt({ token, user }) {
      if (token) {
        if (token && token.email) {
          const dbUser = await prisma.user.findUnique({
            where: { email: token.email },
          });

          if (dbUser) {
            token.id = dbUser.id;
            token.role = dbUser.role;
          }
        }

        return token;
      }
      return token;
    },
    async session({ session, token }) {
      try {
        if (token) {
          session.user = session.user || {};
          session.user.id = token.id || null;
          session.user.role = token.role || "";
        }

        return session;
      } catch (error) {
        console.error("Session callback error:", error);
        return session;
      }
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
// Server-side login requirement
export async function loginIsRequiredServer() {
  const session = await getServerSession(authOptions);
  if (!session) return redirect("/api/auth/signin");
}

export async function loginIsRequiredClient() {
  if (typeof window !== "undefined") {
    const session = getServerSession(authOptions);
    if (!session) return redirect("/api/auth/signin");
  }
}

const handler = NextAuth(authOptions);

// Export handlers for the app directory routing
export { handler as GET, handler as POST };
