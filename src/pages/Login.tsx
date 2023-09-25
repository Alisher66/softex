import React, {useEffect, useMemo, useState} from 'react';
import login_img from "../assets/image/main.jpg";
import {useLogin} from "../hooks/useLogin";
import {registerUser, sendVerify} from "../services/user.services";
import LoginForm from "../components/login/LoginForm";
import RegisterForm from "../components/login/RegisterForm";
import {useQuery, useQueryClient, useMutation} from "@tanstack/react-query"

function Login() {
    const [phone, setPhone] = useState("");

    const {data, mutate, isLoading, error, isError} = useMutation({
        mutationFn: registerUser,
        mutationKey:["sendPhone"]
    })
    const register = (phone: string) => {
        setPhone(phone)
        mutate(phone);
    }

    const getMessage = () => {
        if (data) {
            if (data.messages) {
                return data.messages.join(" ");
            }
        }
    }
    const isDataError = useMemo(() => {
        if (data) {
            if (data.error) {
                return data.error
            }
            return false
        }
        return true
    }, [data])

    return (
        <section className="login">
            <div className="login__inner">
                <div className="login_bg">
                    <img src={login_img} alt="login bg"/>
                </div>
                <div className="login__content">
                    {isLoading ? <p>loading</p> : (
                        <div>
                            <p className="subtitle">Xush kelibsiz!</p>
                            <h3>Kirish</h3>
                            {isDataError ? (<RegisterForm
                                register={register}
                                isError={isDataError || false}
                                message={getMessage() || ""}
                            />) : <LoginForm phone={phone} />}

                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Login;