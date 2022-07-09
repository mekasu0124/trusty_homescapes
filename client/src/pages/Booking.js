import React from 'react';
import {
    MainContainer,
    BodyContainer,
    TitleContainer,
    ButtonsContainer,
    FormStyle,
    Select,
    SelectOption,
    Buttons,
    Title,
    SubTitle,
    Label,
    Input,
    TextArea,
    LinkStyle,
    BoxOne,
    BoxTwo,
    Label2
} from '../styles/booking.style';


function Booking() {
    return (
        <MainContainer>
            <TitleContainer>
                <Title>Booking An Appointment</Title>
                <SubTitle>* Required</SubTitle>
                <SubTitle>
                    Please See <span> </span><LinkStyle to="/services">Our Services & Their Base Prices</LinkStyle>
                    <span> </span>Before Booking An Appointment. 
                </SubTitle>
            </TitleContainer>
            <BodyContainer>
                <FormStyle className="form" id="booking-form">
                    <BoxOne className="container">
                        <Label>*First and Last Name</Label>
                        <Input type="text" id="name" placeholder="John Doe" />

                        <Label>*Phone Number</Label>
                        <Input type="text" id="phone" placeholder="(999) 999-9999" />

                        <Label>*Email Address</Label>
                        <Input type="email" id="email-address" placeholder="example@email.com" />

                        <Label>*First Desired Service</Label>
                        <Select name="serviceList" id="service-list">
                            <SelectOption id="one" value="select_one">Select One</SelectOption>
                            <SelectOption id="two" value="lawn">Lawn Care</SelectOption>
                            <SelectOption id="three" value="repair">Repairs</SelectOption>
                            <SelectOption id="four" value="remodel">Remodeling</SelectOption>
                            <SelectOption id="five" value="trash">Trashcan Cleaning</SelectOption>
                        </Select>

                        <Label>*Desired Date</Label>
                        <Input type="date" id="date-one" placeholder="MM/DD/YYYY" />
                    </BoxOne>
                    <BoxTwo className="container">
                        <Label2>
                            In the space below, please enter as many details as you possibly can about
                            the work you're wanting done. Please keep in mind that the associate who
                            arrives to your home will need to confirm the details with you to ensure
                            a proper understanding has been obtained. This is so that we can ensure
                            that your needs are met, and you can be rest assured that your objective
                            is understood.
                        </Label2>
                        <TextArea type="text" id="details" name="customerDetails" />
                    </BoxTwo>
                </FormStyle>
            </BodyContainer>
            <ButtonsContainer className="container">
                <Buttons id="cancel" onClick="">Cancel</Buttons>
                <Buttons id="submit" onClick="">Book My Service</Buttons>
            </ButtonsContainer>
        </MainContainer>
    );
}

export default Booking;