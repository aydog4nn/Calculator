import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "./calculatorSlice";

function Calculator() {
    const dispatch = useDispatch();
    const [result, setResult] = useState(0);

    const { value } = useSelector((store) => store.calculator);


    const useFormul = (dataText) => {
        const number1 =  ""
        console.log("useFormuliçi " + dataText)
        const newNumber1 = number1 + dataText
        const number2 = 0;
        console.log(newNumber1)
    }

    const clickButton = (event) => {
        const id = event.id
        const dataText = event.innerText;
        useFormul(dataText)
        console.log(id)
        if (id == "delete") {
            dispatch(reset())
        }
    };

    return (
        <section className="mx-auto bg-gray-500 p-10 columns-5 h-lvh flex items-center justify-center ">
            <div className="basis-1/3 bg-black h-full flex-col border-4 border-gray-500 rounded-md p-5">
                {/* Result Screen */}
                <div className="text-black text-5xl text-end p-5 h-1/3 bg-red-700 ">
                    {value}
                </div>
                {/* Buttons */}
                <div className="grid-cols-4 grid-rows-1 grid-flow-row flex gap-10 items-center justify-center mt-10 ">
                    <div
                        className="div-button"
                        id="delete"
                        onClick={(e) => clickButton(e.target)}
                        
                    >
                        C
                    </div>
                    <div
                        className="div-button"
                        id="percantage"
                        onClick={(e) => clickButton(e.target)}
                    >
                        %
                    </div>
                    <div
                        className="div-button"
                        id="divide"
                        onClick={(e) => clickButton(e.target)}
                    >
                        /
                    </div>
                    <div
                        className="div-button"
                        id="plus"
                        onClick={(e) => clickButton(e.target)}
                    >
                        +
                    </div>
                </div>
                <div className="grid-cols-4 grid-rows-1 grid-flow-row flex gap-10 items-center justify-center mt-5 ">
                    <div
                        className="div-button"
                        id="7"
                        onClick={(e) => clickButton(e.target)}
                    >
                        7
                    </div>
                    <div
                        className="div-button"
                        id="eight"
                        onClick={(e) => clickButton(e.target)}
                    >
                        8
                    </div>
                    <div
                        className="div-button"
                        id="nine"
                        onClick={(e) => clickButton(e.target)}
                    >
                        9
                    </div>
                    <div
                        className="div-button"
                        id="zero"
                        onClick={(e) => clickButton(e.target)}
                    >
                        0
                    </div>
                </div>
                <div className="grid-cols-4 grid-rows-1 grid-flow-row flex gap-10 items-center justify-center mt-5 ">
                    <div
                        className="div-button"
                        id="four"
                        onClick={(e) => clickButton(e.target)}
                    >
                        {" "}
                        4{" "}
                    </div>
                    <div
                        className="div-button"
                        id="five"
                        onClick={(e) => clickButton(e.target)}
                    >
                        5
                    </div>
                    <div
                        className="div-button"
                        id="six"
                        onClick={(e) => clickButton(e.target)}
                    >
                        6
                    </div>
                    <div
                        className="div-button"
                        id="multiple"
                        onClick={(e) => clickButton(e.target)}
                    >
                        x
                    </div>
                </div>
                <div className="grid-cols-4 grid-rows-1 grid-flow-row flex gap-10 items-center justify-center mt-5 ">
                    <div
                        className="div-button"
                        id="one"
                        onClick={(e) => clickButton(e.target)}
                    >
                        1
                    </div>
                    <div
                        className="div-button"
                        id="two"
                        onClick={(e) => clickButton(e.target)}
                    >
                        2
                    </div>
                    <div
                        className="div-button"
                        id="three"
                        onClick={(e) => clickButton(e.target)}
                    >
                        3
                    </div>
                    <div
                        className="div-button"
                        id="subtract"
                        onClick={(e) => clickButton(e.target)}
                    >
                        -
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Calculator;
