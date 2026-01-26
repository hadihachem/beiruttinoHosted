import "./Home.css";
import Header from '../../Components/Navbar/Header/Header';
import { useState } from "react";

import HomeBody from "../HomeBody/HomeBody";

const Home = () => {
  const [category, setCategory] = useState("Menu");

  return (
    <div className="home-container">
        <HomeBody />
    </div>
  )
}

export default Home;