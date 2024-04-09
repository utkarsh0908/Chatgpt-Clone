"use client";
import React, { useState } from "react";

const chatPanel = () => {
  const [messages, setMessages] = useState([
    {
      prompt: "hello 1",
      result: "hello theere",
    },
    {
      prompt: "hello 2",
      result: "hello theere",
    },
    {
      prompt: "hello 3",
      result: "hello theere",
    },
    {
      prompt: "hello 4",
      result: "hello theere",
    },
  ]);
  return (
    <>
      <div className="h-full w-full flex flex-col">
        <div className="flex-1 p-4">
          {messages.map((message) => {
            return (
              <div className="mb-6">
                <div>
                  <h1 className="font-bold">You</h1>
                  <h1>{message.prompt}</h1>
                </div>
                <div>
                  <h2 className="font-bold">GPT</h2>
                  <h2>{message.result}</h2>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex-1 flex justify-end items-end">
          <div class="relative w-full min-w-[200px] h-11">
            <input
              className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer text-black outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 border-gray-900"
              placeholder="Message GPT"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default chatPanel;
