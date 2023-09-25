import { useState, useEffect } from "react";
import { StyledClock } from './styled';

const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
};

const Clock = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const formattedDate = currentDateTime.toLocaleDateString('pl-PL', options);

    return (
        <StyledClock>
            <p>{`Dziś jest ${formattedDate}`}</p>
        </StyledClock>
    );
};



export default Clock;