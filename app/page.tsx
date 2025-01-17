// import dynamic from "next/dynamic";
// import RainbowWallet from "@/components/RainbowWallet";
import Landing from "@/components/Landing";
// import Profile as dynamic
// const Profile = dynamic(() => import("@/components/Profile"), {
//   loading: () => <p>Loading...</p>,
// });

export default function Home() {
  return (
    <div className="flex flex-col items-center p-2 no-scrollbar">
      <Landing />
    </div>
  );
}
