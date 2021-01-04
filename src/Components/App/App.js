import "./App.css";
import { Navigation } from "../Navigation/Navigation";
import { Home } from "../Home/Home";
import { Projects } from "../Projects/Projects";
import { Contact } from "../Contact/Contact";
import { Footer } from "../Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
