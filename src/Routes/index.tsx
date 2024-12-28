import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import LayoutRoutes from "./LayoutRoutes";
import { authRoutes } from "./AuthRoutes";
import Login from "../Pages/Authentication/Login";

const Routers = () => {
  const login = localStorage.getItem("login");

  return (
    <BrowserRouter basename={"/"}>
      <Routes>
        {login ? (
          <>
            <Route
              path={`${process.env.PUBLIC_URL}` || '/'}
              element={
                <Navigate to={`./login`} />
              }
            />
          </>
        ) : (
          ""
        )}
        <Route path={"/"} element={<PrivateRoute />}>
          <Route path={`/*`} element={<LayoutRoutes />} />
        </Route>
        {authRoutes.map(({ path, Component }, i) => (
          <Route path={path} element={Component} key={i} />
        ))}
        <Route path={`${process.env.PUBLIC_URL}/login`} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
