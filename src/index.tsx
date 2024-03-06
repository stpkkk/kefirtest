import React from "react";
import ReactDOM from "react-dom/client";
import {QueryClient, QueryClientProvider} from "react-query";
import App from "./App";
import useMockAdapter from "./api/useMockAdapter";
import "./styles/global.css";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
);

const RootApp = () => {
    useMockAdapter();

    return (
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    );
};

root.render(
    <React.StrictMode>
        <RootApp />
    </React.StrictMode>,
);
