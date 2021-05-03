import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LayoutWrapper from "components/LayoutWrapper/LayoutWrapper";
import Home from "pages/Home/Home";
import Offers from "pages/Offers/Offers";
import OfferView from "pages/Offers/components/OfferView/OfferView";
import ScrollToTop from "components/ScrollToTop/ScrollToTop";
import Login from "pages/Login/Login";
import Registration from "pages/Registration/Registration";
import Dashboard from "pages/Dashboard/Dashboard";
import AuthorizedRoute from "components/AuthorizedRoute/AuthorizedRoute";
import UserOffers from "pages/UserOffers/UserOffers";
import OfferAddEdit from "pages/Offers/components/OfferAddEdit/OfferAddEdit";
import NotFound from "pages/NotFound/NotFound";
import "react-toastify/dist/ReactToastify.css";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

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

const App = () => (
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
            <OfferView />
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
            <UserOffers />
          </AuthorizedRoute>
          <AuthorizedRoute exact path="/dashboard/offers/add">
            <OfferAddEdit />
          </AuthorizedRoute>
          <AuthorizedRoute exact path="/dashboard/offers/edit/:id">
            <OfferAddEdit editable />
          </AuthorizedRoute>
        </Switch>
        <Route>
          <NotFound />
        </Route>
      </LayoutWrapper>
    </ChakraProvider>
  </BrowserRouter>
);

export default App;
