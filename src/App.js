import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Weather from './components/Weather';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  apikey="998420351e134dc2b80ea565ff227431"
  state = { progress: 0}
  setprogress=(progress)=> {
    this.setState({ progress: progress })
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            height={4}
            progress={this.state.progress}
          />
          <Routes>
            <Route path="/" element={<News setprogress={this.setprogress} apikey={this.apikey} key={"general"}  country="in" pagesize={18} category="general" />}></Route>
            <Route path="/entertainment" element={<News setprogress={this.setprogress} apikey={this.apikey} key={"entertainment"} country="in" pagesize={18} category="entertainment" />}></Route>
            <Route path="/health" element={<News setprogress={this.setprogress} apikey={this.apikey} key={"health"} country="in" pagesize={18} category="health" />}></Route>
            <Route path="/science" element={<News setprogress={this.setprogress} apikey={this.apikey} key={"science"} country="in" pagesize={18} category="science" />}></Route>
            <Route path="/sports" element={<News setprogress={this.setprogress} apikey={this.apikey} key={"sports"} country="in" pagesize={18} category="sports" />}></Route>
            <Route path="/business" element={<News setprogress={this.setprogress} apikey={this.apikey} key={"business"} country="in" pagesize={18} category="business" />}></Route>
            <Route path="/technology" element={<News setprogress={this.setprogress} apikey={this.apikey} key={"technology"} country="in" pagesize={18} category="technology" />}></Route>
            <Route path="/Weather.js" element={<Weather setprogress={this.setprogress} apikey={this.apikey} key={"Weather"} />}></Route>
          </Routes>
          <Footer />
        </Router>
      </div>
    )
  }
}
