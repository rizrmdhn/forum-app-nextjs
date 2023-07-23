import { asyncDownVoteThreadDetail, asyncNeutralVoteThreadDetail } from "@/states/detailThread/action";
import { useState } from "react";
import { useDispatch } from "react-redux";
import useLocale from "./useLocale";

function useDownVoteDetailThread(defaultValue= ''): [
    any,
    any,
] {
    const {textLoginToVote } = useLocale()
    const dispatch = useDispatch();

    const [threadId, setThreadId] = useState<string>(defaultValue);


    const downVoteThread: any = (threadId: string) => {
        setThreadId(threadId);
        dispatch(asyncDownVoteThreadDetail(threadId,textLoginToVote));
        setThreadId('');
    }

    const removeDownVoteThread: any = (threadId: string) => {
        setThreadId(threadId);
        dispatch(asyncNeutralVoteThreadDetail(threadId,textLoginToVote));
        setThreadId('');
    }

    return [
        downVoteThread,
        removeDownVoteThread,
    ]
}

export default useDownVoteDetailThread;