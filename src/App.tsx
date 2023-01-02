import { Outlet } from "react-router";
import TopMenu from "./shared-components/top-menu";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Hello friend of Loki!</h1>
        <TopMenu />
        <Outlet />
      </header>
    </div>
  );
}

export default App;
