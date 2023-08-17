import React, { useState } from 'react';
import { currencies } from "../currencies";
import { Result } from "./Result";
import "./style.css";

export const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    return (
        <form className="form" onSubmit={onSubmit}>
            <fieldset className="form__fieldset">
                <p>
                    <label>
                        <span className="form__lableText"> Kwota </span>
                        <input
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)}
                            className="form__money"
                            required
                            type="number"
                            min="0.01"
                            step="any"
                            placeholder="Polski zloty" />
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__lableText"> Waluta:</span>
                        <select
                            className="form__currency"
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

                        </select>
                    </label>
                </p>

                <p>
                    <button className="form__button">Oblicz</button>
                </p>

                <Result result={result} />
            </fieldset>
        </form >
    );
};

export default Form;