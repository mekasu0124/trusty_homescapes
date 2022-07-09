import styled from 'styled-components';


export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 30%;
    margin-left: auto;
    margin-right: auto;
    padding: calc(1rem * 1);

    @media only screen and (max-width: 1000px) {
        width: 90%;
        margin-left: auto;
        margin-right: auto;
    }
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 20px;
`;

export const FormStyle = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 60%;
    margin-left: auto;
    margin-right: auto;

    @media only screen and (max-width: 1000px) {
        width: 80%;
        margin-left: auto;
        margin-right: auto;
    }
`;

export const Label = styled.label`
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin-top: 20px;

    @media only screen and (max-width: 1000px) {
        font-size: 16px;
        text-align: center;
    }
`;

export const Input = styled.input`
    font-size: 20px;
    width: 400px;
    height: 50px;
    margin-left: auto;
    margin-right: auto;
    border: 2px solid black;
    border-radius: 20px;
    text-align: center;

    @media only screen and (max-width: 1000px) {
        width: 250px;
        margin-left: auto;
        margin-right: auto;
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    width: 30%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;

    @media only screen and (max-width: 1000px) {
        width: 80%;
        margin-left: auto;
        margin-right: auto;
    }
`;

export const Button = styled.button`
    font-size: 20px;
    width: 30%;
    margin-left: auto;
    margin-right: auto;
    border: 2px solid black;
    border-radius: 20px;
    background: transparent;
    padding: calc(1rem * 1);
`;