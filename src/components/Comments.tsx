import React from "react";
import {IComment} from "../types";
import Button from "./Button";
import CommentsHeader from "./CommentsHeader";
import CommentsTree from "./CommentsTree";

interface ICommentsProps {
    comments: IComment[];
    setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Comments: React.FC<ICommentsProps> = ({comments, setPage}) => {
    const onLoadMore = () => {
        setPage((prev: number) => prev + 1);
    };

    return (
        <div className="max-w-[562px] w-full">
            <CommentsHeader />
            <div className="flex_center flex-col pt-[12px]">
                <CommentsTree comments={comments} />
                <Button onClick={onLoadMore} text="Загрузить еще" />
            </div>
        </div>
    );
};

export default Comments;
