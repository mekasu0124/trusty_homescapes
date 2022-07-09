import React from 'react';
import logo from '../images/company_logo.png';
import {
  MainContainer,
  TitleContainer,
  DescriptionContainer,
  ImageContainer,
  ImageStyle,
  Title,
  Description
} from '../styles/home.style';

function Home() {
  return (
    <MainContainer className="container-fluid">
      <ImageContainer className="container">
        <ImageStyle src={logo} alt="company logo" />
      </ImageContainer>
      <TitleContainer className="container">
        <Title>Trusty Homescapes</Title>
      </TitleContainer>
      <DescriptionContainer className="container">
        <Description>
          Trusty Homescapes is a Family-Owned and Operated Lawncare, Trashcan Cleaning, and Remodeling
          Service that caters to your specific needs. Backed by over 30 years of experience, our team
          is dedicated to bringing you the best and brightest service with our customers, and their needs,
          first in mind.
        </Description>
      </DescriptionContainer>
    </MainContainer>
  );
}

export default Home;