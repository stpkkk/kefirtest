import React from "react";

const Button: React.FC = () => {
    return (
        <button
            className="flex_center max-w-[234px] w-full h-[36px] mt-[40px] sm:mt-[32px] bg-grayDark leading-[22px] hover:bg-grayLight transition duration-300"
            type="button"
        >
            Загрузить еще
        </button>
    );
};

export default Button;
