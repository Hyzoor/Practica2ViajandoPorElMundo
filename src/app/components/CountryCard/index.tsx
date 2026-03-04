import { useEffect, useState } from "react"; import { useRouter } from "next/navigation";
import { Country } from "@/types";
import { getCountryByName } from "@/lib/api/country";
import "./styles.css"

const CountryCard = (params: { name?: string }) => {

	const name = params.name;
	const router = useRouter();
	const [country, setCountry] = useState<Country | null>(null);
	const [error, setError] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {

		setLoading(true);
		if (!country && name) {
			getCountryByName(name)
				.then((e) => setCountry(e[0]))
				.catch((e) => setError(e.message))
				.finally(() => setLoading(false))
		}

	}, [name]);


	return (

		<div className="country-card" onClick={() => 
			router.push("country/" + country?.name.common)}>

			{!error && !loading &&
				
				<>
					<h1>{country?.name.common}</h1>
					{country?.flags.png && <img src={country?.flags.png} />}
				</>
			}


			{error && <h3>Error: {error}</h3>}
			{loading && country && <h2>Loading...</h2>}

		</div >
	)
}


export default CountryCard;
