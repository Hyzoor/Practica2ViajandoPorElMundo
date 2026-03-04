

export type Country = {

	tld: string[];
	cca2: string;
	ccn3: string;
	cca3: string;
	cioc?: string;
	independent: boolean;
	status: string;
	unMember: boolean;

	idd: {
		root: string;
		suffixes: string[];
	};

	capital: string[];
	altSpellings: string[];

	region: string;
	subregion: string;
	landlocked: boolean;
	borders: string[];

	area: number;

	maps: {
		googleMaps: string;
		openStreetMaps: string;
	};

	population: number;
	fifa?: string;

	car: {
		signs: string[];
		side: "left" | "right";
	};

	timezones: string[];
	continents: string[];

	flag: string;

	name: {
		common: string;
		official: string;
		nativeName: Record<string, NativeName>;
	};

	currencies: Record<string, Currency>;

	languages: Record<string, string>;

	latlng: [number, number];

	demonyms: Record<string, {
		f: string;
		m: string;
	}>;

	translations: Record<string, Translation>;

	gini?: Record<string, number>;

	flags: {
		png: string;
		svg: string;
		alt?: string;
	};

	coatOfArms: {
		png: string;
		svg: string;
	};

	startOfWeek: string;

	capitalInfo: {
		latlng: [number, number];
	};

	postalCode?: {
		format: string;
		regex: string;
	};

};;

type NativeName = {
	official: string;
	common: string;
};

type Currency = {
	name: string;
	symbol: string;
};

type Translation = {
	official: string;
	common: string;
};
