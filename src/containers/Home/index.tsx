import { useEffect, useState } from "react";
import Game2 from "../../components/Game";
import Info from "../../components/Game/Info";
import "./index.css";

function Home(){
  const [name, setName] = useState("");
  const [showHelloMessage, setShowHelloMessage] = useState(false);

  let  helloMessage = "Hello from friendly ReactiveBober!";
  useEffect(()=>{
    setTimeout(()=> {
      setShowHelloMessage(true);
    }, 2000)
  })

  return (
    <div className="home">
      <Game2 name={name} />
      <Info setName={setName} />
      {showHelloMessage ? <p className="hello">{helloMessage}</p> : ""}
    </div>
  );
}

export default Home
