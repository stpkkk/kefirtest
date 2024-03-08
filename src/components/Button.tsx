import React from "react";

interface IButton {
    onClick: () => void;
    text: string;
    isDisabled: boolean;
}

const Button: React.FC<IButton> = ({onClick, text, isDisabled}) => {
    return (
        <button
            className={`flex_center max-w-[234px] w-full h-[36px] bg-grayDark leading-[22px] hover:bg-grayLight transition duration-300 ${
                isDisabled && "pointer-events-none opacity-50"
            }`}
            type="button"
            disabled={isDisabled}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;
