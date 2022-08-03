import React, { useState } from "react";
import { GITHUB_API_URL } from "../constants";
// import { useNavigate } from "react-router-dom";
// import { useUser } from "../UserContext";
import "../style/home.css";

function App() {
  const [githubUsername, setGithubUsername] = useState("");

  const formSubmit = async (e) => {
    e.preventDefault();

    
  };

  return (
    <div className="home">
      <form onSubmit={formSubmit} className="home-form">
        <div>
          <label htmlFor="username">Enter your Github username:</label>
          <input
            type="text"
            name="username"
            id="username"
            required
            onChange={(e) => {}}
          />
        </div>
        <div>
          <input type="submit" value="Enter App" />
        </div>
      </form>
    </div>
  );
}

export default App;
