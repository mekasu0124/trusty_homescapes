import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const BodyContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;

    @media only screen and (max-width: 1000px) {
        flex-direction: column;
        width: 90%;
        margin-left: auto;
        margin-right: auto;
    }
`;

export const ServiceContainer = styled.div`
    float: left;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
    border: 2px solid black;
    border-radius: 20px;
    padding: calc(1rem*1);
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 40%;

    @media only screen and (max-width: 1000px) {
        width: 90%;
        margin-left: auto;
        margin-right: auto;
    }
`;

export const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 70%;
    margin-left: auto;
    margin-right: auto;

    @media only screen and (max-width: 1000px) {
        width: 90%;
        margin-left: auto;
        margin-right: auto;
    }
`;

export const Title = styled.h3`
    font-size: 25px;
    text-align: center;
`;

export const Description = styled.p`
    font-size: 15px;
    text-align: center;
    margin-top: -20px;
`;

export const ServiceTitle = styled.h1`
    font-size: 30px;
`;

export const ServiceConsultationPrice = styled.p`
    font-size: 20px;
    color: limegreen;
`;

export const ServiceStartingPrice = styled.p`
    font-size: 20px;
    color: limegreen;
`;

export const ServiceGuaruntees = styled.p`
    font-size: 20px;
    color: limegreen;
`;

export const ServiceDetails = styled.p`
    font-size: 20px;
    color: limegreen;
`;