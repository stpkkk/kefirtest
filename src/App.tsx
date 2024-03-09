import React, {useState, useEffect, useCallback, useMemo} from "react";
import {useQuery} from "react-query";
import getAuthorsRequest from "./api/authors/getAuthorsRequest";
import getCommentsRequest from "./api/comments/getCommentsRequest";
import {Comments, Loader} from "./components";
import {CommentsContext} from "./context";
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

    const isLoading = (authorsLoading || commentsLoading) && page === 1;
    const isLoadingMore = authorsLoading || commentsLoading;
    const totalPages = commentsData?.pagination?.total_pages;

    const onLoadMore = useCallback(() => {
        setPage((prev) => {
            const nextPage = prev + 1;
            if (totalPages && nextPage <= totalPages) {
                return nextPage;
            }
            return prev;
        });
    }, [totalPages]);

    useEffect(() => {
        if (commentsSuccess && authorsSuccess) {
            const mergedComments = mergeCommentsWithAuthors(
                commentsData.data,
                authorsData,
            );
            setComments((prevComments) => [...prevComments, ...mergedComments]);
            setIsLoadMoreDisabled(
                totalPages !== undefined && page >= totalPages,
            );
        }
    }, [
        authorsData,
        authorsSuccess,
        commentsData,
        commentsSuccess,
        page,
        totalPages,
    ]);

    const contextValue = useMemo(
        () => ({
            comments,
            setComments,
        }),
        [comments, setComments],
    );

    if (isLoading) {
        return (
            <div className="place-items-center grid h-screen">
                <Loader />
            </div>
        );
    }

    if (authorsError || commentsError) {
        return (
            <p className="place-items-center grid h-screen text-5xl font-bold">
                Error fetching data 💥💥💥
            </p>
        );
    }

    return (
        <CommentsContext.Provider value={contextValue}>
            <div className="flex_center px-6 lg:pt-[52px] pt-[32px] pb-[64px]">
                <Comments
                    onLoadMore={onLoadMore}
                    isLoadingMore={isLoadingMore}
                    isLoadMoreDisabled={isLoadMoreDisabled}
                />
            </div>
        </CommentsContext.Provider>
    );
}

export default App;
