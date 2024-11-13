import * as ApusicUiICons from "apusic-ui-icons-react";
import "./App.css";

function App() {
  const allIcons: {
    [key: string]: any;
  } = ApusicUiICons;

  return (
    <ul>
      {Object.entries(allIcons).map(([name, Component]) => (
        <li className="icon-item" key={name}>
          <Component style={{ fontSize: 48 }} />
          <div>{name}</div>
        </li>
      ))}
    </ul>
  );
}

export default App;
