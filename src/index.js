import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navbar,
  Footer,
  Home,
  Flip,
  Boxes,
  Calc,
  Carousel,
  CarouselData,
  About,
  Resume,
} from "./components";


ReactDOM.render(
  <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Flip" element={<Flip />} />
      <Route path="/Boxes" element={<Boxes />} />
      <Route path="/Calculator" element={<Calc />} />
      <Route path="/About" element={<About />} />
      <Route path="/Resume" element={<Resume />} />
      <Route path="/Carousel" element={<Carousel items={CarouselData} />} />

    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

// serviceWorker.unregister();



// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
