"use client";
import React from "react";
import FrameSDK from "@farcaster/frame-sdk";

const ActionsDemo = () => {
  const openURL = () => {
    FrameSDK.actions.openUrl("https://example.com");
  };

  const closeFrame = () => {
    FrameSDK.actions.close();
  };
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <h2>Actions</h2>
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={openURL}
      >
        Open Example URL
      </button>
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={closeFrame}
      >
        Close Frame
      </button>
    </div>
  );
};

export default ActionsDemo;
