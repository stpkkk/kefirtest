import {IAuthor} from "./author";

export interface IComment {
    id: number;
    created: string;
    text: string;
    author: number;
    parent: number | null;
    likes: number;
    authorDetails?: IAuthor;
}
