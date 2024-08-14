import React from "react";
import ReactDOM from "react-dom";
import Footer from "./components/footer";
import CurrentDate from './components/CurrentDate';
import Header from './components/header';
import './App.css';
import Content from './components/content';

function News() {
  return (
    <div>
      <CurrentDate />
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

ReactDOM.render(<News />,document.getElementById("root"));