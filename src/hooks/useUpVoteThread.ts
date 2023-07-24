import { asyncNeturalVoteThread, asyncUpVoteThread } from "@/states/thread/action";
import { useState } from "react";
import { useDispatch } from "react-redux";
import useLocale from "./useLocale";

function useUpVoteThread(defaultValue= ''): [
    any,
    any,
] {
    const {textLoginToVote, textUpVoteSuccess, textRemoveVoteSuccess,textErrorUpVote, textErrorRemoveVote} = useLocale();
    const dispatch = useDispatch();

    const [threadId, setThreadId] = useState<string>(defaultValue);


    const upVoteThread: any = (threadId: string) => {
        setThreadId(threadId);
        dispatch(asyncUpVoteThread(threadId,textLoginToVote,textUpVoteSuccess,textErrorUpVote));
        setThreadId('');
    }

    const removeUpVoteThread: any = (threadId: string) => {
        setThreadId(threadId);
        dispatch(asyncNeturalVoteThread(threadId,textLoginToVote,textRemoveVoteSuccess,textErrorRemoveVote));
        setThreadId('');
    }

    return [
        upVoteThread,
        removeUpVoteThread,
    ]
}

export default useUpVoteThread;