import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.scss";
const Main = function () {
    const history = useHistory();
    const [left, setLeft] = useState(0);
    const [top, setTop] = useState(0);

    const handler = function (event: React.KeyboardEvent<HTMLDivElement>) {
        console.log(event.code);
        if (event.code === "ArrowUp") {
            setTop((top) => top - 10);
        }

        if (event.code === "ArrowDown") {
            setTop((top) => top + 10);
        }

        if (event.code === "ArrowLeft") {
            setLeft((left) => left - 10);
        }

        if (event.code === "ArrowRight") {
            setLeft((left) => left + 10);
        }
    };
    return (
        <div>
            <h2>Main View</h2>
            <div className="container" tabIndex={0} onKeyDown={handler}>
                <div className="box" style={{ top: top, left: left }}></div>
            </div>
            <button onClick={() => history.push("/ground")}>start</button>
            <button onClick={() => history.replace("/")}>Logout</button>
        </div>
    );
};

export default Main;
