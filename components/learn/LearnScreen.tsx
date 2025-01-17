"use client";
import React, { useState } from "react";
import SplashScreen from "./SplashScreen";
import ContextAccess from "./ContextAccess";
import { useRouter } from "next/navigation";
import ActionsDemo from "./ActionsDemo";
import WalletConnection from "./WalletConnection";
import Transaction from "./Transaction";
import DynamicImport from "./DynamicImport";
import FrameInvocation from "./FrameInvocation";
import ErrorHandling from "./ErrorHandling";
import Testing from "./Testing";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
const topics = [
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
'use client';
import { useEffect } from 'react';
import sdk from '@farcaster/frame-sdk';

const SplashScreen = () => {
  useEffect(() => {
    sdk.actions.ready(); // Signals the app is ready to hide the splash screen.
  }, []);

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <h1>Loading... Welcome to Frames v2!</h1>
    </div>
  );
};

export default SplashScreen;
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

const LearnScreen = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showCode, setShowCode] = useState(false);
  const { width, height } = useWindowSize();

  const router = useRouter();

  const isCompleted = currentStep === topics.length - 1;

  const goNext = () => {
    if (currentStep < topics.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  const { title, component: Component, code } = topics[currentStep];

  return (
    <div
      style={{
        padding: "20px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {isCompleted && (
        <>
          <Confetti
            width={width}
            height={height}
            recycle={false}
            numberOfPieces={500}
          />
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              padding: "2rem",
              borderRadius: "10px",
              zIndex: 1000,
              boxShadow: "0 0 20px rgba(0,0,0,0.2)",
            }}
          >
            <h2 style={{ color: "#007bff", marginBottom: "1rem" }}>
              🎉 Congratulations!
            </h2>
            <p className="text-black">You now know the basics of Frames v2!</p>
          </div>
        </>
      )}
      {/* Progress Visualizer */}
      <div style={{ marginBottom: "20px" }}>
        <h1>
          Topic {currentStep + 1} of {topics.length}
        </h1>
        <h2>{title}</h2>
        <div
          style={{
            height: "20px",
            width: "80%",
            backgroundColor: "#f3f3f3",
            margin: "auto",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${((currentStep + 1) / topics.length) * 100}%`,
              backgroundColor: "#4caf50",
              transition: "width 0.3s ease",
            }}
          />
        </div>
      </div>

      {/* Show Description or Component */}
      <div
        style={{
          marginBottom: "20px",
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <p>{topics[currentStep].description}</p>
      </div>

      {/* Current Topic Content */}
      {Component ? (
        <div
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "10px",
            minHeight: "200px",
            marginBottom: "20px",
          }}
        >
          <Component />
        </div>
      ) : (
        <></>
      )}

      {/* Code Snippet */}

      {
        <button
          onClick={() => setShowCode(!showCode)}
          style={{
            padding: "10px 20px",
            backgroundColor: showCode ? "#ccc" : "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {showCode ? "Hide Code" : "Show Code"}
        </button>
      }
      {showCode && (
        <div
          style={{
            textAlign: "left",
            backgroundColor: "#f7f7f7",
            padding: "20px",
            borderRadius: "10px",
            overflowX: "auto",
          }}
        >
          <h3>Code:</h3>
          <pre
            style={{ whiteSpace: "pre-wrap", fontSize: "14px", color: "#333" }}
          >
            {code}
          </pre>
        </div>
      )}
      {/* <div
        style={{
          textAlign: "left",
          backgroundColor: "#f7f7f7",
          padding: "20px",
          borderRadius: "10px",
          overflowX: "auto",
        }}
      >
        <h3>Code:</h3>
        <pre
          style={{ whiteSpace: "pre-wrap", fontSize: "14px", color: "#333" }}
        >
          {code}
        </pre>
      </div> */}

      {/* Navigation Buttons */}
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={goBack}
          disabled={currentStep === 0}
          style={{
            padding: "10px 20px",
            marginRight: "10px",
            backgroundColor: currentStep === 0 ? "#ccc" : "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: currentStep === 0 ? "not-allowed" : "pointer",
          }}
        >
          Back
        </button>
        <button
          onClick={goNext}
          disabled={currentStep === topics.length - 1}
          style={{
            padding: "10px 20px",
            marginRight: "10px",
            backgroundColor:
              currentStep === topics.length - 1 ? "#ccc" : "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor:
              currentStep === topics.length - 1 ? "not-allowed" : "pointer",
          }}
        >
          Next
        </button>
        <button
          onClick={() => router.push("/")}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default LearnScreen;
