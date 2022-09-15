import "./App.css";
import { Landing } from "./components/Landing";
import { Services } from "./components/Services";
import { AboutUs } from "./components/AboutUs";
import { Contact } from "./components/Contact";
import { Portfolio } from "./components/Portfolio";

function App() {
  return (
    <div className="App">
      <Landing />
      <Services />
      <Portfolio />
      <AboutUs />
      <Contact />
    </div>
  );
}

export default App;
