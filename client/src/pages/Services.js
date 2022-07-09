import React from 'react';
import {
    MainContainer,
    BodyContainer,
    ServiceContainer,
    ServiceTitle,
    ServiceConsultationPrice,
    ServiceStartingPrice,
    ServiceGuaruntees,
    ServiceDetails,
    TitleContainer,
    Title,
    Description
} from '../styles/services.style';

function Services() {
  return (
    <MainContainer className="container-fluid">
        <TitleContainer className="container">
            <Title>The Services We Offer. . .</Title>
            <Description>
                Below are the services and the info needed along with them. Included are our
                guaruntees, starting prices, and more. For more information, or if you have 
                any questions about the content below, please reach out to our support team, 
                and they'll get with you as soon as possible. In the event that you live in
                an H.A. or other type of living establishment that has guidelines for contractors
                or having yards maintained, we will need a copy of that documentation as it 
                will allow us the chance to get ahead of the curve with getting it right the
                first time. In the event that you cannot get ahold of that information, please
                let us know at least 45 minutes before your scheduled appointment so that our
                associates have time to stop by the office and get the information themselves.
            </Description>
        </TitleContainer>
        <BodyContainer>
            <ServiceContainer className="container">
                <ServiceTitle>Service: Lawn Care</ServiceTitle>
                <ServiceConsultationPrice>Consultation: $25</ServiceConsultationPrice>
                <ServiceStartingPrice>Starting Price: $75/acre</ServiceStartingPrice>
                <ServiceGuaruntees>Guaruntees:<br/>Edged Curbs and Side-Walks<br/>Trimmed Hedges<br/>Grass Mowed to 3" in height.</ServiceGuaruntees>
                <ServiceDetails>Details:<br/>
                    Included in this package is the ability of having your hedges and flower-beds maintained.
                    In addition, we edge curbs and side-walks to match. 
                </ServiceDetails>
            </ServiceContainer>
            <ServiceContainer className="container">
                <ServiceTitle>Service: Remodeling</ServiceTitle>
                <ServiceConsultationPrice>Consultation: $50</ServiceConsultationPrice>
                <ServiceStartingPrice>Starting Price: $35/ft<sup>2</sup></ServiceStartingPrice>
                <ServiceGuaruntees>Guaruntees:<br/>Item One<br/>Item Two<br/>Item Three</ServiceGuaruntees>
                <ServiceDetails>Details:<br/>
                    Some Details About This Service.
                </ServiceDetails>
            </ServiceContainer>
        </BodyContainer>
        <BodyContainer>
            <ServiceContainer className="container">
                <ServiceTitle>Service: Trashcan Cleaning</ServiceTitle>
                <ServiceConsultationPrice>Consultation: FREE</ServiceConsultationPrice>
                <ServiceStartingPrice>Starting Price: $25/can</ServiceStartingPrice>
                <ServiceGuaruntees>Guaruntees:<br/>Item One<br/>Item Two<br/>Item Three</ServiceGuaruntees>
                <ServiceDetails>Details:<br/>
                    Some Details About This Service.
                </ServiceDetails>
            </ServiceContainer>
            <ServiceContainer className="container">
                <ServiceTitle>Service: Repairs/Maintenance</ServiceTitle>
                <ServiceConsultationPrice>Consultation: $30</ServiceConsultationPrice>
                <ServiceStartingPrice>Starting Price: $45/ft<sup>2</sup></ServiceStartingPrice>
                <ServiceGuaruntees>Guaruntees:<br/>Item One<br/>Item Two<br/>Item Three</ServiceGuaruntees>
                <ServiceDetails>Details:<br/>
                    Some Details About This Service.
                </ServiceDetails>
            </ServiceContainer>
        </BodyContainer>
    </MainContainer>
  )
}

export default Services