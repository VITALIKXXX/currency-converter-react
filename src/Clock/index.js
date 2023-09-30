import { useCurrentDate } from "./useCurrentDate";
import { StyledClock } from './styled';

const formatDate = ({ date }) => date.toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
});


const Clock = () => {
    const date = useCurrentDate();



    return (
        <StyledClock>
            Dziś jest {formatDate(date)}
        </StyledClock>
    );
};



export default Clock;