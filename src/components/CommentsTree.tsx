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
            <ul className="flex flex-col gap-[24px] lg:gap-[20px]">
                {childComments.map((childComment) => (
                    <li
                        className="flex flex-col flex-nowrap gap-[20px] pl-[20px]"
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
        <div>
            {comments
                .filter((comment) => comment.parent === null)
                .map((rootComment) => (
                    <ul
                        className="flex flex-col gap-[24px] lg:gap-[20px]"
                        key={rootComment.id}
                    >
                        <li className="flex gap-[20px]" key={rootComment.id}>
                            <Comment comment={rootComment} />
                        </li>
                        {buildCommentTree(rootComment.id)}
                    </ul>
                ))}
        </div>
    );
};

export default CommentsTree;
