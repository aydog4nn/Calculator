import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "./calculatorSlice";

function Calculator() {
    const dispatch = useDispatch();
    const [display, setDisplay] = useState("0");
    const [lastOperation, setLastOperation] = useState(null);
    const [showOperation, setShowOperation] = useState("");
    const { value } = useSelector((store) => store.calculator);

    const clickButton = (value) => {
        if (value === "+" || value === "-" || value === "*" || value === "/") {
            setLastOperation(value);
            setShowOperation((prevShowOperation) => prevShowOperation + display + value);
            setDisplay("");
        } else {
            if (lastOperation !== null) {
                setShowOperation((prevShowOperation) => prevShowOperation + display);
                setDisplay(value);
            } else {
                setDisplay((prevDisplay) => {
                    
                    if (prevDisplay === "0") {
                        return value;
                    } else {
                        
                        return prevDisplay + value;
                    }
                });
            }
        }
    };

    const handleEqual = () => {
        let result = parseFloat(display);
        let currentOperation = lastOperation;
    
        
        if (lastOperation !== null) {
            const parts = showOperation.split(lastOperation);
            const number1 = parseFloat(parts[0]);
            const number2 = parseFloat(parts[1]);
    
            if (!isNaN(number1) && !isNaN(number2)) {
                switch (lastOperation) {
                    case "+":
                        result = number1 + number2;
                        break;
                    case "-":
                        result = number1 - number2;
                        break;
                    case "*":
                        result = number1 * number2;
                        break;
                    case "/":
                        result = number1 / number2;
                        break;
                    default:
                        break;
                }
            }
        }
    
        setDisplay(result.toString());
        setShowOperation("");
        setLastOperation(null);
    };

    const handleClear = () => {
        setDisplay("0");
        setLastOperation(null);
        setShowOperation("");
    };


    return (
        <section className="mx-auto bg-body-bg p-10 columns-5 h-lvh flex items-center justify-center ">
            <div className="basis-1/3 bg-black h-full flex-col border-4 border-gray-500 rounded-md p-5">
                {/* Result Screen */}
                <div className="text-black text-5xl text-end p-5 h-1/3 bg-result-screen-bg ">
                    <input type="text" value={showOperation || display} readOnly />
                    
                    
                </div>
                {/* Buttons */}
                <div className="grid-cols-4 grid-rows-1 grid-flow-row flex gap-10 items-center justify-center mt-10 ">
                    <div
                        className="div-button"
                        id="delete"
                        onClick={handleClear}
                        
                    >
                        C
                    </div>
                    <div
                        className="div-button"
                        id="equal"
                        onClick={handleEqual}
                    >
                        =
                    </div>
                    <div
                        className="div-button"
                        id="divide"
                        onClick={() => clickButton("/")}
                    >
                        /
                    </div>
                    <div
                        className="div-button"
                        id="plus"
                        onClick={() => clickButton("+")}
                    >
                        +
                    </div>
                </div>
                <div className="grid-cols-4 grid-rows-1 grid-flow-row flex gap-10 items-center justify-center mt-5 ">
                    <div
                        className="div-button"
                        id="7"
                        onClick={(e) => clickButton(e.target.innerText)}
                    >
                        7
                    </div>
                    <div
                        className="div-button"
                        id="eight"
                        onClick={(e) => clickButton(e.target.innerText)}
                    >
                        8
                    </div>
                    <div
                        className="div-button"
                        id="nine"
                        onClick={(e) => clickButton(e.target.innerText)}
                    >
                        9
                    </div>
                    <div
                        className="div-button"
                        id="zero"
                        onClick={(e) => clickButton(e.target.innerText)}
                    >
                        0
                    </div>
                </div>
                <div className="grid-cols-4 grid-rows-1 grid-flow-row flex gap-10 items-center justify-center mt-5 ">
                    <div
                        className="div-button"
                        id="four"
                        onClick={(e) => clickButton(e.target.innerText)}
                    >
                        
                        4
                    </div>
                    <div
                        className="div-button"
                        id="five"
                        onClick={(e) => clickButton(e.target.innerText)}
                    >
                        5
                    </div>
                    <div
                        className="div-button"
                        id="six"
                        onClick={(e) => clickButton(e.target.innerText)}
                    >
                        6
                    </div>
                    <div
                        className="div-button"
                        id="multiple"
                        onClick={() => clickButton("*")}
                    >
                        x
                    </div>
                </div>
                <div className="grid-cols-4 grid-rows-1 grid-flow-row flex gap-10 items-center justify-center mt-5 ">
                    <div
                        className="div-button"
                        id="one"
                        onClick={(e) => clickButton(e.target.innerText)}
                    >
                        1
                    </div>
                    <div
                        className="div-button"
                        id="two"
                        onClick={(e) => clickButton(e.target.innerText)}
                    >
                        2
                    </div>
                    <div
                        className="div-button"
                        id="three"
                        onClick={(e) => clickButton(e.target.innerText)}
                    >
                        3
                    </div>
                    <div
                        className="div-button"
                        id="subtract"
                        onClick={() => clickButton("-")}
                    >
                        -
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Calculator;
