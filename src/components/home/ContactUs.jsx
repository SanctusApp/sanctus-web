import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ReactStoreBadges from 'react-store-badges'
import { useTranslation } from "react-i18next";
import { Facebook, Instagram } from 'react-bootstrap-icons';
import { Link } from "react-router-dom"
import cookies from 'js-cookie'

export default function ContactUs() {
    const currentLanguageCode = cookies.get('i18next') || 'en'
    const { t } = useTranslation()
    return (
        <Container fluid className="d-flex align-items-center flex-column cont-fluid" style={{backgroundColor: "#CCDCEC"}} id={'contact'}>
            <Row data-aos="fade-right">
                <h2 className="h2-responsive bold">{t('nav_item_contact')}</h2>
            </Row>
            <Row data-aos="fade-right" data-aos-delay="300" className="mt-4">
                <a href="mailto:contact@sanctus.cc" className="text-link">contact@sanctus.cc</a>
            </Row>
            <Row data-aos="fade-right" data-aos-delay="600" className="mt-4">
                <Col>
                    <Link to={{pathname: "https://www.instagram.com/sanctusapp/"}} target="_blank" className="text-link"><Instagram size={40}/></Link>
                </Col>
                <Col>
                <Link to={{pathname: "https://www.facebook.com/Sanctus-B%C3%ADblia-Liturgia-Ter%C3%A7os-e-Ora%C3%A7%C3%B5es-106478487553539"}} target="_blank" className="text-link"><Facebook size={40}/></Link>
                </Col>
            </Row>
            
            <Row data-aos="fade-right" data-aos-delay="900" className="mt-4 pb-4">
                <Col>
                { currentLanguageCode === 'pt' ? <ReactStoreBadges platform={'android'} url={'https://play.google.com/store/apps/details?id=com.evangelhododiacatolico'} locale={'pt-br'} target="_blank"/> : currentLanguageCode === 'es' ? <ReactStoreBadges platform={'android'} url={'https://play.google.com/store/apps/details?id=com.evangelhododiacatolico'} locale={'es-es'} target="_blank"/> : <ReactStoreBadges platform={'android'} url={'https://play.google.com/store/apps/details?id=com.evangelhododiacatolico'} locale={'en-us'} target="_blank"/> }
                </Col>
                <Col style={{opacity: "0.3"}}>
                { currentLanguageCode === 'pt' ? <ReactStoreBadges platform={'ios'} locale={'pt-br'} target="_blank"/> : currentLanguageCode === 'es' ? <ReactStoreBadges platform={'ios'} locale={'es-es'} target="_blank"/> : <ReactStoreBadges platform={'ios'} locale={'en-us'} target="_blank"/> }
                    <p className="paragraph text-center">{t('contact_store_badge')}</p>
                </Col>
            </Row>
                   
        </Container>
    )
}
