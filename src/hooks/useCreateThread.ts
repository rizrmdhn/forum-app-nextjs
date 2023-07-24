import { closeModalActionCreator } from "@/states/openModal/action";
import { asyncCreateThread } from "@/states/thread/action";
import { ChangeEventHandler, MouseEventHandler, useState } from "react";
import { useDispatch } from "react-redux";
import useLocale from "./useLocale";

function useCreateThread(defaultValue= ''): [
    string,
    ChangeEventHandler<HTMLInputElement>,
    string,
    ChangeEventHandler<HTMLTextAreaElement>,
    string,
    ChangeEventHandler<HTMLInputElement>,
    MouseEventHandler<HTMLButtonElement>,
] {
    const dispatch = useDispatch();

    const {textThreadCreated, textErrorCreateThread} = useLocale();

    const [title, setTitle] = useState<string>(defaultValue);
    const [body, setBody] = useState<string>(defaultValue);
    const [category, setCategory] = useState<string>(defaultValue);

    const onChangeTitle: ChangeEventHandler<HTMLInputElement> = (event): void => {
        setTitle(event.target.value);
    }

    const onChangeBody: ChangeEventHandler<HTMLTextAreaElement> = (event): void => {
        setBody(event.target.value);
    }

    const onChangeCategory: ChangeEventHandler<HTMLInputElement> = (event): void => {
        setCategory(event.target.value);
    }

    const onSubmit: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();
        dispatch(asyncCreateThread({title, body, category,textThreadCreated,textErrorCreateThread}));
        setTitle('');
        setBody('');
        setCategory('');
        dispatch(closeModalActionCreator());
    }

    return [
        title,
        onChangeTitle,
        body,
        onChangeBody,
        category,
        onChangeCategory,
        onSubmit,
    ]
}

export default useCreateThread;