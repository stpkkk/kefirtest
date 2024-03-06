import React from "react";
import Heart from "../assets/icons/heart.svg";

interface ILikes {
    quantity: number;
}

const Likes: React.FC<ILikes> = ({quantity}) => {
    return (
        <div className="flex_between gap-[8px]">
            <button type="button">
                <img
                    src={Heart}
                    alt="total-likes"
                    className="w-[16px] h-[16px] lg:w-[22px] lg:h-[22px]"
                />
            </button>
            <span className="lg:text-[15px] text-sm font-bold">{quantity}</span>
        </div>
    );
};

export default Likes;
