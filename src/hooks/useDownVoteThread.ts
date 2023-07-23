import { asyncDownVoteThread, asyncNeturalVoteThread, asyncUpVoteThread } from "@/states/thread/action";
import { useState } from "react";
import { useDispatch } from "react-redux";
import useLocale from "./useLocale";

function useDownVoteThread(defaultValue= ''): [
    any,
    any,
] {
    const {textLoginToVote} = useLocale();
    const dispatch = useDispatch();

    const [threadId, setThreadId] = useState<string>(defaultValue);


    const downVoteThread: any = (threadId: string) => {
        setThreadId(threadId);
        dispatch(asyncDownVoteThread(threadId,textLoginToVote));
        setThreadId('');
    }

    const removeDownVoteThread: any = (threadId: string) => {
        setThreadId(threadId);
        dispatch(asyncNeturalVoteThread(threadId,textLoginToVote));
        setThreadId('');
    }

    return [
        downVoteThread,
        removeDownVoteThread,
    ]
}

export default useDownVoteThread;