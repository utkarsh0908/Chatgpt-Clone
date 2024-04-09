"use client"
import React, {useState} from 'react'

const SideBar = () => {
  const histories = useState([
    {
      title: "history 1",
      history: [
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
      ]
    },
    {
      title: "history 1",
      history: [
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
      ]
    }
  ])
  return (
    <>
      <h1>History</h1>

    </>
  )
}

export default SideBar