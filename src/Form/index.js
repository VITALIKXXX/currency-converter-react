import { useState } from 'react';
import Clock from '../Clock'
import { Fieldset, Span, Input, StyledButton, Loading, Fail } from './styled';
import { useCurrencyData } from './useCurrencyData';
import { Result } from './Result';

export const Form = () => {

    const [currency, setCurrency] = useState();
    const [result, setResult] = useState(null);
    const [amount, setAmount] = useState("");
    const currencyData = useCurrencyData();

    const calculateCurrency = (currency, amount) => {
        const value = currencyData.data[currency];

       setResult({
            sourceAmount: +amount,
            targetAmount: amount * value,
            formCurrency: currency,
        });
    }

    const onSubmit = (event) => {
        event.preventDefault();
        calculateCurrency(currency, amount);
    }

    return (
        <form onSubmit={onSubmit}>
            {currencyData.state === "Loading"
                ? (
                    <Loading>
                        <br />Laduje kurs walut<br />
                    </Loading>
                )
                : (
                    currencyData.state === "error" ? (
                        <Fail>
                            Cos poszlo nie tak, czy masz polaczenia z internetem
                        </Fail>
                    ) : (
                        <Fieldset>
                            <p>
                                <label>
                                    <Span> Kwota </Span>
                                    <Input
                                        value={amount}
                                        onChange={({ target }) => setAmount(target.value)}
                                        required
                                        type="number"
                                        min="0.01"
                                        step="any"
                                        placeholder="Polski zloty" />
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
                            <Clock
                            />
                        </Fieldset>
                    )
                )};

        </form >
    ); 
};





export default Form;