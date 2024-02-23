// should be one goal component
import Goal, { changeCompleted } from "../../store/goals"
import { useAppDispatch } from "../../store/store";

export default function Goal(props: Goal) {
  const dispatch = useAppDispatch();
  return (
    <li className="goal">
      <input
        type="checkbox"
        value={props.done?1:0}
        onClick={() => {
          dispatch(changeCompleted(props))
        }}
      />
      {props.text}
    </li>
  )
}