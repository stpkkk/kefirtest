import React, {useState} from "react";
import {useQuery} from "react-query";
import getAuthorsRequest from "./api/authors/getAuthorsRequest";
import getCommentsRequest from "./api/comments/getCommentsRequest";
import {Comments} from "./components";
import {IAuthor, IComment, ICommentsData} from "./types";

function mergeCommentsWithAuthors(
    commentsData: IComment[],
    authorsData: IAuthor[],
): IComment[] {
    // Create a map for author lookup by id
    const authorsMap = new Map(
        authorsData.map((author) => [author.id, author]),
    );

    // Map through commentsData and add the author details
    const mergedComments = commentsData.map((comment) => ({
        ...comment,
        authorDetails: authorsMap.get(comment.author),
    }));

    return mergedComments;
}

function App() {
    const [page, setPage] = useState(1);

    const {
        data: authorsData,
        isLoading: authorsLoading,
        isError: authorsError,
        isSuccess: authorsSuccess,
    } = useQuery<IAuthor[]>("authors", getAuthorsRequest);

    const {
        data: commentsData,
        isLoading: commentsLoading,
        isError: commentsError,
        isSuccess: commentsSuccess,
    } = useQuery<ICommentsData>(["comments", page], () =>
        getCommentsRequest(page),
    );

    if (authorsLoading || commentsLoading) {
        return (
            <p className="place-items-center grid h-screen text-5xl font-bold">
                Loading...
            </p>
        );
    }

    if (authorsError || commentsError) {
        return <p>Error fetching data</p>;
    }

    if (authorsSuccess && commentsSuccess) {
        const mergedComments = mergeCommentsWithAuthors(
            commentsData.data,
            authorsData,
        );

        return (
            <div className="flex_center px-6 lg:pt-[52px] pt-[32px] pb-[64px]">
                <Comments comments={mergedComments} setPage={setPage} />
            </div>
        );
    }

    return null;
}

export default App;
