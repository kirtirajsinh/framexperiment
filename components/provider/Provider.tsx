"use client";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { PropsWithChildren, useEffect } from "react";
import { WagmiProvider } from "wagmi";
import { baseSepolia } from "wagmi/chains";
import "@rainbow-me/rainbowkit/styles.css";
import FrameSDK from "@farcaster/frame-sdk";
import { createConfig, http } from "@wagmi/core";
import { farcasterFrame } from "@farcaster/frame-wagmi-connector";
import { injected } from "@wagmi/connectors";
import { useUserStore } from "@/components/hooks/UserStore";

//Add farcasterFrame() to the Connecters array for frame support.
const config = createConfig({
  chains: [baseSepolia],
  connectors: [farcasterFrame(), injected()],
  ssr: true,
  transports: {
    [baseSepolia.id]: http("https://sepolia.example.com"),
  },
});

function FarcasterFrameProvider({ children }: PropsWithChildren) {
  const { setUser } = useUserStore();
  useEffect(() => {
    const load = async () => {
      console.log("Running Frame Action ready");
      // Add the FrameSDK.actions.ready() otherwise your app will get stuck in a loading state i.e. a Splash screen.
      FrameSDK.actions.ready();
      const frameuser = await FrameSDK.context;
      console.log("Frame Action ready", frameuser?.user);

      if (frameuser?.user) {
        setUser({
          displayName: frameuser?.user.displayName || "",
          fid: frameuser?.user.fid,
          location: frameuser?.user.location || {
            placeId: "",
            description: "",
          },
          pfpUrl: frameuser?.user.pfpUrl || "",
          username: frameuser?.user.username || "",
        });
      } else {
        console.warn(
          "No user found in FrameSDK context or displayName is undefined."
        );
      }
    };
    load();
  }, []);
  return <>{children}</>;
}

const queryClient = new QueryClient();

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <FarcasterFrameProvider>{children}</FarcasterFrameProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
