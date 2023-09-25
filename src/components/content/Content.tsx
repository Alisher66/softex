import React, {useEffect} from 'react';
import plus_icon from "../../assets/image/plus.svg";
import {useNavigate} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {getAllTjm, TjmType} from "../../services/tjm.services";
import TjmList from "./TjmList";

function Content() {
    const navigate = useNavigate();
    const {data: allTjm, isSuccess} = useQuery<Partial<TjmType>[]>({
        queryFn: getAllTjm,
        queryKey: ["allTjm"]
    })

    const handleClick = () => {
        navigate("/create-tjm")
    }
    return (
        <div className="content">
            <h3 className="content__title">Turar-joy majmuasi qo’shish</h3>
            <div className="content__inner">
                <div className="create-box" onClick={handleClick}>
                    <img src={plus_icon} alt="plusIcon"/> <p>Yangi yaratish</p>
                </div>
                {isSuccess && <TjmList allTjm={allTjm} />}
            </div>
        </div>
    );
}

export default Content;