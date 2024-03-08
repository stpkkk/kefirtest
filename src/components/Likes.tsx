import React, {useState} from "react";
import {Heart} from "../assets/icons/Heart";
import {IComment} from "../types";

interface ILikes {
    comment: IComment;
    setComments: React.Dispatch<React.SetStateAction<IComment[]>>;
}

const Likes: React.FC<ILikes> = ({comment, setComments}) => {
    const [liked, setLiked] = useState(false);

    const updateLikes = (newLikes: number) => {
        setComments((prevComments) =>
            prevComments.map((c) =>
                c.id === comment.id ? {...c, likes: newLikes} : c,
            ),
        );
    };

    const handleLikeToggle = () => {
        setLiked((prevLiked) => {
            const newLikes = prevLiked ? comment.likes - 1 : comment.likes + 1;
            updateLikes(newLikes);
            return !prevLiked;
        });
    };

    return (
        <button
            className="flex justify-between items-center flex-nowrap gap-[8px]"
            type="button"
            onClick={handleLikeToggle}
        >
            <div className="w-[16px] h-[16px] lg:w-[22px] lg:h-[22px]">
                <Heart bgColor={liked ? "#B43333" : "transparent"} />
            </div>
            <span className="lg:text-[15px] text-sm font-bold">
                {comment.likes}
            </span>
        </button>
    );
};

export default Likes;
