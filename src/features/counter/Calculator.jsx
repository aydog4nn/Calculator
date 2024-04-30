import React from "react";
import { useSelector } from "react-redux";

function Calculator() {
    const { value } = useSelector((store) => store.calculator);
    return (
        <section className="mx-auto bg-body-bg p-10 columns-5 h-lvh flex items-center justify-center  ">
            <div className="basis-1/3 bg-black h-full flex-col border-4 border-gray-500 rounded-md">
                {/* Result Screen */}
                <div className="text-black text-5xl text-end p-5 h-1/3 bg-red-700">result</div>
                {/* Buttons */}
                <div className="grid-cols-4 grid-rows-1 grid-flow-row flex gap-10 items-center justify-center mt-10 ">
                    <div className="bg-white border-1 border-red-900 p-7 rounded-full">abc</div>
                    <div className="bg-white border-1 border-red-900 p-7 rounded-full">abc</div>
                    <div className="bg-white border-1 border-red-900 p-7 rounded-full">abc</div>
                    <div className="bg-white border-1 border-red-900 p-7 rounded-full">abc</div>
                </div>
                <div className="grid-cols-4 grid-rows-1 grid-flow-row flex gap-10 items-center justify-center mt-5 ">
                    <div className="bg-white border-1 border-red-900 p-7 rounded-full">abc</div>
                    <div className="bg-white border-1 border-red-900 p-7 rounded-full">abc</div>
                    <div className="bg-white border-1 border-red-900 p-7 rounded-full">abc</div>
                    <div className="bg-white border-1 border-red-900 p-7 rounded-full">abc</div>
                </div>
                <div className="grid-cols-4 grid-rows-1 grid-flow-row flex gap-10 items-center justify-center mt-5 ">
                    <div className="bg-white border-1 border-red-900 p-7 rounded-full">abc</div>
                    <div className="bg-white border-1 border-red-900 p-7 rounded-full">abc</div>
                    <div className="bg-white border-1 border-red-900 p-7 rounded-full">abc</div>
                    <div className="bg-white border-1 border-red-900 p-7 rounded-full">abc</div>
                </div>
                <div className="grid-cols-4 grid-rows-1 grid-flow-row flex gap-10 items-center justify-center mt-5 ">
                    <div className="bg-white border-1 border-red-900 p-7 rounded-full">abc</div>
                    <div className="bg-white border-1 border-red-900 p-7 rounded-full">abc</div>
                    <div className="bg-white border-1 border-red-900 p-7 rounded-full">abc</div>
                    <div className="bg-white border-1 border-red-900 p-7 rounded-full">abc</div>
                </div>
            </div>
        </section>
    );
}

export default Calculator;
