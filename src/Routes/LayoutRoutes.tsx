import { Route, Routes } from "react-router-dom";
import routes from "./Route";
import Layout from "../Layout/Layout";

const LayoutRoutes = () => {
  return (
    <>
     <Routes>
      {routes.map(({ path, Component }, i) => (
        <Route key={i} element={<Layout />}>
          <Route path={path} element={<Component />} />  {/* ✅ Wrap Component in JSX */}
        </Route>
      ))}
    </Routes>
    </>
  );
};

export default LayoutRoutes;
