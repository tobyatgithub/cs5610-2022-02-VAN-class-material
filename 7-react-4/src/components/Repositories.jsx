import React, { useState, useEffect } from "react";
// import { useUser } from "../UserContext";
// import { useNavigate } from "react-router-dom";
import { GITHUB_API_URL } from "../constants";
import "../style/repositories.css";

const getLanguageCssClass = (language) => {
  if (language === "JavaScript") {
    return "language-1";
  } else if (language === "TypeScript") {
    return "language-2";
  } else if (language === "CSS") {
    return "language-3";
  } else if (language === "Java") {
    return "language-4";
  }

  return "language-other";
};

export default function Repositories() {
  const [repositories, setRepositories] = useState([]);

  return (
    <div>
      <h5>Repositories</h5>
      <ul className="repositories-list">
        {repositories.map((repository) => (
          <li
            className="repository-row-li"
            key={repository.id}
            onClick={() => {}}
          >
            <div className="repository-row">
              <div>{repository.name}</div>
              <div>
                <span
                  className={`repo-language-color ${getLanguageCssClass(
                    repository.language
                  )}`}
                ></span>{" "}
                <span>{repository.language}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
