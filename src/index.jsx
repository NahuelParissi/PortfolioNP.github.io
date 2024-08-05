import React from "react";
import ReactDOM from "react-dom/client";
import Layout from './layout/layout.jsx';

const rootElement = document.getElementById("root");

const Root = ReactDOM.createRoot(rootElement);

Root.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>,
  rootElement
);