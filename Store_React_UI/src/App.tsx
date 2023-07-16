import React from "react";
import Main from "./components/Index/Main"
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import "./css/Account.scss";

import Footer from "./components/Footer";
import Contact from "./components/ContactMe/Contact";
import { Box, CssBaseline } from "@mui/material";
import Header from "./components/Index/Header";
import FNMenu from "./components/Menu/FNMenu";
import Login from "./components/Account/Login";
import Register from "./components/Account/Register";

export function App(): JSX.Element {
  return (
    <Router>
      <>
        <Box >
          <CssBaseline />
          <Header />
          {/* <Main/> */}

          <Route exact path="/" component={() => <Main />} />
          <Route exact path="/menu" component={() => <FNMenu />} />
          <Route exact path="/login" component={() => <Login />} />
          <Route exact path="/register" component={() => <Register />} />
          <Contact />
          <Footer />
        </Box>




      </>
    </Router>

  )

}