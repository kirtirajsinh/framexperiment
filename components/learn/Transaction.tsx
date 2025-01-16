import React from "react";
import { useSendTransaction } from "wagmi";

const Transaction = () => {
  const { sendTransaction } = useSendTransaction();

  const sendDemoTransaction = () => {
    sendTransaction({
      to: "0x123...abc", // Replace with valid address.
      value: BigInt(10000000000000000), // 0.01 ETH in wei
    });
  };
  return (
    <div>
      <h2>Send Transaction</h2>
      <button onClick={sendDemoTransaction}>Send 0.01 ETH</button>
    </div>
  );
};

export default Transaction;
