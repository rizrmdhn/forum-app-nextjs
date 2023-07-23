import { asyncDownVoteCommentThreadDetail, asyncNeutralVoteCommentThreadDetail, asyncUpVoteCommentThreadDetail } from "@/states/detailThread/action";
import { useState } from "react";
import { useDispatch } from "react-redux";
import useLocale from "./useLocale";

function useDownVoteComment(defaultValue= ''): [
    any,
    any,
] {
    const {textLoginToVote} = useLocale()

    const dispatch = useDispatch();

    const [commentId, setCommentId] = useState<string>(defaultValue);
    const [threadId, setThreadId] = useState<string>(defaultValue);

    const downVoteComment: any = (threadId: string,commentId: string) => {
        setCommentId(commentId);
        setThreadId(threadId);
        dispatch(asyncDownVoteCommentThreadDetail(threadId,commentId,textLoginToVote));
        setCommentId('');
    }

    const removeDownVoteComment: any = (threadId: string,commentId: string) => {
        setCommentId(commentId);
        setThreadId(threadId);
        dispatch(asyncNeutralVoteCommentThreadDetail(threadId,commentId,textLoginToVote));
        setCommentId('');
    }

    return [
        downVoteComment,
        removeDownVoteComment,
    ]
}

export default useDownVoteComment;