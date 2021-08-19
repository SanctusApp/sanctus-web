import React from 'react'
import { Container, Spinner } from 'react-bootstrap';

export default function Loading() {
    return (
        <Container fluid className="d-flex align-items-center justify-content-center container-fluid" style={{backgroundColor: "#EDC8C8", height: "100vh"}}>
            <Spinner animation="border" variant="dark"/>
        </Container>
    )
}
