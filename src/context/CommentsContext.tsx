import {createContext} from "react";
import {IComment} from "../types";

export type GlobalContent = {
    comments: IComment[];
    setComments: React.Dispatch<React.SetStateAction<IComment[]>>;
};

export const CommentsContext = createContext<GlobalContent>({
    comments: [],
    setComments: () => {},
});
