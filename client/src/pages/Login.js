import React from 'react';
import {
    MainContainer,
    TitleContainer,
    FormStyle,
    ButtonsContainer,
    Title,
    Label,
    Input,
    Button
} from "../styles/login.style";


function Login() {
    return (
        <MainContainer className="container-fluid">
            <TitleContainer className="container">
                <Title>Login To Access Your Profile<br/>* Required</Title>
            </TitleContainer>
            <FormStyle className="form" id="login-form" name="loginForm">
                <Label>*Email Address</Label>
                <Input type="email" id="email-address" placeholder="example@email.com" />

                <Label>*Password</Label>
                <Input type="password" id="user-password" />
            </FormStyle>
            <ButtonsContainer className="container">
                <Button id="cancel">Cancel</Button>
                <Button id="submit">Submit</Button>
            </ButtonsContainer>
        </MainContainer>
    );
}

export default Login;