import { useHistory } from "react-router-dom";
import "./style.scss";
import { KeyDownHandlerType } from "../../types";
import React, { useState } from "react";

import CoffeeMachine from "../coffeemachine";

const Ground = function () {
    const [coffeeMachineSwitch, setCoffeeMachineSwitch] = useState(false);
    const history = useHistory();
    let [Xmove, setXmove] = useState(0);
    let [Ymove, setYmove] = useState(0);
    const keyDownHandler: KeyDownHandlerType = function (e) {
        // console.log(e.code);
        if (e.code === "ArrowUp") {
            if (Ymove === 0) {
                setYmove(Ymove);
            } else {
                setYmove((Ymove) => Ymove - 100);
            }
        }
        if (e.code === "ArrowDown") {
            if (Ymove === 300) {
                return null;
            } else {
                setYmove((Ymove) => Ymove + 100);
            }
        }
        if (e.code === "ArrowLeft") {
            if (Xmove === 0) {
                return null;
            } else {
                setXmove((Xmove) => Xmove - 100);
            }
        }
        if (e.code === "ArrowRight") {
            if (Xmove === 100) {
                return null;
            } else {
                setXmove((Xmove) => Xmove + 100);
            }
        }
    };

    return (
        <div className="ground" tabIndex={0} onKeyDown={keyDownHandler}>
            <h3>game View</h3>
            <section className="play-ground">
                <CoffeeMachine />
                <img className="left" src="/images/left.png" alt="#" />
                <div className="field-line">
                    <img
                        className="char"
                        src="/images/character.png"
                        alt="#"
                        style={{ left: Xmove, top: Ymove }}
                    />
                </div>
                <img className="right" src="/images/right.png" alt="#" />
            </section>
            <button onClick={() => history.goBack()}>Back</button>
        </div>
    );
};

export default Ground;
