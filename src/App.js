import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<News key={"general"} country="in" pagesize={12} category="general" />}></Route>
            <Route path="/entertainment" element={<News key={"entertainment"} country="in" pagesize={12} category="entertainment" />}></Route>
            <Route path="/general" element={<News key={"general"}  country="in" pagesize={12} category="general" />}></Route>
            <Route path="/health" element={<News key={"health"} country="in" pagesize={12} category="health" />}></Route>
            <Route path="/science" element={<News key={"science"} country="in" pagesize={12} category="science" />}></Route>
            <Route path="/sports" element={<News key={"sports"} country="in" pagesize={12} category="sports" />}></Route>
            <Route path="/business" element={<News key={"business"} country="in" pagesize={12} category="business" />}></Route>
            <Route path="/technology" element={<News key={"technology"} country="in" pagesize={12} category="technology" />}></Route>
          </Routes>

          <Footer />
        </Router>
      </div>
    )
  }
}
