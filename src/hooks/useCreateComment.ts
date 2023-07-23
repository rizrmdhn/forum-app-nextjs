import { asyncCreateCommentThreadDetail } from "@/states/detailThread/action";
import { ChangeEventHandler, MouseEventHandler, useState } from "react";
import { useDispatch } from "react-redux";

function useCreateComment(defaultValue= ''): [
    (threadId: string) => void,
    string,
    ChangeEventHandler<HTMLTextAreaElement>,
    MouseEventHandler<HTMLButtonElement>,
] {
    const dispatch = useDispatch();

    const [threadId, setThreadId] = useState<string>(defaultValue);
    const [content, setContent] = useState<string>(defaultValue);

    const setThreadIdHandler = (threadId: string) => {
        setThreadId(threadId);
    }

    const onChangeContent: ChangeEventHandler<HTMLTextAreaElement> = (event): void => {
        setContent(event.target.value);
    }

    const onSubmit: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();
        dispatch(asyncCreateCommentThreadDetail(threadId, content));
        setContent('');
    }

    return [
        setThreadIdHandler,
        content,
        onChangeContent,
        onSubmit,
    ]
}

export default useCreateComment;