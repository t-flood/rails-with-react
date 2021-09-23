import React from "react";
import { useState } from "react";
import Jumbotron from "../Jumbotron";
import Table from "./Table/Table";

const Home = () => {
  const [modules, setModules] = useState({
    modules: [
      {
        id: 1,
        title: "1. Setting up a new Ruby on Rails App with React.",
        description: "lorem ipsum",
        active: false,
      },
      {
        id: 2,
        title: "2. Adding React to an Existing Rails App.",
        description: "lorem ipsum",
        active: false,
      },
      {
        id: 3,
        title: "3. Building a Hello World App.",
        description: "lorem ipsum",
        active: false,
      },
      {
        id: 4,
        title: "4. Adding React Router Dom to your App",
        description: "lorem ipsum",
        active: false,
      },
    ],
  });
  return (
    <div>
      <Jumbotron />
      <Table modules={modules} />
    </div>
  );
};

export default Home;
