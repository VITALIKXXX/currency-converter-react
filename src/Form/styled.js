import styled from "styled-components";

export const Fieldset = styled.fieldset`
    border-radius: 39px;
    border: 0px solid #8ca4ab;
    padding: 10px;
    background-color: white;
`;

export const Span = styled.span`
    max-width: 150px;
    width: 100%;
    display: inline-block;
    margin-right: 5px;
    font-weight: bold;
    color: #000000;
`;

export const Input = styled.input`
    background-color: #4d5c5b;
    border-radius: 5px;
    color: whitesmoke;
`;

export const StyledButton = styled.button`
    width: 40%;
    border: none;
    background-color: #1e5f77;
    color: white;
    padding: 10px;
    border-radius: 5px;

    &:hover {
        background-color: #36545e;
    }

    &:active {
        background-color: #1d302f;
    }
`;