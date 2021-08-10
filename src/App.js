import "./App.css";
import SearchForm from "./components/SearchForm";
import BeerList from "./components/BeerList";

function App() {
  return (
    <div className="App container">
      <div className="d-flex justify-content-center beer-store-title">
        <h1>Beer Factory</h1>
      </div>
      <SearchForm></SearchForm>     
      <BeerList></BeerList>
    </div>
  );
}

export default App;
