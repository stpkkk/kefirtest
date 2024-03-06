import React from "react";
import Ava from "../assets/images/avatars/yoda.jpeg";
import Likes from "./Likes";

const Comment: React.FC = () => {
    return (
        <li className="flex items w-full gap-[20px]">
            <img
                src={Ava}
                alt="avatar"
                className="lg:max-w-[68px] w-full lg:h-[68px] h-[40px] max-w-[40px] rounded-full"
            />
            <div className="flex flex-col">
                <div className="flex_between w-full min-h-[40px] lg:min-h-[68px]">
                    <div className="flex flex-col lg:gap-[4px] mb-[8px]">
                        <span className="font-bold text-sm lg:text-md leading-[22px]">
                            timo_shka
                        </span>
                        <span className="text-gray text-sm lg:text-md leading-[19px] lg:leading-[17px]">
                            1 час назад
                        </span>
                    </div>
                    <Likes quantity="635" />
                </div>
                <p className="text-sm leading-[17px] lg:text-md lg:leading-[19px]">
                    В Календаре появятся более десятка квестов – охота на зомби,
                    битвы с боссами, ритуалы и разное другое. В том числе, там
                    будет целая категория событий, за выполнение.
                </p>
            </div>
        </li>
    );
};

export default Comment;
