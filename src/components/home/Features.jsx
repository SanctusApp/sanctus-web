import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from "react-i18next";

export default function Features() {

    const { t } = useTranslation()
    
    return (
        <Container className="container-fluid" id={'features'}>
            <Row data-aos="fade-right" >
                <h2 className="h2-responsive bold">{t('nav_item_features')}</h2>
            </Row>
            <Row className="d-flex justify-content-center mt-4">
                <Col xs={12} md={{ span: 3}} className="d-flex align-items-center flex-column" data-aos="fade-right" data-aos-delay="300">
                    <div className="circle d-flex justify-content-center"><img src="https://res.cloudinary.com/dplgnsjzm/image/upload/v1628619914/sanctus/feature-1_dr4lgl.svg" alt="feature-1-icon"/></div>
                    <h3 className="mt-4">{t('features_one_title')}</h3>
                    <p className="paragraph mt-4 text-center">{t('features_one_text')}</p>
                </Col>
                <Col xs={12} md={{ offset: 1, span: 3}} className="d-flex align-items-center flex-column" data-aos="fade-right" data-aos-delay="600">
                    <div className="circle d-flex justify-content-center"><img src="https://res.cloudinary.com/dplgnsjzm/image/upload/v1628619914/sanctus/feature-2_ixqx5c.svg" alt="feature-2-icon"/></div>
                    <h3 className="mt-4">{t('features_two_title')}</h3>
                    <p className="paragraph mt-4 text-center">{t('features_two_text')}</p>
                </Col>
                <Col xs={12} md={{ offset: 1, span: 3}} className="d-flex align-items-center flex-column" data-aos="fade-right" data-aos-delay="900">
                    <div className="circle d-flex justify-content-center"><img src="https://res.cloudinary.com/dplgnsjzm/image/upload/v1628619914/sanctus/feature-3_iirtvf.svg" alt="feature-3-icon"/></div>
                    <h3 className="mt-4">{t('features_three_title')}</h3>
                    <p className="paragraph mt-4 text-center" >{t('features_three_text')}</p>
                </Col>
            </Row>
        </Container>
    )
}
