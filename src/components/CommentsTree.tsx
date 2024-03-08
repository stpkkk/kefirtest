import React from "react";
import {IComment} from "../types";
import Comment from "./Comment";

interface ICommentsProps {
    comments: IComment[];
    setComments: React.Dispatch<React.SetStateAction<IComment[]>>;
}

const buildCommentTree = (
    comments: IComment[],
    parentId: number | null,
    setComments: React.Dispatch<React.SetStateAction<IComment[]>>,
) => {
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
                    <Comment comment={childComment} setComments={setComments} />
                    {buildCommentTree(comments, childComment.id, setComments)}
                </li>
            ))}
        </ul>
    );
};

const CommentsTree: React.FC<ICommentsProps> = ({comments, setComments}) => {
    return (
        <ul className="flex flex-col">
            {comments
                .filter((comment) => comment.parent === null)
                .map((rootComment) => (
                    <li
                        className="flex flex-col mt-[20px]"
                        key={rootComment.id}
                    >
                        <Comment
                            comment={rootComment}
                            setComments={setComments}
                        />
                        <div className="lg:pl-0 pl-[20px]">
                            {buildCommentTree(
                                comments,
                                rootComment.id,
                                setComments,
                            )}
                        </div>
                    </li>
                ))}
        </ul>
    );
};

export default CommentsTree;
