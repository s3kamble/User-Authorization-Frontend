import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import LoginContext from "../utils/loginContext";

function ProtectedRoute(props) {
    const {loginValue} = useContext(LoginContext);
    return <>
        {loginValue ? 
            <Route path={props.path}>{props.component}</Route>
            :
            <Redirect to="/login" />

        }
    </>
}
export default ProtectedRoute;