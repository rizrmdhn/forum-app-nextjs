import { asyncNeutralVoteCommentThreadDetail, asyncUpVoteCommentThreadDetail } from "@/states/detailThread/action";
import { useState } from "react";
import { useDispatch } from "react-redux";
import useLocale from "./useLocale";

function useUpVoteComment(defaultValue= ''): [
    any,
    any,
] {
    const {textLoginToVote} = useLocale()
    const dispatch = useDispatch();

    const [commentId, setCommentId] = useState<string>(defaultValue);
    const [threadId, setThreadId] = useState<string>(defaultValue);

    const upVoteComment: any = (threadId: string,commentId: string) => {
        setCommentId(commentId);
        setThreadId(threadId);
        dispatch(asyncUpVoteCommentThreadDetail(threadId,commentId,textLoginToVote));
        setCommentId('');
    }

    const removeUpVoteComment: any = (threadId: string,commentId: string) => {
        setCommentId(commentId);
        setThreadId(threadId);
        dispatch(asyncNeutralVoteCommentThreadDetail(threadId,commentId,textLoginToVote));
        setCommentId('');
    }

    return [
        upVoteComment,
        removeUpVoteComment,
    ]
}

export default useUpVoteComment;