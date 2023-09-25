import React, {useEffect} from 'react';
import Sidebar from "../components/sidebar/Sidebar";
import Content from "../components/content/Content";
import {useQuery} from "@tanstack/react-query";
import {fetchAuth} from "../services/user.services";
import {useNavigate} from "react-router-dom";

function Home() {
    const navigate = useNavigate()
    const {data, isSuccess, isLoading} = useQuery({
        queryFn: fetchAuth,
        queryKey: ["auth"],
    })
    useEffect(() => {
        if (isSuccess) {
            if (!data || data.status !== "active") {
                navigate("/login")
            }
        }
    }, [data]);

    if (isLoading) {
        return <p>loading ...</p>
    }
    return (
        <section className="dashboard">
            <div className="dashboard__inner">
                <Sidebar/>
                <Content/>
            </div>
        </section>
    );
}

export default Home;