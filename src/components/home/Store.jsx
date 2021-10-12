import React from 'react'
import CountUp from 'react-countup'
import { Container, Row, Col, Card} from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import { FileEarmarkArrowDownFill, PeopleFill, StarFill } from 'react-bootstrap-icons'


export default function Store() {
    const { t } = useTranslation()
    return (
        <div>
             <Container className="cont-fluid">
            <Row>
                <h2 className="h2-responsive bold text-center" data-aos="fade-right">{t('nav_item_store')}</h2>
            </Row>
            <Row className="mt-5">
                <Col lg={4} className="d-flex justify-content-lg-end justify-content-center mb-4">
                    <Card className="d-flex align-items-center justify-content-center rectangle" data-aos="fade-right" data-aos-delay="300">
                        <Row><Card.Body><StarFill size={16}/><StarFill size={16}/><StarFill size={16}/><StarFill size={16}/><StarFill size={16}/></Card.Body></Row>
                        <Row><Card.Body className="bold py-0" style={{fontSize: "24px"}}><CountUp end={4.8} decimals={1} decimal="." duration={4}/></Card.Body></Row>
                        <Row><Card.Body className="pt-0" style={{fontSize: "16px"}}>{t('reviews_one_subtitle')}</Card.Body></Row>
                    </Card>
                </Col>
                <Col lg={4} className="d-flex justify-content-center mb-4">
                    <Card className="d-flex align-items-center justify-content-center rectangle" data-aos="fade-right" data-aos-delay="600">
                        <Row><Card.Body><PeopleFill size={30}/></Card.Body></Row> 
                        <Row><Card.Body className="bold py-0" style={{fontSize: "24px"}}><CountUp end={1.150} decimals={3} decimal="." duration={4}/></Card.Body></Row>
                        <Row><Card.Body className="pt-0" style={{fontSize: "16px"}}>{t('reviews_two_subtitle')}</Card.Body></Row>
                    </Card>
                </Col>
                <Col lg={4} className="d-flex justify-content-lg-start justify-content-center">
                    <Card className="d-flex align-items-center justify-content-center rectangle" data-aos="fade-right" data-aos-delay="900">
                        <Row><Card.Body><FileEarmarkArrowDownFill size={30}/></Card.Body></Row>
                        <Row><Card.Body className="bold py-0" style={{fontSize: "24px"}}><CountUp end={37.500} decimals={3} decimal="." duration={4}/></Card.Body></Row>
                        <Row><Card.Body className="pt-0" style={{fontSize: "16px"}}>{t('reviews_three_subtitle')}</Card.Body></Row>
                    </Card>
                </Col>
            </Row>
        </Container>
        </div>
    )
}
