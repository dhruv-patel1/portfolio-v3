import React, {useState, useEffect} from "react";
import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import Landing from "./views/Landing/Landing";
import Featured from "./views/Featured/Featured";
import Projects from "./views/Projects/Projects";
import Mission from "./views/Mission/Mission";
import Skills from "./views/Skills/Skills";
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import Loading from "./components/Loading/Loading";

const App = () =>{

  const [loading, setLoading] = useState(false);

  useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
  }, []);

  return (
    <>
    {
      loading ? (
        <Loading />
      ):
      (
        <div className="app">
          <NavBar/>
          <Landing/>
          <Featured/>
          <Projects/>
          <Mission/>
          <Skills/>
          <About/>
          <Contact/>
      </div>
      )
    }
    </>
  );
}

export default App;
