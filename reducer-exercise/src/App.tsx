import { useReducer } from "react";
import "./App.css";

type State = {
  isDark: boolean;
  fSize: number;
};

type Action = {
  type: string;
};

const themeReducer = (state: State, action: Action) => {
  console.log(state, action);
  switch (action.type) {
    case "toggleTheme":
      return { ...state, isDark: !state.isDark };
    case "increaseFontSize":
      return { ...state, fSize: state.fSize + 1 };
    case "decreaseFontSize":
      return { ...state, fSize: state.fSize > 1 ? state.fSize - 1 : 1 };
    default:
      throw new Error("Unknown action type");
  }
};

function App() {
  const initialState = { isDark: false, fSize: 16 };
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen min-w-screen gap-3 ${
        state.isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <h1 style={{ fontSize: `${state.fSize}px` }}>Hello World!</h1>
      <div className="flex gap-3">
        <button
          className="bg-amber-600 p-3 rounded-2xl"
          onClick={() => dispatch({ type: "toggleTheme" })}
        >
          Toggle Dark Mode
        </button>
        <button
          className="bg-cyan-600 p-3 rounded-2xl"
          onClick={() => dispatch({ type: "increaseFontSize" })}
        >
          Increase Font Size
        </button>
        <button
          className="bg-purple-600 p-3 rounded-2xl"
          onClick={() => dispatch({ type: "decreaseFontSize" })}
        >
          Decrease Font Size
        </button>
      </div>
    </div>
  );
}

export default App;
