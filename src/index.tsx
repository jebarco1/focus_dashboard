import "./index.scss";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import './i18n'
import { Provider } from "react-redux";
import Store from "./ReaduxToolkit/Store";
import { unstable_batchedUpdates } from "react-dom";
import React from "react";

const root = ReactDOM.createRoot(
   document.getElementById("root") as HTMLElement
);

unstable_batchedUpdates(() => {
   console.error = () => { };
});

interface ErrorBoundaryProps {
   children: React.ReactNode;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps> {
   componentDidCatch(error: Error) {
      if (error.message.includes("ToastContainer")) {
         return;
      }
   }

   render() {
      return this.props.children;
   }
}

root.render(
   <Provider store={Store}>
      <ErrorBoundary>
         <App />
      </ErrorBoundary>
   </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();