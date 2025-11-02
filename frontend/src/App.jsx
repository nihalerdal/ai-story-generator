import { useState } from 'react'
import axios from "axios"
import './App.css'

function App() {
  const [keyword, setKeyword] = useState("")
  const [story, setStory] = useState("")
  

const handleGenerate = async (e) => {
  e.preventDefault();
     console.log("Button clicked!");
     console.log("Keyword:", keyword);

  try {
    console.log("Sending request...");
    console.log("URL:", import.meta.env.VITE_API_BASE_URL);

    const response = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/api/story`,
      {
        keyword: keyword,
      }
    );

    console.log("Response:", response.data);
    setStory(response.data.story);
  } catch (error) {
    console.error("Error:", error);
  }
};

  return (
    <div className="App">
      <h1>Story Generator</h1>
      <form onSubmit={handleGenerate}>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Enter keyword"
        />

        <button type="submit">Generate</button>
      </form>
      {story && <p>{story}</p>}
    </div>
  );
}

export default App
