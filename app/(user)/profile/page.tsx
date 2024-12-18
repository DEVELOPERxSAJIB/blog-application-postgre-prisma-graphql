import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import MyProfile from "./_components/MyProfile";



const Profile = async () => {

  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;

  // Handle unauthenticated users
  if (!userId) {
    return <p>Error: User not authenticated</p>;
  }

  return (
    <>
      <MyProfile userId={userId} />
    </>
  );
};

export default Profile;
