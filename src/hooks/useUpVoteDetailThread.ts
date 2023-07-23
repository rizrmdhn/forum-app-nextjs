import { asyncNeutralVoteThreadDetail, asyncUpVoteThreadDetail } from "@/states/detailThread/action";
import { useState } from "react";
import { useDispatch } from "react-redux";

function useUpVoteDetailThread(defaultValue= ''): [
    any,
    any,
] {
    const dispatch = useDispatch();

    const [threadId, setThreadId] = useState<string>(defaultValue);


    const upVoteThread: any = (threadId: string) => {
        setThreadId(threadId);
        dispatch(asyncUpVoteThreadDetail(threadId));
        setThreadId('');
    }

    const removeUpVoteThread: any = (threadId: string) => {
        setThreadId(threadId);
        dispatch(asyncNeutralVoteThreadDetail(threadId));
        setThreadId('');
    }

    return [
        upVoteThread,
        removeUpVoteThread,
    ]
}

export default useUpVoteDetailThread;