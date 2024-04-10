# ChatGPT Clone

This project aims to create a ChatGPT clone using modern web technologies such as Next.js for the frontend, Tailwind CSS for styling, and Express.js for the backend. The ChatGPT clone will simulate a conversational AI chatbot capable of engaging users in meaningful conversations on various topics.

## Introduction

This project consists of a frontend server and a backend server. The frontend server is built with NextJS TailwindCSS, while the backend server is built with NodeJS and ExpressJS.

## Features

- Real-time Chat Interface: The chat interface will support real-time messaging, providing instant responses and a seamless conversational experience similar to interacting with a human.
- Save Chat History: This feature allows users to view and manage their chat history, providing a convenient way to revisit past conversations, track interactions, and maintain continuity in ongoing discussions.

## Prerequisites

Ensure you have the following installed on your local machine:

- Node.js
- npm

## Getting Started

1. Clone the repository:

   `https://github.com/utkarsh0908/Chatgpt-Clone.git`

2. Install dependencies for both frontend and backend:
    - For frontend
  
      `cd client`

      `npm install`
    - For backend

      `cd server`
    
      `npm install`
3. Create a .env file in server and use your OPEN_API_KEY and MONGO_DB_URL:
   
    `OPENAI_API_KEY=yourOpenAPIKey...`
   
    `MONGO_DB_URL="your hosted mongo db url"`  

3. Start the frontend development server:
   
    `cd client`
   
    `npm run dev`
   
4. Start the backend development server:
   
    `cd server`
   
    `npm run start`

