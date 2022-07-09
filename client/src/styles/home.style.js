import styled from 'styled-components';


export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: calc(1rem * 2);
`;

export const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: calc(1rem * 1);
    width: 30%;
    margin-left: auto;
    margin-right: auto;

    @media only screen and (max-width: 1000px) {
        padding: 0;
        width: 80%;
        margin-left: auto;
        margin-right: auto;
    }
`;

export const DescriptionContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: calc(1rem * 1);
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    margin-top: -40px;

    @media only screen and (max-width: 1000px) {
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
    }
`;

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const ImageStyle = styled.img`
    width: 500px;
    height: 250px;
    margin-left: 100px;
`;

export const Title = styled.h1`
    color: black;
    text-align: center;
    font-size: 40px;
`;

export const Description = styled.p`
    font-size: 20px;
    color: black;
    text-align: center;
`;