import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import { withRouter, Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  // Add your own authentication on the below line.
  const { userData } = useContext(UserContext);
  const history = useHistory();
  let isLoggedIn = localStorage.getItem("auth-token");
  //
  // console.log(isLoggedIn);
  console.log(userData);
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <Component
            teamNumber={userData.user ? userData.user.teamNumber : -2}
          />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default withRouter(PrivateRoute);
