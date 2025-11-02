const express = require("express")
const router = express.Router()

const { generateStory } = require("../controllers/storyGenerateController")

router.post("/", generateStory)

module.exports = router;