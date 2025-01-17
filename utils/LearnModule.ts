import ActionsDemo from "@/components/learn/ActionsDemo";
import ContextAccess from "@/components/learn/ContextAccess";
import DynamicImport from "@/components/learn/DynamicImport";
import ErrorHandling from "@/components/learn/ErrorHandling";
import FrameInvocation from "@/components/learn/FrameInvocation";
import SplashScreen from "@/components/learn/SplashScreen";
import Testing from "@/components/learn/Testing";
import Transaction from "@/components/learn/Transaction";
import WalletConnection from "@/components/learn/WalletConnection";

export const topics = [
    {
        id: 1,
        title: "Introduction to Frames v2",
        description: `Frames v2 allows developers to create web applications that can be embedded seamlessly into the Warpcast mobile app. These applications can interact with user wallets and use context like user IDs while providing a smoother user experience.`,
        code: `
/* There is no specific component for this; this is an introduction to Frames v2's capabilities. */
    `,
    },
    {
        id: 2,
        title: "Splash Screen",
        description: `A splash screen is the initial screen shown while the app is loading. In Frames v2, the splash screen disappears when you signal readiness using the 'ready' action.`,
        component: SplashScreen,
        code: `
export const metadata: Metadata = {
  title: "Next Frames v2",
  description: "First steps into building with Frames v2",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Next Frames v2",
    description: "First steps into building with Frames v2",
    images: [
      {
        url: "/og-image.png",
        width: 800,
        height: 600,
        alt: "Og Image Alt",
      },
    ],
  },
  other: {
    "fc:frame": JSON.stringify({
      version: "next",
      imageUrl:
        "https://pub-b8acacbdf4c34874a29a2fdaab996f29.r2.dev/next-frames%20image.png",
      button: {
        title: "Next Frames v2",
        action: {
          type: "launch_frame",
          name: "Next Frames v2",
          url: "https://next-frame-psi.vercel.app/",
            splashImageUrl:
        "https://pub-b8acacbdf4c34874a29a2fdaab996f29.r2.dev/next-frames%20image.png",
        splashBackgroundColor: "#131313",
    },
      },
    }),
  },
};
    `,
    },
    {
        id: 3,
        title: "Context Access",
        description: `Context in Frames v2 provides information about the user invoking the frame, such as their username or ID. It helps personalize the app experience.`,
        component: ContextAccess,
        code: `
'use client';
import { useEffect, useState } from 'react';
import sdk from '@farcaster/frame-sdk';

const ContextAccess = () => {
  const [context, setContext] = useState(null);

  useEffect(() => {
    setContext(sdk.context); // Fetch user context.
  }, []);

  return (
    <div>
      <h2>User Context</h2>
      {context ? <pre>{JSON.stringify(context, null, 2)}</pre> : <p>Loading context...</p>}
    </div>
  );
};

export default ContextAccess;
    `,
    },
    {
        id: 4,
        title: "Actions Demo",
        description: `Actions allow your frame to communicate with the parent app. For example, you can open a URL in the app or close the frame programmatically.`,
        component: ActionsDemo,
        code: `
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
    `,
    },
    {
        id: 5,
        title: "Wallet Connection",
        description: `Frames v2 can interact with the user's Ethereum wallet. You can use libraries like Wagmi to fetch wallet addresses or perform transactions.`,
        component: WalletConnection,
        code: `
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
    `,
    },
    {
        id: 6,
        title: "Transaction Demo",
        description: `You can send Ethereum transactions directly from your frame using wallet libraries. This allows users to interact with smart contracts seamlessly.`,
        component: Transaction,
        code: `
import { useSendTransaction } from 'wagmi';

const TransactionDemo = () => {
  const { sendTransaction } = useSendTransaction();

  const sendDemoTransaction = () => {
    sendTransaction({
      to: '0x123...abc', // Replace with valid address.
      value: '0.01',
    });
  };

  return (
    <div>
      <h2>Send Transaction</h2>
      <button onClick={sendDemoTransaction}>Send 0.01 ETH</button>
    </div>
  );
};

export default TransactionDemo;
    `,
    },
    {
        id: 7,
        title: "Dynamic Imports",
        description: `Dynamic imports in Next.js help you load SDK components on the client side only. This ensures the SDK has access to browser APIs like 'window'.`,
        component: DynamicImport,
        code: `
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('./DynamicFeature'), { ssr: false });

const DynamicDemo = () => (
  <div>
    <h2>Dynamic Imports</h2>
    <DynamicComponent />
  </div>
);

export default DynamicDemo;
    `,
    },
    {
        id: 8,
        title: "Frame Invocation",
        description: `Frames are invoked using a public URL and can include parameters like splash images and background colors.`,
        component: FrameInvocation,
        code: `
const FrameInvocation = () => (
  <div>
    <h2>Frame Invocation</h2>
    <p>Frames can be invoked with custom URLs, splash images, and background colors.</p>
  </div>
);

export default FrameInvocation;
    `,
    },
    {
        id: 9,
        title: "Error Handling",
        description: `Ensure that your app gracefully handles errors like failed wallet connections or missing user context.`,
        component: ErrorHandling,
        code: `
const ErrorHandling = () => (
  <div>
    <h2>Error Handling</h2>
    <p>Ensure proper error handling in case of SDK or wallet issues.</p>
  </div>
);

export default ErrorHandling;
    `,
    },
    {
        id: 10,
        title: "Testing with Ngrok",
        description: `Use tunneling tools like Ngrok to test your frame locally by exposing your localhost server to the Warpcast app.`,
        component: Testing,
        code: `
const NgrokTesting = () => (
  <div>
    <h2>Testing with Ngrok</h2>
    <p>Use Ngrok to expose your local server for mobile app testing: 'ngrok http 3000'.</p>
  </div>
);

export default NgrokTesting;
    `,
    },
];