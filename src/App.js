import React, { Component, Fragment } from "react";
import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store"

import NavbarComponent from "./components/NavbarComponent";
import C_About from "./components/C_About";
import C_Home from "./components/C_Home";
import C_ContentManage from "./components/C_ContentManage";
import C_ContentDetail from "./components/C_ContentDetail";

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
        <Fragment>
          <NavbarComponent />
          <Route exact path="/" component={C_Home} />
          <Route path="/about" component={C_About} />
          <Route path="/content_manage" component={C_ContentManage} />
          <Route path="/content_detail/:id" component={C_ContentDetail} />
        </Fragment>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
