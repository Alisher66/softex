import {useState} from "react";
import {registerUser} from "../services/user.services";

export const useLogin = () => {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");

    const sendNumber = async (phone:string) => {
        try {
            setLoading(true)
            const res = await registerUser(phone);

        } catch (e) {
            setError("error")
        } finally {
            setLoading(false)
        }
    }
    return {error, loading, success, sendNumber}
}