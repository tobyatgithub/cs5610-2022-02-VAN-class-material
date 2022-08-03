import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { GITHUB_API_URL } from "../constants";
// import { useUser } from "../UserContext";
import "../style/repositoryDetail.css";

export default function RepositoryDetail() {
  return (
    <div className="repositoryDetail">
      <Link to="/app/repositories"> ⬅️ Back</Link>
      <h2></h2>
      <div>
        <a href={""} target="_blank" rel="noreferrer">
          🏠 Repository Url
        </a>
      </div>
      <div>
        <p>💻 Language: </p>
      </div>
      <div>
        <p>🍴 Forks count: </p>
      </div>
      <div>
        <p>🐛 Open issues count: </p>
      </div>
      <div>
        <p>✨ Subscribers count: </p>
      </div>
      <div>
        <p>🔥 Default branch: </p>
      </div>
    </div>
  );
}
