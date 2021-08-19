import React from 'react'
import { Container, Row, Col, Card, Button} from 'react-bootstrap';
import { useTranslation } from "react-i18next";

export default function Download() {
    const { t } = useTranslation()
    return (
        <div>
             <Container className="container-fluid">
            <Row>
                <h2 className="h2-responsive bold">{t('nav_item_features')}</h2>
            </Row>
            <Row>
                <Col sm={12} md={6} lg={4}>
                
                </Col>
                <Col sm={12} md={6} lg={4}>

                </Col>
                <Col sm={12} md={6} lg={4}>
                
                </Col>
            </Row>
        </Container>
        </div>
    )
}
