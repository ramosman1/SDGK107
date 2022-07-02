import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Catalog from "./components/catalog";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="App">
        <Navbar></Navbar>
        <h1> Welcome to  The Organika Store</h1>
        <Catalog></Catalog>
      </div>
    </>
  );
}

export default App;