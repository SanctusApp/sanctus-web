import React, {useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import { Facebook, Instagram } from 'react-bootstrap-icons';
import { Link } from "react-router-dom"

export default function ContactUs() {
    const { t } = useTranslation()
    return (
        <Container fluid className="d-flex align-items-center flex-column container-fluid" data-aos="slide-right" style={{backgroundColor: "#CCDCEC"}}>
            <Row>
                <h2 className="h2-responsive bold">{t('nav_item_contact')}</h2>
            </Row>
            <Row>
                <a href="mailto:contact@sanctus.cc" className="text-link">contact@sanctus.cc</a>
            </Row>
            <Row>
                <Col>
                    <Link to={{pathname: "https://www.instagram.com/sanctusapp/"}} target="_blank" className="text-link"><Instagram size={40}/></Link>
                </Col>
                <Col>
                <Link to={{pathname: "https://www.facebook.com/Sanctus-B%C3%ADblia-Liturgia-Ter%C3%A7os-e-Ora%C3%A7%C3%B5es-106478487553539"}} target="_blank" className="text-link"><Facebook size={40}/></Link>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={6}>
                    <img src="https://res.cloudinary.com/dplgnsjzm/image/upload/v1628623448/sanctus/google-play-badge-es_drbpax.png" alt="google-play-icon" height="55px"/>
                </Col>
                <Col xs={12} sm={6}>
                    <img src="https://res.cloudinary.com/dplgnsjzm/image/upload/v1628623562/sanctus/Download_on_the_App_Store_Badge_PTBR_RGB_blk_092917_froj3b.svg" alt="app-store-icon"/>
                </Col>
            </Row>
        </Container>
    )
}
