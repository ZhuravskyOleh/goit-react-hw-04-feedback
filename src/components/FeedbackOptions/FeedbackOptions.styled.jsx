import styled from "styled-components";

export const Button = styled.button`
    border: none;
    padding: 10px 25px;
    border-radius: 10px;
    margin-right: 10px;
    background-color: transparent;
    border: 1px solid rgb(206, 211, 219);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px 0px;

    font-weight: 500;
    font-size: 18px;
    color: #030303;
    cursor: pointer;
    transition: all 250ms linear;
    &:hover {
        background-color: #adbecc;
        color: #ffffff;
    }

`

export const BtnList = styled.ul`
    display: flex;
    justify-content: center;
    gap:10px;
`