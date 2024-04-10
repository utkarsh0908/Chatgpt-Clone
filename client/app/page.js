"use client";
import ChatPanel from "@/components/ChatPanel";
import SideBar from "@/components/SideBar";

import { Provider } from "react-redux";
import { store } from "@/shared/state";
export default function Home() {
  
  return (
    <Provider store={store}>
    <>
      <div className="h-screen w-screen border border-1 border-black flex">
      
        <div className="flex-1 bg-[#171717] hidden md:block">
        
          <SideBar/>
        </div>
        <div className="flex-[3] bg-[#212121]">
          <ChatPanel />
        </div>
      </div>
    </>
    </Provider>
  );
}
