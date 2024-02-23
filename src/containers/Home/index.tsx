import { useState } from "react";
import Game2 from "../../components/Game";
import Info from "../../components/Game/Info";
import "./index.css";

function Home(){
  const [name, setName] = useState("");

  return (
    <div className="home">
        <Game2 name={name}/>
        <Info setName={setName} />
    </div>
  );
}

export default Home
