'use client'

import { getCountryByName } from "@/lib/api/country";
import { Country } from "@/types";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import "./styles.css"

const countryPageByName = () => {

	const { name } = useParams();

	const router = useRouter();

	const [country, setCountry] = useState<Country | null>(null);
	const [error, setError] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {

		getCountryByName(String(name))
			.then((e) => setCountry(e[0]))
			.catch((e) => setError(e.message))
			.finally(() => setLoading(false))

	}, [name])


	return (

		<div className="country-info-container">

			{country &&
				<div className="image-info-container">
					<img src={country.flags.png} />
					<div className="info-text-container">
						<h1> {country.name.common} </h1>
						<h2> {"Capital: " + country.capital[0]} </h2>
						<h2> {"Region: " + country.region} </h2>
						<h2> {"Poblacion: " + country.population} </h2>
						<h2> {"Idiomas: "}
							{country?.languages &&
								Object.values(country.languages).map((lang, index) => (
									<span key={index}>{lang + " "}</span>))
							}
						</h2>
					</div>
				</div>
			}

			<button onClick={router.back}> Tirame patras loquete</button>

			{!country && loading && <h1>Loading...</h1>}
			{error && <h2> Error: {error} </h2>}

		</div>
	)
}


export default countryPageByName;


