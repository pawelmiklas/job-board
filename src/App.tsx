import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LayoutWrapper from "components/LayoutWrapper/LayoutWrapper";
import Home from "pages/Home/Home";
import Offers from "pages/Offers/Offers";
import Offer from "pages/Offers/components/Offer/Offer";
import ScrollToTop from "components/ScrollToTop/ScrollToTop";
import Login from "pages/Login/Login";
import Registration from "pages/Registration/Registration";
import Dashboard from "pages/Dashboard/Dashboard";
import "react-toastify/dist/ReactToastify.css";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import AuthorizedRoute from "components/AuthorizedRoute/AuthorizedRoute";

firebase.initializeApp({
  apiKey: "AIzaSyAzjNhRFQDnHnKgCVwZ9mnZT5fQ6cXTNls",
  authDomain: "mobile-jobs-only.firebaseapp.com",
  projectId: "mobile-jobs-only",
  storageBucket: "mobile-jobs-only.appspot.com",
  messagingSenderId: "768982045524",
  appId: "1:768982045524:web:03a0838e577ced95876ec1",
  measurementId: "G-86YMTS6DFK",
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
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
            <AuthorizedRoute exact path="/dashboard">
              <Dashboard />
            </AuthorizedRoute>
            <AuthorizedRoute exact path="/dashboard/offers">
              <div>offers</div>
            </AuthorizedRoute>
            <AuthorizedRoute exact path="/dashboard/offers/add">
              <div>offer add</div>
            </AuthorizedRoute>
            <AuthorizedRoute exact path="/dashboard/offers/edit/:id">
              <div>offer edit</div>
            </AuthorizedRoute>
          </Switch>
        </LayoutWrapper>
      </ChakraProvider>
    </BrowserRouter>
  );
};

export default App;
