import { useState } from "react";
import { useAppSelector } from "../../store/store";

function Info(props: {setName: CallableFunction}) {
  const count = useAppSelector((state) => state.counter.value);

  const [name, setName] = useState("");
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.setName(name);
        }}
      >
        <h1>Score: {count}</h1>
        <p>Enter your name:</p>
        <input
          onChange={(e) => {
            setName(e.currentTarget.value);
          }}
          type="text"
          value={name}
        ></input>
        <input value="Enter" type="submit"></input>
      </form>
    </>
  );
}

export default Info