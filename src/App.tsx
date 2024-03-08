import React, {useState, useEffect, useCallback} from "react";
import {useQuery} from "react-query";
import getAuthorsRequest from "./api/authors/getAuthorsRequest";
import getCommentsRequest from "./api/comments/getCommentsRequest";
import {Comments} from "./components";
import {IAuthor, IComment, ICommentsData} from "./types";

function mergeCommentsWithAuthors(
    commentsData: IComment[],
    authorsData: IAuthor[],
): IComment[] {
    const authorsMap = new Map(
        authorsData.map((author) => [author.id, author]),
    );
    return commentsData.map((comment) => ({
        ...comment,
        authorDetails: authorsMap.get(comment.author),
    }));
}

function useAuthorsQuery() {
    return useQuery<IAuthor[]>("authors", getAuthorsRequest);
}

function useCommentsQuery(page: number) {
    return useQuery<ICommentsData>(["comments", page], () =>
        getCommentsRequest(page),
    );
}

function App() {
    const [page, setPage] = useState(1);
    const [comments, setComments] = useState<IComment[]>([]);
    const [isLoadMoreDisabled, setIsLoadMoreDisabled] = useState(false);

    const {
        data: authorsData,
        isLoading: authorsLoading,
        isError: authorsError,
        isSuccess: authorsSuccess,
    } = useAuthorsQuery();

    const {
        data: commentsData,
        isLoading: commentsLoading,
        isError: commentsError,
        isSuccess: commentsSuccess,
    } = useCommentsQuery(page);

    const onLoadMore = useCallback(() => {
        setPage((prev) => {
            const nextPage = prev + 1;
            if (
                commentsData?.pagination?.total_pages &&
                nextPage <= commentsData.pagination.total_pages
            ) {
                return nextPage;
            }
            return prev;
        });
    }, [commentsData]);

    const isLoading = authorsLoading || commentsLoading;

    useEffect(() => {
        if (commentsSuccess && authorsSuccess) {
            const mergedComments = mergeCommentsWithAuthors(
                commentsData.data,
                authorsData,
            );
            setComments((prevComments) => [...prevComments, ...mergedComments]);
            setIsLoadMoreDisabled(page >= commentsData.pagination.total_pages);
        }
    }, [commentsData, authorsData, commentsSuccess, authorsSuccess, page]);

    if (authorsError || commentsError) {
        return (
            <p className="place-items-center grid h-screen text-5xl font-bold">
                Error fetching data
            </p>
        );
    }

    return (
        <div className="flex_center px-6 lg:pt-[52px] pt-[32px] pb-[64px]">
            <Comments
                comments={comments}
                onLoadMore={onLoadMore}
                isDisabled={isLoadMoreDisabled}
                isLoading={isLoading}
            />
        </div>
    );
}

export default App;
