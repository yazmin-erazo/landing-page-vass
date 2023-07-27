import { Col, Container, Row } from 'react-bootstrap';
import './contentSection.scss';

const ContentSection = () => {
    return (
        <div className='container'>
            <Container fluid >
            <Row className="align-items-top content d-flex align-items-center">

                <Col md={3} xs={12} className='p-5 '>
                <h2 className='w-100 text-uppercase fs-4'>Empecemos a hacerlo sencillo</h2>
                </Col>

                <Col md={6} xs={12}> 
                <div className='w-100 border-start pl-3 fs-5'>
                    <p>Nos emociona impulsar tu transformación digital</p>
                </div>
                </Col>

            </Row>
            </Container>
        </div>
    )
}

export default ContentSection