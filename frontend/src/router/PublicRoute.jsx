import { Redirect, Route } from "react-router-dom";
import { isUserLogged } from "../utils/authentication";

const PublicRoute = (props) => {
  const { render, path } = props;
  const userIsLogged = isUserLogged();

  if (userIsLogged) {
    return <Redirect to="/home" />;
  }

  return <Route exact path={path} render={render} />;
};

export default PublicRoute;