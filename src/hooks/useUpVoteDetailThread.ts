import { asyncNeutralVoteThreadDetail, asyncUpVoteThreadDetail } from "@/states/detailThread/action";
import { useState } from "react";
import { useDispatch } from "react-redux";
import useLocale from "./useLocale";

function useUpVoteDetailThread(defaultValue= ''): [
    any,
    any,
] {
    const { textLoginToVote, textUpVoteSuccess,textRemoveVoteSuccess,textErrorRemoveVote, textErrorUpVote } = useLocale()

    const dispatch = useDispatch();

    const [threadId, setThreadId] = useState<string>(defaultValue);


    const upVoteThread: any = (threadId: string) => {
        setThreadId(threadId);
        dispatch(asyncUpVoteThreadDetail(threadId,textLoginToVote,textUpVoteSuccess,textErrorUpVote));
        setThreadId('');
    }

    const removeUpVoteThread: any = (threadId: string) => {
        setThreadId(threadId);
        dispatch(asyncNeutralVoteThreadDetail(threadId,textLoginToVote,textRemoveVoteSuccess,textErrorRemoveVote));
        setThreadId('');
    }

    return [
        upVoteThread,
        removeUpVoteThread,
    ]
}

export default useUpVoteDetailThread;