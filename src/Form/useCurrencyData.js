import { useState, useEffect } from 'react';

const URL = "https://api.currencyapi.com/v3/latest?apikey=cur_live_RIGWdE5SPbfCkOJ5vjwGpk8stQaPMn10c0Q6lh2J&base_currency=PLN";


export const useCurrencyData = () => {  
    const [currencyData, setCurrencyData] = useState({
        state: "Loading",
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
                    state: "succes",
                    meta,
                    data,
                });
            } catch {
                setCurrencyData({
                    state: "error",
                });

            }
        };

        setTimeout(fetchData, 3000);
    }, []);

    return currencyData;
};