import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { useRouter } from 'next/navigation'
import { useDispatch } from "react-redux";
import { asyncSetAuthUser } from "@/states/authUser/action";
import { closeModalActionCreator } from "@/states/openModal/action";

function useLogin(defaultValue = ''): [
    string,
    ChangeEventHandler<HTMLInputElement>,
    string,
    ChangeEventHandler<HTMLInputElement>,
    FormEventHandler<HTMLFormElement>,
] {
    const dispatch = useDispatch();
    const router = useRouter();

    const [email, setEmail] = useState<string>(defaultValue);
    const [password, setPassword] = useState<string>(defaultValue);



    const onChangeEmail: ChangeEventHandler<HTMLInputElement> = (event): void => {
        setEmail(event.target.value);
    }

    const onChangePassword:ChangeEventHandler<HTMLInputElement> = (event): void => {
        setPassword(event.target.value);
    }

    const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        dispatch(asyncSetAuthUser({email, password, router}));
        dispatch(closeModalActionCreator())
    }

    return [
        email,
        onChangeEmail,
        password,
        onChangePassword,
        onSubmit,
    ]
}

export default useLogin;