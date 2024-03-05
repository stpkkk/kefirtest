import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import useMockAdapter from "./api/useMockAdapter";
import "./styles/global.css";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
);

const RootApp = () => {
    useMockAdapter();

    return <App />;
};

root.render(
    <React.StrictMode>
        <RootApp />
    </React.StrictMode>,
);
