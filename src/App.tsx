import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LayoutWrapper from "components/LayoutWrapper/LayoutWrapper";
import Home from "pages/Home/Home";
import Offers from "pages/Offers/Offers";

const App = () => {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <LayoutWrapper>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/offers">
              <Offers />
            </Route>
            <Route path="/offers/:id">
              <div>offer</div>
            </Route>
            <Route path="/login">
              <div>login</div>
            </Route>
            <Route path="/register">
              <div>register</div>
            </Route>
            <Route path="/dashboard">
              <div>dashboard</div>
            </Route>
            <Route path="/dashboard/profile">
              <div>profile</div>
            </Route>
            <Route path="/dashboard/offers">
              <div>offers</div>
            </Route>
            <Route path="/dashboard/offers/add">
              <div>offer add</div>
            </Route>
            <Route path="/dashboard/offers/edit/:id">
              <div>offer edit</div>
            </Route>
          </Switch>
        </LayoutWrapper>
      </ChakraProvider>
    </BrowserRouter>
  );
};

export default App;
