import React, {useContext} from "react";
import {Heart} from "../assets/icons/Heart";
import {CommentsContext} from "../context";
import useScroll from "../hooks/useScroll";

const CommentsHeader: React.FC = () => {
    const isScrolled = useScroll();
    const {comments} = useContext(CommentsContext);
    const totalLikes = comments.reduce((acc, c) => acc + c.likes, 0);

    const getCommentsText = (num: any) => {
        const cases = [2, 0, 1, 1, 1, 2];
        const titles = ["комментарий", "комментария", "комментариев"];

        return `${num} ${
            titles[
                num % 100 > 4 && num % 100 < 20
                    ? 2
                    : cases[num % 10 < 5 ? num % 10 : 5]
            ]
        }`;
    };

    return (
        <div
            className={`sticky top-0 z-20 divide-solid divide-grayLight divide-y-[0.2px] bg-blend-soft-light pt-[10px] ${
                isScrolled
                    ? "bg-opacity-80 backdrop-filter backdrop-blur-md -top-2"
                    : ""
            }`}
        >
            <div className="flex_between mb-[10px] px-6 lg:px-0 lg:mb-[8px] font-bold">
                <span className="lg:text-md text-sm">
                    {getCommentsText(comments.length)}
                </span>
                <div className="flex justify-between items-center flex-nowrap gap-[8px]">
                    <div className="w-[16px] h-[16px] lg:w-[22px] lg:h-[22px]">
                        <Heart bgColor="transparent" border="gray" />
                    </div>
                    <span className="lg:text-[15px] text-sm font-bold">
                        {totalLikes}
                    </span>
                </div>
            </div>
            <div />
        </div>
    );
};

export default CommentsHeader;
