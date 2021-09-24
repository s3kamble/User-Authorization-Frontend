import React from "react";
import { Route,Switch } from "react-router-dom";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import Dashboard from "../components/Dashboard/Dashboard";
import ProtectedRoute from "./protectedRoute";

function AppRouter() {
    return (
      <div>
        <Switch>
          <Route path="/login" exact component={Login}/>
          <Route path="/signup" exact component={Signup}/>
          <ProtectedRoute path="/dashboard" exact component={Dashboard}/>
          {/* <Route path="/dashboard" exact component={Dashboard}/> */}
          <Route path="/" component={Home}/>

        </Switch>
      </div>
    );
  }

export default AppRouter;
