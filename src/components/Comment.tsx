import React from "react";
import {formatDateTime} from "../lib";
import {IComment} from "../types";
import Likes from "./Likes";

interface ICommentProps {
    comment: IComment;
}

const Comment: React.FC<ICommentProps> = ({comment}) => {
    return (
        <div className="flex gap-[20px]">
            <img
                src={comment.authorDetails?.avatar}
                alt="avatar"
                className="lg:max-w-[68px] w-full lg:h-[68px] h-[40px] max-w-[40px] rounded-full object-cover"
            />
            <div className="flex flex-col w-full">
                <div className="flex_between min-h-[40px] lg:min-h-[68px]">
                    <div className="flex flex-col lg:gap-[4px] mb-[8px]">
                        <span className="font-bold text-sm lg:text-md leading-[22px]">
                            {comment.authorDetails?.name}
                        </span>
                        <span className="text-gray text-sm lg:text-md leading-[19px] lg:leading-[17px]">
                            {formatDateTime(comment.created)}
                        </span>
                    </div>
                    <Likes comment={comment} />
                </div>
                <div className="flex break-all">
                    <p className="text-sm leading-[17px] lg:text-md lg:leading-[19px] ">
                        {comment.text}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Comment;
