import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import About from "./Components/About";

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API;

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route
              exact
              path="/"
              element={
                <News
                  key="home"
                  country="in"
                  pageSize={12}
                  category="general"
                  apiKey={this.apiKey}
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  key="business"
                  country="in"
                  pageSize={12}
                  category="business"
                  apiKey={this.apiKey}
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  country="in"
                  pageSize={12}
                  category="entertainment"
                  apiKey={this.apiKey}
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <News
                  key="general"
                  country="in"
                  pageSize={12}
                  category="general"
                  apiKey={this.apiKey}
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  key="health"
                  country="in"
                  pageSize={12}
                  category="health"
                  apiKey={this.apiKey}
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  key="science"
                  country="in"
                  pageSize={12}
                  category="science"
                  apiKey={this.apiKey}
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  key="sports"
                  country="in"
                  pageSize={12}
                  category="sports"
                  apiKey={this.apiKey}
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  key="technology"
                  country="in"
                  pageSize={12}
                  category="technology"
                  apiKey={this.apiKey}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    );
  }
}
