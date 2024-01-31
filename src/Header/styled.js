import styled from "styled-components";

export const StyledHeader = styled.header`
    font-weight: bold;
    border-radius: 10px;
    box-shadow: inset  -16px 8px 55px -30px #00086E;
    text-shadow: 1px 1px 1px #000000;
    color: ${({theme}) => theme.colors.oxfordBlue};
`;