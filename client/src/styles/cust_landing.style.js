import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const MainContainer = styled.div`
    display: flex;
    justify-content: left;
    flex-direction: column;
`;

export const BoxOne = styled.div`
    display: flex;
    justify-content: left;
    flex-direction: row;
    margin-bottom: 20px;

    @media only screen and (max-width:1000px) {
        flex-direction: column;
    }
`;

export const CustomerInformation = styled.div`
    display: flex;
    justify-content: left;
    flex-direction: column;
    width: 30%;
    margin-top: 10px;
    margin-right: auto;
    border: 2px solid black;
    padding: calc(1rem * 1);

    @media only screen and (max-width: 1000px) {
        width: 90%;
        margin-left: auto;
        margin-right: auto;
        padding: 0;
    }
`;

export const OtherInformation = styled.div`
    display: flex;
    justify-content: left;
    flex-direction: row;
    width: 80%;
    margin-right: auto;
    padding: calc(1rem * 0.5);

    @media only screen and (max-width: 1000px) {
        flex-direction: column;
        margin=left: 10px;
        padding: calc(1rem * 1);
    }
`;

export const BoxTwo = styled.div`
    display: flex;
    justify-content: left;
    flex-direction: column;
`;

export const Image = styled.img`
    width: 25%;
    height: 300px;
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 20px;
    border: 2px solid black;

    @media only screen and (max-width: 1000px) {
        width: 90%;
        margin-left: auto;
        margin-right: auto;
    }
`;

export const Title = styled.h1`
    font-size: 30px;
    margin-left: 10px;
    margin-right: auto;

    @media only screen and (max-width: 1000px) {
        text-align: center;
        width: 80%;
        margin-left: auto;
        margin-right: auto;
    }
`;

export const Label2 = styled.label`
    font-size: 20px;
    margin-bottom: 10px;
    width: 60%;
    margin-top: 20px;
    margin-left: 10px;
    margin-right: auto;

    @media only screen and (max-width: 1000px) {
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
    }
`;

export const LinkStyle = styled(Link)`
    font-size: 20px;
`;

export const LinkStyle2 = styled.a`
    font-size: 20px;
`;

export const Label = styled.label`
    font-size: 20px;
    margin-bottom: 10px;
    margin-right: 10px;

    @media only screen and (max-width: 1000px) {
        width: 80%;
        text-align: center;
        margin-left: 50px;
        margin-right: auto;
    }
`;

export const TextArea = styled.textarea`
    width: 390px;
    height: 200px;
    margin-right: 10px;

    @media only screen and (max-width:1000px) {
        width: 320px;
        margin-right: auto;
        margin-left: 10px;
    }
`;

export const TextArea2 = styled.textarea`
    width: 1200px;
    height: 400px;

    @media only screen and (max-width:1000px) {
        width: 320px;
        margin-right: auto;
        margin-left: 10px;
    }
`;