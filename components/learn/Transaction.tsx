import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";
import { useAccount, useSendTransaction } from "wagmi";

const Transaction = () => {
  const { sendTransaction } = useSendTransaction();
  const { isConnected } = useAccount();

  const sendDemoTransaction = () => {
    sendTransaction({
      to: "0x123...abc", // Replace with valid address.
      value: BigInt(10000000000000000), // 0.01 ETH in wei
    });
  };
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <h2>Send Transaction</h2>
      {isConnected ? (
        <button
          style={{
            marginBottom: "20px",
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "10px",
          }}
          onClick={sendDemoTransaction}
        >
          Send 0.01 ETH
        </button>
      ) : (
        <ConnectButton />
      )}
    </div>
  );
};
export default Transaction;
