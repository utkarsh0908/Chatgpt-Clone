const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const History = require("./model/history");

let dotenv = require("dotenv").config();

const { OpenAI } = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is also the default, can be omitted
});

//server
const app = express();
app.use(bodyparser.json());
app.use(cors());

//endpoint for prompt
app.post("/chat", async (req, res) => {
  const { prompt } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{"role": "user", "content": prompt}],
    });

    const output = completion.choices[0].message.content;
    res.status(200).send({output});
  } catch (error) {
    res.status(501).send({ error: error.message });
  }
});

app.post("/history", async (req, res) => {
  const { messages, id } = req.body;
  if (messages && messages.length <= 0) return;
  try {
    const data = { history: messages };
    if(id) {
      await History.findOneAndUpdate(
        { _id: id },
        { history: messages }
      );
    } else {
      const newDocument = new History(data);
      await newDocument.save();
    }
    res.status(200).send("Saved successfully");
  } catch (error) {
    res.status(501).send({ error: error.message });
  }
});

app.get("/history", async (req, res) => {
  try {
    // Retrieve chat history from MongoDB
    const chatHistory = await History.find().sort({ timestamp: -1 });

    res.json(chatHistory);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});


const port = 8000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

const dbUrl = process.env.MONGO_DB_URL;

// Connect to MongoDB
mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
