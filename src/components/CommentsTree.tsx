import React from "react";
import {IComment} from "../types";
import Comment from "./Comment";

interface ICommentsProps {
    comments: IComment[];
}

const CommentsTree: React.FC<ICommentsProps> = ({comments}) => {
    const buildCommentTree = (commentId: number) => {
        const childComments = comments.filter(
            (comment) => comment.parent === commentId,
        );

        if (childComments.length === 0) {
            return null;
        }

        return (
            <ul className="flex flex-col">
                {childComments.map((childComment) => (
                    <li
                        className="flex flex-col lg:pl-[20px] mt-[20px]"
                        key={childComment.id}
                    >
                        <Comment comment={childComment} />
                        {buildCommentTree(childComment.id)}
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <ul className="flex flex-col">
            {comments
                .filter((comment) => comment.parent === null)
                .map((rootComment) => (
                    <li
                        className="flex flex-col mt-[20px]"
                        key={rootComment.id}
                    >
                        <Comment comment={rootComment} />
                        <div className="lg:pl-0 pl-[20px]">
                            {buildCommentTree(rootComment.id)}
                        </div>
                    </li>
                ))}
        </ul>
    );
};

export default CommentsTree;
