const rapidApiConfig = {
    headers: {
        "x-rapidapi-host": "currency-conversion-and-exchange-rates.p.rapidapi.com",
        "x-rapidapi-key": import.meta.env.VITE_CURRENCY_API_KEY
    }
};

export type CountryCurrency = {
    code: string;
    name: string;
}

export type DataPoint = {
    x: Date;
    y: number;
}

export { rapidApiConfig }