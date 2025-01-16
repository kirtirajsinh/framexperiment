// import dynamic from "next/dynamic";
// import RainbowWallet from "@/components/RainbowWallet";
import Landing from "@/components/Landing";
// import Profile as dynamic
// const Profile = dynamic(() => import("@/components/Profile"), {
//   loading: () => <p>Loading...</p>,
// });

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] no-scrollbar">
      {/* <RainbowWallet />
      <Profile /> */}
      <Landing />
    </div>
  );
}
