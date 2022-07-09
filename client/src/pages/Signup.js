import React from 'react';
import {
    MainContainer,
    TitleContainer,
    Title,
    SubTitle,
    BodyContainer,
    FormStyle,
    Label,
    Input,
    Select,
    SelectOption,
    ButtonsContainer,
    Buttons
} from '../styles/signup.style';

function Signup() {
    return (
        <MainContainer className="container-fluid">
            <TitleContainer className="container">
                <Title>Sign Up</Title>
                <SubTitle>* Required</SubTitle>
            </TitleContainer>
            <BodyContainer className="container">
                <FormStyle className="form" id="signup-form">
                    <Label>*First and Last Name</Label>
                    <Input type="text" id="name" placeholder="John Doe" />

                    <Label>*Physical Mailing Address</Label>
                    <Input type="text" id="address" placeholder="123 Example Lane. Austin, TX 12345" />

                    <Label>*Type:</Label>
                    <Select id="phone-type" name="phoneTypeOne">
                        <SelectOption id="one" value="select_one">Select One</SelectOption>
                        <SelectOption id="two" value="mobile">Mobile</SelectOption>
                        <SelectOption id="three" value="home">Home</SelectOption>
                        <SelectOption id="four" value="business">Business</SelectOption>
                    </Select>

                    <Label>*Phone Number</Label>
                    <Input type="text" id="phone-number" placeholder="(999) 999-9999" />

                    <Label>*Email Address</Label>
                    <Input type="email" id="email-address" placeholder="email@example.com" />
                </FormStyle>
                <ButtonsContainer className="container">
                    <Buttons id="cancel" onClick="">Cancel</Buttons>
                    <Buttons id="submit" onClick="">Register</Buttons>
                </ButtonsContainer>
            </BodyContainer>
        </MainContainer>
    );
}

export default Signup;