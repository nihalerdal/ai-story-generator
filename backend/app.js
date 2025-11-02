const express = require("express");
const cors = require("cors");

const app = express();

//middleware
app.use(cors());
app.use(express.json());

//routes
const storyRoutes = require("./src/routes/storyRouter"); 
app.use("/api/story", storyRoutes);

//errorHandlers

module.exports = app;