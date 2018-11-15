import React from "react";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import Nav from "./navigation/Nav";
import Layout from "../hoc/Layout";
import AddNew from "./addNew/Add-New";
import "../../css/index.css";

const routes = (
    <Switch>
        <Route path="/" exact component={AddNew}/>
        <Route path="/view-lists" component={AddNew}/>
    </Switch>
)

const App = () => (
    <div>
        <Nav />
        <Layout>
            {routes}
        </Layout>
    </div>
);

export default App;