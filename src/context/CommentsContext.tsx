import React, {ReactNode, createContext, useContext, useReducer} from "react";
import {IComment} from "../types";

interface CommentState {
    comments: IComment[];
}

type CommentAction = {type: "LIKE_COMMENT"; payload: {commentId: number}};

const commentReducer = (
    state: CommentState,
    action: CommentAction,
): CommentState => {
    switch (action.type) {
        case "LIKE_COMMENT":
            return {
                ...state,
                comments: state.comments.map((comment) =>
                    comment.id === action.payload.commentId
                        ? {...comment, likes: comment.likes + 1}
                        : comment,
                ),
            };
        default:
            return state;
    }
};

const CommentContext = createContext<
    | {
          state: CommentState;
          dispatch: React.Dispatch<CommentAction>;
      }
    | undefined
>(undefined);

export const CommentsProvider: React.FC<{children: ReactNode}> = ({
    children,
}) => {
    const [state, dispatch] = useReducer(commentReducer, {comments: []});

    return (
        <CommentContext.Provider value={{state, dispatch}}>
            {children}
        </CommentContext.Provider>
    );
};

export const useCommentContext = () => {
    const context = useContext(CommentContext);
    if (!context) {
        throw new Error(
            "useCommentContext must be used within a CommentProvider",
        );
    }
    return context;
};
