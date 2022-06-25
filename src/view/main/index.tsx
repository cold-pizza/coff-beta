import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.scss";
const Main = function () {
    const history = useHistory();

    return (
        <div>
            <h2>Main View</h2>

            <button onClick={() => history.push("/ground")}>start</button>
            <button onClick={() => history.replace("/")}>Logout</button>
        </div>
    );
};

export default Main;
