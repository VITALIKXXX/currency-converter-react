import styled from "styled-components";

export const Fieldset = styled.fieldset`
    border-radius: 39px;
    border: 0px solid #8ca4ab;
    padding: 10px;
    background-color: white;
    height: auto;
`;

export const Span = styled.span`
    max-width: 150px;
    width: 100%;
    display: inline-block;
    margin-right: 5px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.black};
`;

export const Input = styled.input`
    background-color: #4d5c5b;
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.whiteSmoke};
`;

export const StyledButton = styled.button`
    width: 40%;
    border: none;
    background-color: #1e5f77;
    color: ${({ theme }) => theme.colors.white};
    padding: 10px;
    border-radius: 5px;

    &:hover {
        background-color: #36545e;
    }

    &:active {
        background-color: #1d302f;
    }
`;

export const Loading = styled.p`
    color: ${({ theme }) => theme.colors.white}; 
    background-color: teal;
    padding: 10px;
`;

export const Fail = styled.p`
    color: ${({ theme }) => theme.colors.red};
    background-color :whitesmoke ;
`;

export const Date = styled.p`
font-family: monospace;
text-align: center;
font-size: 16px;
background: #1e5f77;
color: white;
border-radius: 39px;
border: 0px  solid;
padding: 5px;
`;