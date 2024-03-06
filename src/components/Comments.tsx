import React from "react";
import Button from "./Button";
import CommentsHeader from "./CommentsHeader";
import CommentsList from "./CommentsList";

const Comments: React.FC = () => {
    return (
        <div className="max-w-[562px] w-full">
            <CommentsHeader />
            <div className="flex_center flex-col">
                <CommentsList />
                <Button />
            </div>
        </div>
    );
};

export default Comments;
