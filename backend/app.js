const express  = require("express")
const cors = require("cors");
const { generateStory } = require("./src/controllers/storyGenerateController");

const app = express();

//middleware
app.use(cors())
app.use(express.json())

//routes
app.use("/api/story", generateStory);

//errorHandlers

module.exports = app;