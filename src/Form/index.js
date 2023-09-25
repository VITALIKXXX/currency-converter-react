import { useState } from 'react';
import { currencies } from "../currencies";
import { Result } from "./Result";
import Clock from '../Clock'
import { Fieldset, Span, Input, StyledButton } from './styled';

export const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    return (
        <form onSubmit={onSubmit}>
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
                            {currencies.map((currency => (<option
                                key={currency.short}
                                value={currency.short}
                            >
                                {currency.name}
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
        </form >
    );
};

export default Form;