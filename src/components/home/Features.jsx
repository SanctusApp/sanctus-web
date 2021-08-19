import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from "react-i18next";

export default function Features() {

    const { t } = useTranslation()
    
    return (
        <Container data-aos="slide-left" className="container-fluid">
            <Row>
                <h2 className="h2-responsive bold">{t('nav_item_features')}</h2>
            </Row>
            <Row>
                <Col xs={12} sm={4} className="d-flex align-items-center flex-column">
                    <div className="circle d-flex justify-content-center"><img src="https://res.cloudinary.com/dplgnsjzm/image/upload/v1628619914/sanctus/feature-1_dr4lgl.svg" alt="feature-1-icon"/></div>
                    <h3>{t('features_one_title')}</h3>
                    <p className="paragraph">{t('features_one_text')}</p>
                </Col>
                <Col xs={12} sm={4} className="d-flex align-items-center flex-column">
                    <div className="circle d-flex justify-content-center"><img src="https://res.cloudinary.com/dplgnsjzm/image/upload/v1628619914/sanctus/feature-2_ixqx5c.svg" alt="feature-2-icon"/></div>
                    <h3>{t('features_two_title')}</h3>
                    <p className="paragraph">{t('features_two_text')}</p>
                </Col>
                <Col xs={12} sm={4} className="d-flex align-items-center flex-column">
                    <div className="circle d-flex justify-content-center"><img src="https://res.cloudinary.com/dplgnsjzm/image/upload/v1628619914/sanctus/feature-3_iirtvf.svg" alt="feature-3-icon"/></div>
                    <h3>{t('features_three_title')}</h3>
                    <p className="paragraph">{t('features_three_text')}</p>
                </Col>
            </Row>
        </Container>
    )
}
