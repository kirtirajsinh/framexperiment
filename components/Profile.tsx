"use client";
import React from "react";
import { useUserStore } from "./hooks/UserStore";
import Image from "next/image";

const Profile = () => {
  const { user } = useUserStore();
  console.log("user", user);
  return (
    <div>
      {user ? (
        <>
          <Image
            src={user.pfpUrl || ""}
            alt="Profile Picture"
            className="rounded-full"
            width={100}
            height={100}
            priority={false}
          />
        </>
      ) : (
        <>Profile</>
      )}
    </div>
  );
};

export default Profile;
