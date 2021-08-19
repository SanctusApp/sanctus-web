import React from 'react'
import { Container, Row, Button } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import { ArrowRight } from 'react-bootstrap-icons';

export default function Main() {
    const { t } = useTranslation()
    return (
        <Container fluid className="d-flex align-items-center flex-column container-fluid" style={{backgroundColor: "#EDC8C8"}}>
            <Row data-aos="fade-right">
                <h1 className="h1-responsive bold">Sanctus</h1>
            </Row>
            <Row data-aos="fade-right" data-aos-delay="300">
                <Button size="lg" className="btn-lg">
                    {t('main_btn')} {'  '} <ArrowRight size={25}/>
                </Button>
            </Row>
            <Row data-aos="fade-right" data-aos-delay="600">
                <img src="https://res.cloudinary.com/dplgnsjzm/image/upload/v1628780787/sanctus/main-img_passxh.svg" alt="" width="90%"/>
            </Row>
        </Container>
    )
}
