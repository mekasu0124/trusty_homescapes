import React from 'react';
import logo from '../images/company_logo.png';
import {
    MainContainer,
    Image,
    CustomerInformation,
    Label,
    LinkStyle,
    LinkStyle2,
    OtherInformation,
    BoxOne,
    BoxTwo,
    Title,
    TextArea,
    TextArea2,
    Label2
} from '../styles/cust_landing.style';


function CustomerLanding() {
    return (
        <MainContainer className="container-fluid">
            <BoxOne className="container">
                <Image src={logo} alt="customer profile image" />
                <CustomerInformation className="container">
                    <Label>Name:<br/>Shellbyy Lisenby</Label>
                    <Label>Number:<br/><LinkStyle to="tel:3345796946">(334) 579-6946</LinkStyle></Label>
                    <Label>Email:<br/><LinkStyle to="mailto:lisenbyscreation@outlook.com">lisenbyscreation@outlook.com</LinkStyle></Label>
                    <Label>Address:<br/>
                        <LinkStyle2 
                            href="https://www.google.com/maps/place/225+Wicker+Rd,+Cowarts,+AL+36321/\
                            @31.2060456,-85.3063713,17z/data=!3m1!4b1!4m5!3m4!1s0x8892951bd7ad21cb:0x172396759fd3551b!8m2!3d31.2060456!4d-85.3063713" 
                            target="_blank" 
                            rel="noreferrer"
                            >225 Wicker Rd. Cowarts, AL 36321
                        </LinkStyle2>
                    </Label>
                </CustomerInformation>
            </BoxOne>
            <Title>Other Information</Title>
            <Label2>
                To Edit The Information Below, Please Contact Support.
            </Label2>
            <OtherInformation className="container">
                <BoxTwo className="container">
                    <Label>Parking Information:</Label>
                    <TextArea />
                </BoxTwo>
                <BoxTwo>
                    <Label>Recurring Lawn Care Requests:</Label>
                    <TextArea />
                </BoxTwo>
                <BoxTwo>
                    <Label>Previous Lawn Care Visits:</Label>
                    <TextArea />
                </BoxTwo>
            </OtherInformation>
            <Label2>
                The Information Below Is Input Based Off H.H.A, or Other, Information.<br/>To Update, 
                Please Contact Support With An Updated H.H.A, or Other, Agreement.
            </Label2>
            <OtherInformation>
                <BoxTwo>
                    <Label>Enter All Requirements Separated By Commas Below:</Label>
                    <TextArea2 />
                </BoxTwo>
            </OtherInformation>
        </MainContainer>
    );
}

export default CustomerLanding;