import { Country } from "@/types";
import { api } from "./axios"


export const getAllCountries = async () => {
	
	const response = await api.get<Country[][]>("all?fields=name,flag");
	return response.data.flat();
		
}

export const getCountryByName = async (name: string) => {

	const response = await api.get(`/name/${name}`);
	return response.data;
}
