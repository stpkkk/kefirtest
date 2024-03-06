import React from "react";
import Comment from "./Comment";

const CommentsList: React.FC = () => {
    return (
        <ul className="flex flex-col gap-[24px] lg:gap-[32px] full pt-[32px] ">
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
        </ul>
    );
};

export default CommentsList;
