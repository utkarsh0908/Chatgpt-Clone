import ChatPanel from "@/components/ChatPanel";
import SideBar from "@/components/SideBar";

export default function Home() {
  return (
    <>
      <div className="h-screen w-screen border border-1 border-black flex">
        <div className="flex-1 bg-green-400"><SideBar/></div>
        <div className="flex-[3] bg-green-200"><ChatPanel/></div>
      </div>
    </>
  );
}
