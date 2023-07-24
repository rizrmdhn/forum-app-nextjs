import { asyncDownVoteThreadDetail, asyncNeutralVoteThreadDetail } from "@/states/detailThread/action";
import { useState } from "react";
import { useDispatch } from "react-redux";
import useLocale from "./useLocale";

function useDownVoteDetailThread(defaultValue= ''): [
    any,
    any,
] {
    const { textLoginToVote, textDownVoteSuccess,textRemoveVoteSuccess, textErrorRemoveVote,textErrorDownVote } = useLocale()

    const dispatch = useDispatch();

    const [threadId, setThreadId] = useState<string>(defaultValue);


    const downVoteThread: any = (threadId: string) => {
        setThreadId(threadId);
        dispatch(asyncDownVoteThreadDetail(threadId,textLoginToVote,textDownVoteSuccess,textErrorDownVote));
        setThreadId('');
    }

    const removeDownVoteThread: any = (threadId: string) => {
        setThreadId(threadId);
        dispatch(asyncNeutralVoteThreadDetail(threadId,textLoginToVote,textRemoveVoteSuccess,textErrorRemoveVote));
        setThreadId('');
    }

    return [
        downVoteThread,
        removeDownVoteThread,
    ]
}

export default useDownVoteDetailThread;