// import { useState } from "react";

import "./App.module.css";

import userData from "../../userData.json";
import Profile from "../Profile/Profile";

export default function App() {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </div>
  );
}
