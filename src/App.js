import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RoutesList from "../../react/jobly-frontend/src/routes/RoutesList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <SearchForm handleSearchSubmit={handleSearchSubmit}/>
        <PhotoList photos={photos}/>
        <RoutesList handleSave={handleSave} />
      </BrowserRouter>
    </div>
  );
}

export default App;
