import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "App";
import { Redirect, Route, RouteProps } from "react-router-dom";

const AuthorizedRoute = (routeProps: RouteProps) => {
  const [user] = useAuthState(auth);

  return user ? <Route {...routeProps} /> : <Redirect to="/" />;
};

export default AuthorizedRoute;
