import { Outlet } from "react-router";
import TopMenu from "./shared-components/top-menu";
import "./App.css";
import { Container } from "@mui/system";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Hello friend of Loki!</h1>
        <TopMenu />
      </header>
      <Container maxWidth="sm">
        <Outlet />
      </Container>
    </div>
  );
}

export default App;
