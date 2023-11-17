import { useState } from 'react';
import Clock from '../Clock'
import { Fieldset, Span, Input, StyledButton, Loading, Fail, Date } from './styled';
import { useCurrencyData } from './useCurrencyData';
import { Result } from './Result';

export const Form = () => {

    const currencyData = useCurrencyData();

    const [currency, setCurrency] = useState("EUR");
    const [result, setResult] = useState(null);
    const [amount, setAmount] = useState("");

    const calculateCurrency = (currency, amount) => {
        const rate = currencyData.data[currency].value;

        setResult({
            sourceAmount: +amount,
            targetAmount: amount * rate,
            currency,
        });
    }


    const onSubmit = (event) => {
        event.preventDefault();
        calculateCurrency(currency, amount);
    }

    return (
        <form onSubmit={onSubmit}>
            {currencyData.status === "loading"
                ? (
                    <Loading>
                        <br />Ładuję aktualne kursy  walut...
                    </Loading>
                )
                : (
                    currencyData.status === "error" ? (
                        <Fail>
                            Hmm...  Cos poszlo nie tak, Wystąpił jakiś błąd 😞, Sprawdź czy masz polaczenia z internetem, Jeśli tak to sprobuj póżniej...
                        </Fail>
                    ) : (
                        <Fieldset>
                            <header>
                                <Clock
                                />
                            </header>
                            <p>
                                {currencyData.status === "success" && currencyData.date && (
                                    <Date>Kurs walut pobierany z currencyapi.com Aktualne na dzien {currencyData.date.toLocaleDateString()}</Date>
                                )}
                                <label>
                                    <Span> Kwota </Span>

                                    <Input
                                        value={amount}
                                        onChange={({ target }) => setAmount(target.value)}
                                        required
                                        type="number"
                                        min="0.01"
                                        step="any"
                                        placeholder="PLN" />
                                </label>
                            </p>
                            <p>
                                <label>
                                    <Span> Waluta:</Span>
                                    <Input as="select"
                                        value={currency}
                                        onChange={({ target }) => setCurrency(target.value)}
                                    >
                                        {Object.keys(currencyData.data).map((currency => (
                                            <option
                                                key={currency}
                                                value={currency}
                                            >
                                                {currency}
                                            </option>
                                        )))}

                                    </Input>
                                </label>
                            </p>

                            <p>
                                <StyledButton>Oblicz</StyledButton>
                            </p>
                            <Result result={result} />
                        </Fieldset>
                    )
                )}

        </form >

    );
};


export default Form;