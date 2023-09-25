import React, {useEffect, useState} from 'react';
import Map from "../map/Map";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";

import {getAllClass, getAllTjm, saveTjm, TjmClassType, TjmType} from "../../services/tjm.services";
import {useNavigate} from "react-router-dom";


function CreateTmJContent() {
    const [name, setName] = useState("")
    const [deadline, setDeadline] = useState("")
    const [builder, setBuilder] = useState<number>(0)
    const [district, setDistrict] = useState("")
    const [address, setAddress] = useState("");
    const [location, setLocation] = useState("")
    const [classVal, setClassVal] = useState<number>(0);
    const navigate = useNavigate()
    const client = useQueryClient()
    const {data:tjmClass, isSuccess, isError} = useQuery<TjmClassType[]>({
        queryFn:getAllClass,
        queryKey:["tjm-class"]
    })

    const {data:resultTjm, mutate:createTjm, isError:sendError} = useMutation({
        mutationFn:saveTjm,
        mutationKey:["sendTjm"],
        onSuccess: ()=> {
            client.invalidateQueries({queryKey:["allTjm"]})
        }
    })
    const changeName = (e: React.ChangeEvent<HTMLInputElement>)=> {
        setName(e.target.value)
    }
    const changeDeadline = (e: React.ChangeEvent<HTMLInputElement>)=> {
        setDeadline(e.target.value)
    }
    const selectBuilder = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setBuilder(+e.target.value)
    }
    const changeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddress(e.target.value)
    }
    const changeDistrict = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDistrict(e.target.value)
    }
    const changeLocation = (lat:number, lng:number) => {
        setLocation(`${lat},${lng}`)
    }
    const changeTjmClass = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setClassVal(+e.target.value)
    }
    const submitHandle = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        const newTjm:TjmType = {
            name,
            deadline:deadline.split("-").reverse().join("."),
            builder_id: builder,
            class_id: classVal,
            district_id: +district || 0,
            city_id: 1,
            address,
            address_map: location,
            phone: "9999999",
            telegram: "some telegram",
            instagram: "some instagram",
            facebook: "some instagram",
            bonuses: "some bonuses",
            specifices: "specifices bonuses",
            information_uz: "information_uz bonuses",
            information_ru: "some information_ru",
            payment_method_ids: [1],
            key_words: ["asd"]
        }
        createTjm(newTjm)
    }
    useEffect(()=> {
        if(resultTjm?.complex_id) {
            navigate("/")
        }
    }, [resultTjm])
    return (
        <div className="content">
            <div className="content__inner">
                <form className="tjm-form" onSubmit={submitHandle}>
                    <p className="tjm-form__title">Asosiy ma’lumotlar</p>
                    <div className="input-group" style={{gridColumn: "1/4"}}>
                        <label htmlFor="name">Turar-joy majmuasining nomi</label>
                        <input required type="text" id="name" value={name} onChange={changeName} />
                    </div>
                    <div className="input-group" style={{gridColumn: "4/6"}}>
                        <label htmlFor="deadline">Topshirish muddati</label>
                        <input required type="date" id="deadline" value={deadline} onChange={changeDeadline}/>
                    </div>

                    <div className="select-group" style={{gridColumn: "1/3"}}>
                        <label htmlFor="builder">Quruvchini biriktirish</label>
                        <select required id="builder" onChange={selectBuilder}>
                            <option value={1}>Quruvchi 1</option>
                            <option value={2}>Quruvchi 2</option>
                        </select>
                    </div>
                    <div className="select-group" style={{gridColumn: "3/5"}}>
                        <label htmlFor="class_id">Turar-joy majmuasining sinfi</label>
                        <select required id="class_id" onChange={changeTjmClass}>
                            {isSuccess && tjmClass.map(c => <option key={c.class_id} value={c.class_id}>{c.name}</option>)}
                        </select>
                    </div>
                    <div className="input-group">
                        <label htmlFor="district">Qavatlar soni</label>
                        <input required type="text" id="district" value={district} onChange={changeDistrict}/>
                    </div>
                    <div className="input-group" style={{gridColumn: "1/6"}}>
                        <label htmlFor="address">Turar-joy majmuasining manzili</label>
                        <input required type="text" id="address" value={address} onChange={changeAddress}/>
                    </div>
                    <Map changeLocation={changeLocation} />
                    <div>
                        <button className="save-btn tjm-form_save-btn" type="submit">Saqlash</button>
                    </div>
                    {sendError && <h4>Error</h4>}
                </form>
            </div>
        </div>
    );
}

export default CreateTmJContent;