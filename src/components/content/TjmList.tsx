import React from 'react';
import {TjmType} from "../../services/tjm.services";
type TjmListType = {
    allTjm: Partial<TjmType>[]
}
function TjmList({allTjm}:TjmListType) {
    return (
        <>
            {allTjm.map((el,index) => {
                return (
                    <div key={index} className="tjm-item">
                        <h4 className="tjm-item__title">{el.name}</h4>
                        <p content="tjm-item__address">{el.address}</p>
                        <hr/>
                        <p className="tjm-item__deadline">Topshirish vaqti<span>{el.deadline}</span></p>
                        <p className="tjm-item__count">Uylar soni<span>---</span></p>
                        <p className="tjm-item__class">TJM sinfi<span>Appartament</span></p>
                        <div className="checkbox-group">
                            <label>Saytda ko’rsatish</label>
                            <input type="checkbox"/>
                        </div>
                    </div>
                )
            })}
        </>
    );
}

export default TjmList;