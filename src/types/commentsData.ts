import {IComment} from "./comment";

export interface ICommentsData {
    pagination: {
        page: number;
        size: number;
        total_pages: number;
    };
    data: IComment[];
}
