import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const NavbarContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: calc(1rem * 2);
    background-color: transparent;
    border-bottom: 3px solid black;
    min-height: 20px;

    @media only screen and (max-width: 1000px) {
        padding: calc(1rem * 0.5);
    }
`;

export const NavbarLinkContainer = styled.div`
    display: flex;
    justify-content: left;
    flex-direction: row;
    align-items: center;

    @media only screen and (max-width: 1000px) {
        flex-direction: column;
        margin-left: auto;
        margin-right: auto;
    }
`;

export const NavbarLink = styled(Link)`
    color: black;
    font-size: 20px;
    float: left;
    text-shadow: 1px 1.5px black;
    text-decoration: none;
    margin-left: 20px;
    &:hover {
        color: silver;
        text-decoration: underline;
    }

    @media only screen and (max-width: 1000px) {
        margin-left: auto;
        margin-right: auto;
    }
`;
