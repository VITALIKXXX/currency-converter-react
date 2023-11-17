import { useState, useEffect } from 'react';


const URL = "https://api.currencyapi.com/v3/latest?apikey=cur_live_RIGWdE5SPbfCkOJ5vjwGpk8stQaPMn10c0Q6lh2J&base_currency=PLN";
const localCurrencyUrl = "/currency-converter-react/currency.json";


export const useCurrencyData = () => {
    const [currencyData, setCurrencyData] = useState({
        status: "loading",
    });
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(URL);
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const { meta, data } = await response.json();
                setCurrencyData({
                    status: "success",
                    meta,
                    data,
                    date: new Date()
                });
            } catch (error) {
                console.error("Nie moge pobrac API z internetu. Sprobuj pobrac z localnego currency", error);
                try {
                    const localResponse = await fetch(localCurrencyUrl);
                    if (!localResponse.ok) {
                        throw new Error(localResponse.statusText);
                    }
                    const localData = await localResponse.json();
                    setCurrencyData({
                        status: "success",
                        meta: localData.meta,
                        data: localData.data,
                        date: new Date()
                    });
                } catch (localError) {
                    console.error("Błąd pobierania lokalnych danych.", localError);
                    setCurrencyData({
                        status: "error",
                    });
                }
            }
        };
        setTimeout(fetchData, 1000);
    }, []);

    return currencyData;
};