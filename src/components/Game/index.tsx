import "./index.css";
import { increment, useAppDispatch, useAppSelector } from "../../store/store";

function Game2(props: {name: string}) {
  const dispatch = useAppDispatch();
  const count = useAppSelector((s) => s.counter.value);
  const countClick = () => {
    dispatch(increment());
  };

  let show = false;

  if (count > 0) {
    show = true;
  }
  return (
    <>
      <div onClick={countClick}>
        {show ? <h2 id="goodjob">Good job!</h2> : <h2>Click</h2>}
        {props.name ? "Hello " + props.name + " and thank you for " + count + " clicks!" : ""}
        <img src="beaver.svg" alt="beaver image" />
      </div>
    </>
  );
}

export default Game2;
