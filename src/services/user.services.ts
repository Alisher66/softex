type registerResponseType = {
    messages: string[],
    error?: boolean
}

export const registerUser = async (tel: string): Promise<registerResponseType> => {
    const url = "https://practikum.softex.uz/api/client/register"
    const options = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({"phone": tel})
    }
    const res = await fetch(url, options);
    const data = await res.json();
    if (res.status !== 200) {
        data.error = true;
    }
    return data
}

export const sendVerify = async (tel: string, code: number) => {
    const url = "https://practikum.softex.uz/api/client/login"
    const options = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({phone: tel, sms_code: code})
    }
    const res = await fetch(url, options);
    const data = await res.json()
    if (res.status !== 200) {
        data.error = true
    }
    return data
}

export const fetchAuth = async () => {
    const url = "https://practikum.softex.uz/api/dashboard/auth"
    const res = await fetch(url, {credentials:"include"});
    const data = await res.json();
    return data;
}