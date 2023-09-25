import React, {useState} from 'react';
type RegisterFormType = {
    register: (phone:string) => void,
    isError:boolean,
    message:string,
}
function RegisterForm({register,isError, message}:RegisterFormType) {
    const [phone, setPhone] = useState("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(phone)
        register(phone);
    }
    return (
        <form className="login__form" onSubmit={handleSubmit}>
            <label className="login__label" htmlFor="phone">Telefon raqam</label>
            {message && <p className="login__message">{message}</p>}
            <input id="phone" type="text" className="login__input" value={phone}
                   onChange={handleChange}/>
            <button type="submit" className="button">Kirish</button>
        </form>
    );
}

export default RegisterForm;