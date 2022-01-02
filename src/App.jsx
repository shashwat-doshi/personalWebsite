import Topbar from "./components/topbar/Topbar";
// import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
// import Footer from "./components/footer/Footer";

import Projects from "./components/projects/Projects";

import Footer from "./components/footer/Footer";

import Home from "./components/intro";

import "./app.scss"
import { useState } from "react";


import React from "react";
import { Redirect } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Projects from "./components/projects/Projects";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Router>
        <Topbar isOpen={menuOpen} setOpen={setMenuOpen} />
        <Menu isOpen={menuOpen} setOpen={setMenuOpen} />
        <Switch className="sections">
          <Route path="/" exact component={Home} />
          {/* <Route path="/" exact component={() => <Intro />} /> */}
          <Route path="/projects" exact component={Projects} />
          {/* <Route path="/works" exact component={() => <Works />} /> */}
          {/* <Route path="/about" exact component={() => <About />} /> */}
          <Route path="/testimonials" exact component={() => <Testimonials />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Redirect to="/" />
        </Switch>
        {/* <Footer /> */}
      </Router>
      {/* <Footer /> */}

      {/* <Topbar isOpen={menuOpen} setOpen={setMenuOpen} />
      <Menu isOpen={menuOpen} setOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div> */}
    </div>
  );
}

export default App;


// import Topbar from "./components/topbar/Topbar";
// import Intro from "./components/intro/Intro"
// import Portfolio from "./components/portfolio/Portfolio"
// import Works from "./components/works/Works"
// import Testimonials from "./components/testimonials/Testimonials"
// import Contact from "./components/contact/Contact"
// import "./app.scss"
// import { useState } from "react";
// import Menu from "./components/menu/Menu";

// function App() {
//   const [menuOpen, setMenuOpen] = useState(false)
//   return (
//     <div className="app">
//       <Topbar isOpen={menuOpen} setOpen={setMenuOpen} />
//       <Menu isOpen={menuOpen} isMenuOpen={setMenuOpen} />
//       <div className="sections">
//         <Intro />
//         <Portfolio />
//         <Works />
//         <Testimonials />
//         <Contact />
//       </div>
//     </div>
//   );
// }

// export default App;