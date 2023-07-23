import { asyncDownVoteCommentThreadDetail, asyncNeutralVoteCommentThreadDetail, asyncUpVoteCommentThreadDetail } from "@/states/detailThread/action";
import { useState } from "react";
import { useDispatch } from "react-redux";

function useDownVoteComment(defaultValue= ''): [
    any,
    any,
] {
    const dispatch = useDispatch();

    const [commentId, setCommentId] = useState<string>(defaultValue);
    const [threadId, setThreadId] = useState<string>(defaultValue);

    const downVoteComment: any = (threadId: string,commentId: string) => {
        setCommentId(commentId);
        setThreadId(threadId);
        dispatch(asyncDownVoteCommentThreadDetail(threadId,commentId));
        setCommentId('');
    }

    const removeDownVoteComment: any = (threadId: string,commentId: string) => {
        setCommentId(commentId);
        setThreadId(threadId);
        dispatch(asyncNeutralVoteCommentThreadDetail(threadId,commentId));
        setCommentId('');
    }

    return [
        downVoteComment,
        removeDownVoteComment,
    ]
}

export default useDownVoteComment;