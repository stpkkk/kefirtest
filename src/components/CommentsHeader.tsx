import React from "react";
import Likes from "./Likes";

const CommentsHeader: React.FC = () => {
    return (
        <div className="divide-solid divide-grayLight divide-y-[0.2px]">
            <div className="flex_between mb-[10px] lg:mb-[8px] font-bold">
                <span className="lg:text-md text-sm">267 комментариев</span>
                {/* <Likes quantity={8632} /> */}
            </div>
            <div />
        </div>
    );
};

export default CommentsHeader;
