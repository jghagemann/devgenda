import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import Register from "./pages/Register";
import ClientDetails from "./pages/ClientDetails";
import AddProject from "./pages/AddProject";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/profile"  component={UserProfile}/>
        <Route path="/register"  component={Register}/>
        <Route path="/client"  component={ClientDetails}/>
        <Route path="/newproject"  component={AddProject}/>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;