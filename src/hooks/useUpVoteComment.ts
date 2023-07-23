import { asyncNeutralVoteCommentThreadDetail, asyncUpVoteCommentThreadDetail } from "@/states/detailThread/action";
import { useState } from "react";
import { useDispatch } from "react-redux";

function useUpVoteComment(defaultValue= ''): [
    any,
    any,
] {
    const dispatch = useDispatch();

    const [commentId, setCommentId] = useState<string>(defaultValue);
    const [threadId, setThreadId] = useState<string>(defaultValue);

    const upVoteComment: any = (threadId: string,commentId: string) => {
        setCommentId(commentId);
        setThreadId(threadId);
        dispatch(asyncUpVoteCommentThreadDetail(threadId,commentId));
        setCommentId('');
    }

    const removeUpVoteComment: any = (threadId: string,commentId: string) => {
        setCommentId(commentId);
        setThreadId(threadId);
        dispatch(asyncNeutralVoteCommentThreadDetail(threadId,commentId));
        setCommentId('');
    }

    return [
        upVoteComment,
        removeUpVoteComment,
    ]
}

export default useUpVoteComment;