import { selectAchievedGoals } from "../../store/goals";
import { useAppSelector } from "../../store/store";
import Goal from "./Goal";
import "./index.css"

function Goals(){
  const goals = useAppSelector(s => s.goals);
  
  const achieviedGoals = useAppSelector(selectAchievedGoals);

  return (
    <>
      <h1>Goals:</h1>
      <ul className="goals">
        { goals.map(g => <Goal key={g.id} id={g.id} text={g.text} done={g.done}/>) }
      </ul>
      <h3>Number of achieved goals: {achieviedGoals}</h3>
    </>
  );
}

export default Goals;
