import React from "react";
import { Switch, Route } from "react-router-dom";

// APP STYLE
import "./App.css";

// SCREENS IMPORT
import Login from "./pages/Login.page";
import SignUp from "./pages/SignUp.page";
import ForgotPassword from "./pages/ForgotPassword.page";
import Verify from "./pages/Verify.page";

import HomePage from "./pages/Home.page";

import ProfilePage from "./pages/Profile.page";
import CreateUserPage from "./Admin/createUserpage"
import DeleteUserPage from "./Admin/deleteUserpage"
import EditUserPage from "./Admin/editUserpage"
// PUBLIC & PRIVATE ROUTES HANDLING
import AdminPrivateRoute from "./Route/AdminPrivateRoute";
import AdminPublicRoute from "./Route/AdminPublicRoute";
import PrivateRoute from "./Route/PrivateRoute";
import PublicRoute from "./Route/PublicRoute";

// ADMIN PANEL PAGES 
import AdminDashboard from "./Admin/Dashboard.page";
import AdminLogin from "./Admin/Login.page";
import { deleteUser } from "./Admin/_services/user.service";


function App() {
  return (
    <Switch>
      {/* USING FOLLOWING ROUTES TO REDIRECT ON ANY SPECIFIC PAGES */}

      <PublicRoute exact path="/login" component={Login} />
      <PublicRoute exact path="/sign-up" component={SignUp} />
      <PublicRoute exact path="/forgot-password" component={ForgotPassword} />
      <PublicRoute exact path="/verify/:useremail" component={Verify} />

      
      <Route exact path="/" component={HomePage} />

      <AdminPublicRoute exact path="/admin/login" component={AdminLogin} />
      <AdminPrivateRoute exact path="/admin/dashboard" component={AdminDashboard} />
      <AdminPrivateRoute exact path="/admin/create-user" component={CreateUserPage} />
      <AdminPrivateRoute exact path="/admin/edit-user" component={EditUserPage} />
      <AdminPrivateRoute exact path="/admin/delete-user" component={DeleteUserPage} />
      <PrivateRoute exact path="/profile" component={ProfilePage} />

      <Route path="*" component={() => "404 Not Found!"} />
    </Switch>
  );
}

export default App;
