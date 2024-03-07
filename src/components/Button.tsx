import React from "react";

interface IButton {
    onClick: () => void;
    text: string;
}

const Button: React.FC<IButton> = ({onClick, text}) => {
    return (
        <button
            className="flex_center max-w-[234px] w-full h-[36px] mt-[40px] lg:mt-[60px] sm:mt-[32px] bg-grayDark leading-[22px] hover:bg-grayLight transition duration-300"
            type="button"
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;
