const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const Chat = require("./model/chat");
const History = require("./model/history");

require("dotenv").config();

const { OpenAI } = require("openai");

const openai = new OpenAI({
  apiKey: "", // This is also the default, can be omitted
});

//server
const app = express();
app.use(bodyparser.json());
app.use(cors());

//endpoint for prompt
app.post("/chat", async (req, res) => {
  const { prompt } = req.body;

  try {
    // const completion = await openai.chat.completions.create({
    //   model: "gpt-3.5-turbo",
    //   messages: [{"role": "user", "content": prompt}],
    // });

    // const output = completion.choices[0].message;
    const output = "hello friend";
    const newChat = new Chat({
      prompt: prompt,
      result: output,
      timestamp: new Date(),
    });
    await newChat.save();
    res.status(200).send(output);
  } catch (error) {
    res.status(501).send({ error: error.message });
  }
});

app.post("/history", async (req, res) => {
  try {
    Chat.find({})
      .exec()
      .then((documents) => {
        // Aggregate documents into a single object
        const aggregatedData = { history: documents };

        // Save aggregated data as a single document in Collection B
        const newDocument = new History(aggregatedData);
        return newDocument.save();
      })
      .then((result) => {
        console.log("Aggregated data saved to Collection B:", result);
        res.status(200).send(result);
      })
      .catch((error) => {
        console.error("Error fetching or saving data:", error);
      });
  } catch (error) {
    res.status(501).send({ error: error.message });
  }
});

app.get("/display", async (req, res) => {
  try {
    // Retrieve chat history from MongoDB
    const chatHistory = await Chat.find().sort({ timestamp: -1 });

    res.json(chatHistory);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

const port = 8000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

const dbUrl =
  "mongodb+srv://utkarsh13ugec20:sindhusingh@chatbot.zciihxb.mongodb.net/?retryWrites=true&w=majority&appName=Chatbot";

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
