import useLocalStorage from "hooks/useLocalStorage";
import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

const AuthorizedRoute = (routeProps: RouteProps) => {
  const [user] = useLocalStorage<string | undefined>("userId", undefined);

  return user ? <Route {...routeProps} /> : <Redirect to="/" />;
};

export default AuthorizedRoute;
