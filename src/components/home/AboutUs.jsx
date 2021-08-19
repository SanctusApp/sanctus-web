import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from "react-i18next";


export default function AboutUs() {

    const { t } = useTranslation()
    
    return (
        <Container data-aos="slide-right" className="container-fluid no-margin-left animation">
            <Row>
                <Col xs={12} md={6} >
                <img src="https://res.cloudinary.com/dplgnsjzm/image/upload/v1628780787/sanctus/about-img_jjxn4e.svg" alt="hands-icon" width="80%" />
                </Col>
                <Col xs={12} md={6} className="margin-left">
                <h2 className="h2-responsive bold">{t('nav_item_about')}</h2>
                <p className="paragraph">{t('about_text')}</p>
                </Col>
            </Row>
        </Container>
    )
}
