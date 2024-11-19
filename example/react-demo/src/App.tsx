import * as ApusicUiICons from "apusic-ui-icons-react";
import "./App.css";

function App() {
  const allIcons: {
    [key: string]: any;
  } = ApusicUiICons;

  return (
    <>
      <h2>图标列表</h2>
      <ul>
        {Object.entries(allIcons).map(([name, Component]) => (
          <li className="icon-item" key={name}>
            <Component style={{ fontSize: 48 }} />
            <div>{name}</div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
