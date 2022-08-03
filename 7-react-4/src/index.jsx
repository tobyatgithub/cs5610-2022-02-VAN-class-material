import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";
import AppLayout from "./components/AppLayout";
import Repositories from "./components/Repositories";
import RepositoryDetail from "./components/RepositoryDetail";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./UserContext";
import "./style/normalize.css";
import "./style/index.css";

ReactDOM.render(
  <UserProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="app" element={<AppLayout />}>
          <Route path="repositories" element={<Repositories />} />
          <Route index element={<Profile />} />
          <Route
            path="repositories/:repositoryId"
            element={<RepositoryDetail />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />

        {/* <Route path="/" element={<Home />} />
      <Route path="/app" element={<Profile />} />
      <Route path="/app/repositories" element={<Repositories />} /> */}
      </Routes>
    </BrowserRouter>
  </UserProvider>,
  document.getElementById("root")
);
