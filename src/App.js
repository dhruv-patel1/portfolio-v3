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

import ReactGa from "react-ga";

const App = () =>{

  const [loading, setLoading] = useState(false);

  useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1500);

      ReactGa.initialize('UA-199118815-1');
      ReactGa.pageview(window.location.pathname + window.location.search);
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
