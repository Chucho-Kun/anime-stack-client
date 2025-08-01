import { isAxiosError } from "axios";
import api from "../lib/axios";
import { type AnimeFormData, type AnimeMainView } from "../types";

export async function addAnimeAPI(formData:AnimeFormData) {
    console.log({formData});
    try {
        const { data } = await api.post<string>( '/anime/add' , formData)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error( error.response.data.error )
        }
    }   
}

export async function getAnimesAPI() {
    try {
        const { data } = await api<AnimeMainView>('/anime')
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error( error.response.data.error )
        }
    }   
}