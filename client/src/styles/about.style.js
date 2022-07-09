import styled from "styled-components";


export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: calc(1rem * 1);
`;

export const ContainerOne = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
`;

export const ContainerTwo = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
`;

export const ContainerThree = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
`;

export const ContainerFour = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
`;

export const InnerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 70%;
    margin-left: auto;
    margin-right: auto;

    @media only screen and (max-width: 1000px) {
        width: 90%;
        margin-left: auto;
        margin-right: auto;
        flex-direction: column;
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 40%;
    padding: calc(1rem * 1);
    border: 2px solid black;
    border-radius: 0 20px 20px 0;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;

    @media only screen and (max-width: 1000px) {
        width: 90%;
        margin-right: auto;
        margin-left: auto;
    }
`;

export const Title = styled.h3`
    font-size: 25px;
    text-decoration: underline;
    text-align: center;
`;

export const SubTitle = styled.h4`
    font-size: 20px;
    text-align: center;
`;

export const Details = styled.p`
    font-size: 15px;
    text-align: center;
    margin-top: -20px;
`;