import React, {useContext} from "react";
import {CommentsContext} from "../context";
import {IComment} from "../types";
import Comment from "./Comment";

const buildCommentTree = (comments: IComment[], parentId: number | null) => {
    const childComments = comments.filter(
        (comment) => comment.parent === parentId,
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
                    {buildCommentTree(comments, childComment.id)}
                </li>
            ))}
        </ul>
    );
};

const CommentsTree: React.FC = () => {
    const {comments} = useContext(CommentsContext);

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
                            {buildCommentTree(comments, rootComment.id)}
                        </div>
                    </li>
                ))}
        </ul>
    );
};

export default CommentsTree;
