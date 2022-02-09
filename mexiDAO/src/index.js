import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";

import {ThirdwebWeb3Provider} from '@3rdweb/hooks'

//include chains you want to support.
// 4 = Rinkeby
const supportedChainIds = [4];

//include what type of wallet you want to support 
// In this case, we support Metamask which is injected wallet
const connectors = {
  injected: {},
};

// Render the App component to the DOM
// wrap app with ThirdwebWeb3Provider
ReactDOM.render(
    <React.StrictMode>
    <ThirdwebWeb3Provider 
    connectors = {connectors}
    supportedChainIds={supportedChainIds}
  >
    <App />
  </ThirdwebWeb3Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
