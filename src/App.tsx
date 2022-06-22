import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import { db } from "./firebase";

import Login from "./view/login";
import Main from "./view/main";
import Ground from "./view/ground";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                <Route path="/main">
                    <Main />
                </Route>
                <Route path="/ground" render={() => <Ground />} />
            </Switch>
        </div>
    );
}

export default App;
