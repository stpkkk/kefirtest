import React from "react";
import Heart from "../assets/icons/heart.svg";

const Total = () => {
    return (
        <div className="divide-solid divide-lightGray divide-y">
            <div className="flex_between mb-[8px] font-lato font-bold">
                <span className="lg:text-md text-sm">267 комментариев</span>
                <div className="flex_between gap-[8px] max-w-[75px]">
                    <img className="p-[1px]" src={Heart} alt="total-likes" />
                    <span className="text-sm lg:text-[15px]">8 632</span>
                </div>
            </div>
            <div />
        </div>
    );
};

export default Total;
