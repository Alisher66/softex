import React, {useEffect, useState} from 'react';
import {registerUser, sendVerify} from "../../services/user.services";
import {useMutation} from "@tanstack/react-query";
import login from "../../pages/Login";
import {useNavigate} from "react-router-dom";
type LoginFormType = {
    phone:string
}
function LoginForm({phone}:LoginFormType) {
    const navigate = useNavigate()

    const [code, setCode] = useState("");
    const {data, mutate, isLoading,isError,isSuccess} = useMutation({
        mutationFn: async ()=> {
           return await sendVerify(phone, +code.trim());
        },
    })
    const handleChangeCode = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCode(e.target.value)
    }

    const handleVerify = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        mutate()
    }
    useEffect(()=> {
        if(data) {
            console.log(data)
            if(!data.error) {
                navigate("/")
            }
        }
    }, [data])

    return (
        <form className="login__form" onSubmit={handleVerify}>
            <label className="login__label" htmlFor="code">Tasdiqlash kodini kiriting</label>
            {data?.error && <p className="login__message">{data.messages[0]}</p>}
            {/*<p className="login__message">{success}</p>*/}
            <input id="code" type="string" className="login__input" value={code}
                   onChange={handleChangeCode}/>
            <button type="submit" className="button">Kirish</button>
        </form>
    );
}

export default LoginForm;