import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import LayoutRoutes from "./LayoutRoutes";
import { authRoutes } from "./AuthRoutes";
import Login from "../Pages/Authentication/Login";

const Routers = () => {
  const login = localStorage.getItem("login");

  return (
    <HashRouter> 
      <Routes>
        {!login ? (
          <Route path="*" element={<Navigate to="login" replace />} /> 
        ) : (
          <>
            <Route path="/" element={<Navigate to="pages/historicaldatabynumber" replace />} /> {/* ✅ Removed "./" */}
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/*" element={<LayoutRoutes />} />
            </Route>
          </>
        )}
        {authRoutes.map(({ path, Component }, i) => (
          <Route path={path} element={<Component />} key={i} />
        ))}
        <Route path="login" element={<Login />} />
      </Routes>
    </HashRouter>
  );
};

export default Routers;
