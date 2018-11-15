import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./js/store/index";
import App from "./js/components/App";

// Force commit 2

render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);