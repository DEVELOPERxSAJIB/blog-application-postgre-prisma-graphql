import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  console.log('session', session);

  if (!session) {
    redirect("/api/auth/signin");
  } else {
    redirect("/");
  }
}
