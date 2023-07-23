import { asyncDownVoteThread, asyncNeturalVoteThread, asyncUpVoteThread } from "@/states/thread/action";
import { useState } from "react";
import { useDispatch } from "react-redux";

function useDownVoteThread(defaultValue= ''): [
    any,
    any,
] {
    const dispatch = useDispatch();

    const [threadId, setThreadId] = useState<string>(defaultValue);


    const downVoteThread: any = (threadId: string) => {
        setThreadId(threadId);
        dispatch(asyncDownVoteThread(threadId));
        setThreadId('');
    }

    const removeDownVoteThread: any = (threadId: string) => {
        setThreadId(threadId);
        dispatch(asyncNeturalVoteThread(threadId));
        setThreadId('');
    }

    return [
        downVoteThread,
        removeDownVoteThread,
    ]
}

export default useDownVoteThread;