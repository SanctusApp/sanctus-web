import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from "react-i18next";


export default function AboutUs() {

    const { t } = useTranslation()
    
    return (
        <Container className="container-fluid no-margin-left" id={'about'}>
            <Row>
                <Col xs={12} md={6} data-aos="fade-right">
                <img src="https://res.cloudinary.com/dplgnsjzm/image/upload/v1628780787/sanctus/about-img_jjxn4e.svg" alt="hands-icon" width="70%" />
                </Col>
                <Col xs={12} md={6} data-aos="fade-right" data-aos-delay="300" className="d-flex align-items-center mt-4"> 
                <Row style={{paddingLeft: "12px"}}>
                <h2 className="h2-responsive bold" >{t('nav_item_about')}</h2>
                <p className="paragraph mt-4">{t('about_text')}</p>
                </Row>

                </Col>
            </Row>
        </Container>
    )
}
