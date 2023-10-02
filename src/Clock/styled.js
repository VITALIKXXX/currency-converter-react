import styled from "styled-components";

export const StyledClock = styled.div`
    position: fixed;
    top: 118px;
    right: 300px;
    font-size: 16px;
    text-align: right;
    color: ${({ theme }) => theme.colors.nightRider};
    padding: 26px;
    font-family: monospace;
`;