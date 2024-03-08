import React from "react";
import {IComment} from "../types";
import Button from "./Button";
import CommentsHeader from "./CommentsHeader";
import CommentsTree from "./CommentsTree";

interface ICommentsProps {
    comments: IComment[];
    onLoadMore: () => void;
    isDisabled: boolean;
    isLoading: boolean;
}

const Comments: React.FC<ICommentsProps> = ({
    comments,
    onLoadMore,
    isDisabled,
    isLoading,
}) => {
    return (
        <div className="max-w-[562px] w-full">
            <CommentsHeader />
            <div className="flex_center flex-col lg:gap-[60px] gap-[40px] pt-[12px]">
                <CommentsTree comments={comments} />
                {isLoading ? (
                    <div className="flex_center">
                        <span className="tex-lg font-bold">Загрузка...</span>
                    </div>
                ) : (
                    <Button
                        onClick={onLoadMore}
                        isDisabled={isDisabled}
                        text="Загрузить еще"
                    />
                )}
            </div>
        </div>
    );
};

export default Comments;
