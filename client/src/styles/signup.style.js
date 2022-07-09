import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 40%;
    margin-left: auto;
    margin-right: auto;

    @media only screen and (max-width: 1000px) {
        width: 60%;
    }
`;

export const Title = styled.h1`
    font-size: 30px;

    @media only screen and (max-width: 1000px) {
        font-size: 20px;
    }
`;

export const SubTitle = styled.h3`
    font-size: 15px;
    margin-top: -10px;

    @media only screen and (max-width: 1000px) {
        text-align: center;
    }
`;

export const LinkStyle = styled(Link)`
    font-size: 15px;
    color: black;
`;

export const BodyContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    align-items: center;
    min-width: 40%;
`;

export const FormStyle = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-width: 400px;
    min-height: 500px;

    @media only screen and (max-width: 1000px) {
        flex-direction: column;
        width: 100%;
    }
`;

export const Label = styled.label`
    font-size: 20px;
    text-align: center;
    margin-top: 20px;

    @media only screen and (max-width: 1000px) {
        text-align: left;
    }
`;

export const Input = styled.input`
    width: 400px;
    height: 50px;
    color: black;
    text-align: center;
    font-size: 20px;
    border-radius: 20px;
    border: 2px solid black;

    @media only screen and (max-width: 1000px) {
        width: 300px;
        margin-left: auto;
        margin-right: auto;
    }
`;

export const Select = styled.select`
    width: 400px;
    height: 50px;
    border-radius: 20px;
    border: 2px solid black;
    font-size: 20px;

    @media only screen and (max-width: 1000px) {
        width: 300px;
        margin-left: auto;
        margin-right: auto;
    }
`;

export const SelectOption = styled.option`
    font-size: 20px;
    text-align: center;
    color: black;
`;

export const Buttons = styled.button`
    background: transparent;
    font-size: 20px;
    border-radius: 20px;
    border: 2px solid black;
    padding: calc(1rem*1);
    min-width: 40%;
    margin-top: 20px;
`;
