import logo from "./logo.svg";
import "./App.css";
import { Navigation } from "./components/Navigation";
import { Home } from "./components/Home";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="App">
      <div className="logo">LOGO PUT HERE</div>
      <Navigation />
      <Home />
      <Portfolio />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
