import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from 'next/navigation'
import myToast from "@/components/myToast";
import { asyncRegisterUser } from "@/states/user/action";
import useLocale from "./useLocale";

function useRegister(defaultValue = ''): [
    string,
    ChangeEventHandler<HTMLInputElement>,
    string,
    ChangeEventHandler<HTMLInputElement>,
    string,
    ChangeEventHandler<HTMLInputElement>,
    FormEventHandler<HTMLFormElement>,
] {
    const dispatch = useDispatch();
    const router = useRouter();

    const {textRegisterSuccess, textRegisterFailed} = useLocale();

    const [name, setName] = useState<string>(defaultValue);
    const [email, setEmail] = useState<string>(defaultValue);
    const [password, setPassword] = useState<string>(defaultValue);



    const onChangeName: ChangeEventHandler<HTMLInputElement> = (event): void => {
        setName(event.target.value);
    }

    const onChangeEmail: ChangeEventHandler<HTMLInputElement> = (event): void => {
        setEmail(event.target.value);
    }

    const onChangePassword: ChangeEventHandler<HTMLInputElement> = (event): void => {
        setPassword(event.target.value);
    }

    const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        dispatch(asyncRegisterUser({name,email, password,router,textRegisterSuccess,textRegisterFailed}));
    }

    return [
        name,
        onChangeName,
        email,
        onChangeEmail,
        password,
        onChangePassword,
        onSubmit,
    ]
}

export default useRegister;