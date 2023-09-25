export type TjmClassType = {
    "class_id": number,
    "name": string
    }
export const getAllClass = async ():Promise<TjmClassType[]> => {
    const url = "https://practikum.softex.uz/api/dashboard/class/select"
    const res = await fetch(url, {credentials:"include"});
    const data = await res.json();
    return data;
}
export const getAllTjm = async () => {
    const url = "https://practikum.softex.uz/public/api/dashboard/complex/view"
    const res = await fetch(url, {credentials:"include"});
    const data = await res.json();
    return data;
}
export type TjmType = {
    "name": string,
    "deadline": string,
    "builder_id": number,
    "class_id": number,
    "district_id": number,
    "city_id": number,
    "address": string,
    "address_map": string,
    "phone": string,
    "telegram": string,
    "instagram": string,
    "facebook": string,
    "bonuses": string,
    "specifices": string,
    "information_uz": string,
    "information_ru": string,
    "payment_method_ids": number[],
    "key_words": string[]
}
export const saveTjm = async (newTjm: TjmType) => {
    const url = "https://practikum.softex.uz/api/dashboard/complex/create"
    const options = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newTjm),
    }
    const res = await fetch(url, {...options, credentials:"include"});
    console.log(res)
    const data = await res.json()
    console.log(data)
    return data
}