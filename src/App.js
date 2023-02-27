import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";



function App() {
  return (
    <div className="App ">
      <Navbar/>
      <Home/>
      <Experience></Experience>
      <Skills></Skills>
      <Contact></Contact>
    </div>
  );
}

export default App;
