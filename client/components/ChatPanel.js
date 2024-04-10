"use client";
import { usePostTextMutation, useSaveHistoryMutation } from "@/shared/apis/chatApi";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { addText } from "@/shared/reducers/chatReducer";
import NoMessage from "./NoMessage";


const chatPanel = () => {
  const [ postText ] = usePostTextMutation()
  const [ saveHistory ] = useSaveHistoryMutation()
  const [prompt, setPrompt] = useState();
  const currentChat = useAppSelector((state) => state.history.currentChat)
  const dispatch = useAppDispatch()
  
  const handleKeyPress = async (event) => {
    if (event.key === 'Enter') {
      try {
        const res = await postText({prompt})
        dispatch(addText({prompt, result: res.data.output}))
        setPrompt("")
      } catch(err) {
        console.log(err)
      }
    }
  };

  useEffect(() => {
    const handleBeforeUnload = async () => {
      await saveHistory({ messages: currentChat.messages, id: currentChat.id });
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [currentChat])

  return (
    <>
    <div className="h-full w-full flex justify-center text-white">
      <div className="h-full w-[70%] flex flex-col">
        <div className="flex-[4] py-12 overflow-auto no-scrollbar">
          {currentChat.messages.length === 0 && <NoMessage/>}
          {currentChat.messages.length!==0 && currentChat.messages.map((message) => {
            return (
              <div className="mb-6">
                <div>
                  <h1 className="font-bold">You</h1>
                  <h1>{message.prompt}</h1>
                </div>
                <div className="mt-8">
                  <h2 className="font-bold">GPT</h2>
                  <h2>{message.result}</h2>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex-1 flex justify-end items-end pb-4">
          <div class="relative w-full min-w-[200px] h-11">
            <input
              className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 border-white"
              placeholder="Message GPT"
              value={prompt}
              onChange={(e) => setPrompt(e = e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default chatPanel;
