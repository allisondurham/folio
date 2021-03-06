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
  Sidebar,
  Leftbar,
  Footer,
  Home,
  Thing1,
  Thing2,
  Blog,
  Posts,
  Post,
  Flip,
  Boxes,
  Calc,
  Oldest,
  Carousel,
  CarouselData,
  About,
  Flex,
  BrickGame,
  Meh,
  Pause,
} from "./components";


ReactDOM.render(
  <Router>
    <Navbar/>
    <Sidebar/>
    <Leftbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Thing1" element={<Thing1 />} />
      <Route path="/Thing2" element={<Thing2 />} />
      <Route path="/Flip" element={<Flip />} />
      <Route path="/Boxes" element={<Boxes />} />
      <Route path="/Calculator" element={<Calc />} />
      <Route path="/Oldest" element={<Oldest />} />
      <Route path="/About" element={<About />} />
      <Route path="/Flex" element={<Flex />} />
      <Route path="/Brick" element={<BrickGame />} />
      <Route path="/Meh" element={<Meh />} />
      <Route path="/Pause" element={<Pause />} />
      <Route path="/Carousel" element={<Carousel items={CarouselData} />} />
      <Route path="/blog" element={<Blog />}>
        <Route path="" element={<Posts />} />
        <Route path=":postSlug" element={<Post />} />
      </Route>
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
