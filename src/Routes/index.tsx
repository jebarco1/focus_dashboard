import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import LayoutRoutes from "./LayoutRoutes";
import Login from "../Pages/Authentication/Login";

import Register from "../Pages/Others/Authentication/RegisterSimple/RegisterSimple";
import Registered from "../Pages/Others/Authentication/RegisterSimple/Registered";
import ResetPassword from "../Pages/Others/Authentication/ResetPassword/ResetPassword";
import RegisterWizard from "../Pages/Others/Authentication/RegisterWizard/RegisterWizard";
import ResetPasswordSet from "../Pages/Others/Authentication/ResetPassword/ResetPasswordSet";

const Routers = () => {
  const login = localStorage.getItem("login");

  return (
    <HashRouter>
      <Routes>
        {/* Public Routes available without authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/registered" element={<Registered />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/register-wizard" element={<RegisterWizard/>} />
        <Route path="/resetPassword" element={<ResetPasswordSet/>} />

        {login ? (
          <>
            {/* Default route for authenticated users */}
            <Route
              path="/"
              element={<Navigate to="/pages/historicaldatabynumber" replace />}
            />
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/*" element={<LayoutRoutes />} />
            </Route>
            {/* Catch-all for authenticated users */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        ) : (
          // For unauthenticated users, any other route redirects to login
          <Route path="*" element={<Navigate to="/login" replace />} />
        )}
      </Routes>
    </HashRouter>
  );
};

export default Routers;
