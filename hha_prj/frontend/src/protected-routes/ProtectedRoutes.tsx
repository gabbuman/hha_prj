import { Route, Redirect } from "react-router-dom";
import { useAuthContext } from "./../contexts/AuthContext";
import { useUserContext } from "./../contexts/UserContext";
import Error from "../components/error/Error";
import React from 'react'

export default function ProtectedRoutes({
  component: Component,
  template,
  ...rest
}:any) {
  const { auth } = useAuthContext();
  const { user } = useUserContext();

  const switchRoute = () => {
    switch (template) {
      case "accessibleAfterLogin":
        return (
          <Route
            {...rest}
            render={(props) => {
              return auth || user ? (
                <Component {...props} />
              ) : (
                <Error msg={"Not logged in"} />
              );
            }}
          />
        );

      case "accessibleBeforeLogin":
        return (
          <Route
            {...rest}
            render={(props) => {
              return !auth && !user ? (
                <Component {...props} />
              ) : (
                <Redirect
                  to={{
                    pathname: "/",
                    state: {
                      from: props.location,
                    },
                  }}
                />
              );
            }}
          />
        );
      default:
        return;
    }
  };

  return <>{switchRoute()}</>;
}