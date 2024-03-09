import React from "react";
import Button from "./Button";
import CommentsHeader from "./CommentsHeader";
import CommentsTree from "./CommentsTree";

interface ICommentsProps {
    onLoadMore: () => void;
    isLoadMoreDisabled: boolean;
    isLoadingMore: boolean;
}

const Comments: React.FC<ICommentsProps> = ({
    onLoadMore,
    isLoadMoreDisabled,
    isLoadingMore,
}) => {
    return (
        <div className="max-w-[562px] w-full">
            <CommentsHeader />
            <div className="flex_center flex-col lg:gap-[60px] gap-[40px] pt-[12px]">
                <CommentsTree />
                {isLoadingMore ? (
                    <div className="flex_center">
                        <span className="tex-lg font-bold">Загрузка...</span>
                    </div>
                ) : (
                    <Button
                        onClick={onLoadMore}
                        isDisabled={isLoadMoreDisabled}
                        text="Загрузить еще"
                    />
                )}
            </div>
        </div>
    );
};

export default Comments;
