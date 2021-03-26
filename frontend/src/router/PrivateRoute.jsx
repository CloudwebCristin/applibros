import { Redirect, Route } from "react-router-dom";
import { isUserLogged } from "../utils/authentication";

const PrivateRoute = (props) => {
  const { render, path } = props;
  const userIsLogged = isUserLogged();

  if (!userIsLogged) {
    return <Redirect to="/login" />;
  }

  return <Route exact path={path} render={render} />;
};

export default PrivateRoute;
