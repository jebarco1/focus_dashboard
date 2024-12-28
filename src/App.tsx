import { Provider } from "react-redux";
import Routers from "./Routes";
import Store from "./ReaduxToolkit/Store";
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <>
      <Provider store={Store} >
        <Routers />
        <ToastContainer />
      </Provider>
    </>
  );
};

export default App;
