"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Examples = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          margin: "20px auto",
          borderRadius: "10px",
          overflow: "hidden",
          width: "200px",
        }}
        onClick={() => router.push("https://bracket.game/")}
      >
        Open Bracket
      </button>
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          margin: "20px auto",
          borderRadius: "10px",
          overflow: "hidden",
          width: "200px",
        }}
        onClick={() => router.push("https://weeklyhackathon.com")}
      >
        Weekly Hackathon
      </button>
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          margin: "20px auto",
          borderRadius: "10px",
          overflow: "hidden",
          width: "200px",
        }}
        onClick={() => router.push("https://yoink.party/")}
      >
        Yoink
      </button>
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          margin: "auto",
          borderRadius: "10px",
          overflow: "hidden",
          width: "200px",
        }}
        onClick={() => router.push("https://farcade.ai/")}
      >
        Open Farcade
      </button>
    </div>
  );
};

export default Examples;
