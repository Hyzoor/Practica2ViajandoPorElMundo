'use client'

import { getAllCountries, getCountryByName } from "@/lib/api/country";
import { Country } from "@/types";
import { useEffect, useState } from "react";
import CountryCard from "./components/CountryCard";

const Home = () => {

	const [name, setName] = useState<string>("");
	const [finalName, setFinalName] = useState<string>("");
	const [error, setError] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(true);
	const [countries, setCountries] = useState<Country[]>([]);


	const fetchAllCountries = async () => {

		setLoading(true);
		await getAllCountries()
			.then((e) => { setCountries(e); setError("") })
			.catch((e) => setError(e.message))
			.finally(() => setLoading(false));

	}

	const fetchCountriesByName = async () => {

		setLoading(true);
		await getCountryByName(finalName)
			.then((e) => { setCountries(e); setError("") })
			.catch((e) => setError(e.message))
			.finally(() => setLoading(false))

	}

	useEffect(() => {

		if (!finalName) {
			fetchAllCountries();
			return;
		}

		fetchCountriesByName();

	}, [finalName]);


	return (


		<div className="main-container">

			<h1 className="titulo"> He viajado por el mundo y me he dado cuenta ... </h1>

			<div className="search-container">
				<input
					value={name}
					onChange={(e) => {
						setName(e.target.value);
					}}
					onKeyDown={(e) =>{ if(e.key == "Enter") setFinalName(name)}}
				/>


			</div>

			{loading && finalName && <h2>Loading...</h2>}
			{error && <h3>Error: {error}</h3>}

			<div className="country-cards-container">

				{countries && !loading && countries.map((e) => 
					<CountryCard key={e.name.common} name={e.name.common} />)}

			</div>

		</div>


	)
}


export default Home;
