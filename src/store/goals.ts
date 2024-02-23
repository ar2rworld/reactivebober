import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export default interface Goal {
  id: number;
  done: boolean;
  text: string;
}

const initialGoals: Goal[] = [
  {
    id: 0,
    done: false,
    text: "Did the learner use proper HTML syntax and structure?",
  },

  {
    id: 1,
    done: false,
    text: "Did the learner use CSS to style the web page?",
  },

  {
    id: 2,
    done: false,
    text: "Did the learner use CSS selectors effectively?",
  },

  {
    id: 3,
    done: false,
    text: "Did the learner use JavaScript to modify the DOM?",
  },

  {
    id: 4,
    done: false,
    text: "Did the learner create a React component using proper syntax and structure?",
  },

  {
    id: 5,
    done: false,
    text: "Did the learner use React props and state correctly?",
  },

  { id: 6, done: false, text: "Did the learner use JSX syntax correctly?" },

  {
    id: 7,
    done: false,
    text: "Did the learner use React Hooks to manage state?",
  },

  {
    id: 8,
    done: false,
    text: "Did the learner use the useState and useEffect Hooks correctly?",
  },

  {
    id: 9,
    done: false,
    text: "Did the learner create a functional component using Hooks?",
  },
];

export const goalSlice = createSlice({
  name: "goals",
  initialState: initialGoals,
  reducers: {
    changeCompleted: (state, action: PayloadAction<Goal>) => {
      const { id } = action.payload;
      const goal = state.find((v) => v.id == id);
      if (goal) goal.done = !goal.done;
    },
  },
});

export const { changeCompleted } = goalSlice.actions;

export const selectAchievedGoals = (state: RootState) => state.goals.filter(g => g.done).length;
