import React, {useState} from "react";
import {useQuery} from "react-query";
import getAuthorsRequest from "./api/authors/getAuthorsRequest";
import getCommentsRequest from "./api/comments/getCommentsRequest";
import {Comments} from "./components";

function App() {
    const [page, setPage] = useState(1);

    // Authors query
    const {
        data: authorsData,
        isLoading: authorsLoading,
        isError: authorsError,
        isSuccess: authorsSuccess,
    } = useQuery("authors", getAuthorsRequest);

    // Comments query
    const {
        data: commentsData,
        isLoading: commentsLoading,
        isError: commentsError,
        isSuccess: commentsSuccess,
    } = useQuery(["comments", page], () => getCommentsRequest(page));

    console.log(authorsData, commentsData);

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
        return (
            <div className="flex_center px-6 pt-[52px] sm:pt-[32px] pb-[64px]">
                <Comments />
            </div>
        );
    }

    return null;
}

export default App;
