"use client";
import React, { useEffect, useState } from "react";
import { useFetchHistoryQuery } from "@/shared/apis/chatApi";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { setHistory, setChat } from "@/shared/reducers/chatReducer";
import { FaRegEdit } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";

const SideBar = () => {
  const [showArrow, setShowArrow] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(false);
  const { data, isLoading } = useFetchHistoryQuery();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setHistory(data));
    }
  }, [data]);

  const histories = useAppSelector((state) => state.history.histories);

  const handleClick = (history) => {
    dispatch(setChat(history));
  };

  if (isLoading) {
    return <div className="text-white">Loading...</div>;
  }
  return (
    <>
      <div className="h-full w-full p-6 text-white">
        <h1 className="font-bold text-xl">ChatGPT Clone</h1>
        <h2
          className="m-2 hover:bg-[#242424] px-2 py-1 cursor-pointer rounded-md flex gap-2 items-center"
          onClick={() => dispatch(setChat({ history: [], id: "" }))}
        >
          New Chat <FaRegEdit/>
        </h2>
        <h1 className="font-bold text-xl">History</h1>
        {histories.length == 0 && <div>No Histories found</div>}
        {histories.map((history, ind) => {
          return (
            <div
              onClick={() => handleClick(history)}
              className="m-2 hover:bg-[#242424] px-2 py-1 cursor-pointer rounded-md flex items-center justify-between gap-2"
              onMouseEnter={() => {
                setShowArrow(true)
                setHoveredIndex(ind)
                }}
              onMouseLeave={() => setShowArrow(false)}
            >
              History {ind + 1}
              {showArrow && hoveredIndex===ind && <FaArrowLeft/>}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SideBar;
