"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";
import { useAccount } from "wagmi";

const WalletConnection = () => {
  const { address, isConnected } = useAccount();
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <h2>Wallet Connection</h2>
      {isConnected ? <p>Connected: {address}</p> : <p>Not connected</p>}
      <ConnectButton />
    </div>
  );
};

export default WalletConnection;
