import { useHistory } from "react-router-dom";
import "./style.scss";
import { KeyDownHandlerType } from "../../types";
import React, { useState } from "react";

import CoffeeMachine from "../groundComponents/coffeemachine";
import Water from "../groundComponents/water";
import Powder from "../groundComponents/powder";
import IceRefrigerator from "../groundComponents/iceRefrigerator";
import Refrigerator from "../groundComponents/refrigerator";
import Teabag from "../groundComponents/teabag";
import Output from "../groundComponents/output";
import Front from "../groundComponents/front";

const Ground = function () {
    const [coffeeMachineSwitch, setCoffeeMachineSwitch] = useState(false);
    const [waterSwitch, setWaterSwitch] = useState(false);
    const [powderSwitch, setPowderSwtich] = useState(false);
    const [iceRefriSwitch, setIceRefriSwitch] = useState(false);
    const [refriSwitch, setRefriSwitch] = useState(false);
    const [teabagSwitch, setTeabagSwitch] = useState(false);
    const [outputSwitch, setOutputSwitch] = useState(false);
    const [frontSwitch, setFrontSwitch] = useState(false);

    const history = useHistory();
    let [Xmove, setXmove] = useState(0);
    let [Ymove, setYmove] = useState(0);

    const frontComment = function () {
        setFrontSwitch(!frontSwitch);
        setTimeout(() => {
            setFrontSwitch(!frontSwitch);
        }, 2000);
    };

    const keyDownHandler: KeyDownHandlerType = function (e) {
        const keyZ = e.code === "KeyZ";
        const left = Xmove === 0 && keyZ;
        const right = Xmove === 100 && keyZ;

        const coffeeMachineOnOff = Ymove === 100 && left;
        const waterOnOff = Ymove === 0 && left;
        const powderOnOff = Ymove === 200 && right;
        const iceRefriOnOff = Ymove === 100 && right;
        const refriOnOff = Ymove === 0 && right;
        const teabagOnOff = Ymove === 300 && right;
        const outputOnOff = Ymove === 200 && left;
        const frontOnOff = Ymove === 300 && left;
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
        if (coffeeMachineOnOff) {
            setCoffeeMachineSwitch(!coffeeMachineSwitch);
        }
        if (waterOnOff) {
            setWaterSwitch(!waterSwitch);
        }
        if (powderOnOff) {
            setPowderSwtich(!powderSwitch);
        }
        if (iceRefriOnOff) {
            setIceRefriSwitch(!iceRefriSwitch);
        }
        if (refriOnOff) {
            setRefriSwitch(!refriSwitch);
        }
        if (teabagOnOff) {
            setTeabagSwitch(!teabagSwitch);
        }
        if (outputOnOff) {
            setOutputSwitch(!outputSwitch);
        }
        if (frontOnOff) {
            frontComment();
        }
    };

    return (
        <div className="ground" tabIndex={0} onKeyDown={keyDownHandler}>
            <h3>game View</h3>
            <section className="play-ground">
                {/* Front Line */}
                {waterSwitch ? <Water /> : null}
                {coffeeMachineSwitch ? <CoffeeMachine /> : null}
                {outputSwitch ? <Output /> : null}
                {frontSwitch ? <Front /> : null}
                {/* Back Line */}
                {refriSwitch ? <Refrigerator /> : null}
                {iceRefriSwitch ? <IceRefrigerator /> : null}
                {powderSwitch ? <Powder /> : null}
                {teabagSwitch ? <Teabag /> : null}
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
