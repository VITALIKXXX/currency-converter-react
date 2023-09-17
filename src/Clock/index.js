import './style.css';
import { useState, useEffect } from "react";

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
        <div className="clock">
            <p>{`Dziś jest ${formattedDate}`}</p>
        </div>
    );
};



export default Clock;