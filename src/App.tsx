import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LayoutWrapper from "components/LayoutWrapper/LayoutWrapper";
import Home from "pages/Home/Home";
import Offers from "pages/Offers/Offers";
import Offer from "pages/Offers/components/Offer/Offer";
import ScrollToTop from "components/ScrollToTop/ScrollToTop";
import Login from "pages/Login/Login";
import Registration from "pages/Registration/Registration";
import Dashboard from "pages/Dashboard/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <LayoutWrapper>
          <ScrollToTop />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/offers">
              <Offers />
            </Route>
            <Route path="/offers/:id">
              <Offer />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/registration">
              <Registration />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/dashboard/profile">
              <div>profile</div>
            </Route>
            <Route exact path="/dashboard/offers">
              <div>offers</div>
            </Route>
            <Route exact path="/dashboard/offers/add">
              <div>offer add</div>
            </Route>
            <Route exact path="/dashboard/offers/edit/:id">
              <div>offer edit</div>
            </Route>
          </Switch>
        </LayoutWrapper>
      </ChakraProvider>
    </BrowserRouter>
  );
};

export default App;
