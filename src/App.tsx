import logo from "./logo.svg";
import SearchPage from "./areas/search/search-book";
import "./App.css";
import AddBook from "./areas/add/add-book";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello friend of Loki!</h1>
        <SearchPage />
        <AddBook />
      </header>
    </div>
  );
}

export default App;
