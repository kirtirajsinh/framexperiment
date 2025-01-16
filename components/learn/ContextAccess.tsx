"use client";
import React, { useEffect } from "react";
import { useUserStore } from "../hooks/UserStore";

const ContextAccess = () => {
  const { user } = useUserStore();

  useEffect(() => {
    // Fetch context.
  }, []);

  return (
    <div>
      <h2>User Context</h2>
      {user ? (
        <pre>{JSON.stringify(user, null, 2)}</pre>
      ) : (
        <p>Loading context...</p>
      )}
    </div>
  );
};

export default ContextAccess;
