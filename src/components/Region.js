import {Card, Row, Col, Container} from "react-bootstrap"
import handara from "../assets/img/img7.jpg"
import mekaki from "../assets/img/img9.jpg"
import ampera from "../assets/img/img10.jpg"
import misool from "../assets/img/img11.jpg"
import tanjungTinggi from "../assets/img/img13.jpg"
import bunaken from "../assets/img/img14.jpg"

const Region = () => {
    return (
        <div>
            <Container>
                <Row>
                    <h1 className="mt-5 mb-2 text-center">Explore Indonesia</h1>
                    <p className="mb-5 text-center">Select your destination</p>
                    <Col md={4} className="destination-wrap">
                        <Card className="destination m-1">
                            <Card.Img variant="top" src={handara} height={350}/>
                                <Card.ImgOverlay>
                                    <div className="explore text-white">BALI</div>
                                </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col md={4} className="destination-wrap">
                        <Card className="destination m-1">
                            <Card.Img variant="top" src={mekaki} height={350}/>
                                <Card.ImgOverlay>
                                    <div className="explore text-white">LOMBOK</div>
                                </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col md={4} className="destination-wrap">
                        <Card className="destination m-1">
                            <Card.Img variant="top" src={misool} height={350}/>
                                <Card.ImgOverlay>
                                    <div className="explore text-white">PAPUA</div>
                                </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col md={4} className="destination-wrap">
                        <Card className="destination m-1">
                            <Card.Img variant="top" src={ampera} height={350}/>
                                <Card.ImgOverlay>
                                    <div className="explore text-white">SUMATRA</div>
                                </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col md={4} className="destination-wrap">
                        <Card className="destination m-1">
                            <Card.Img variant="top" src={tanjungTinggi} height={350}/>
                                <Card.ImgOverlay>
                                    <div className="explore text-white">BANGKA</div>
                                </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col md={4} className="destination-wrap">
                        <Card className="destination m-1">
                            <Card.Img variant="top" src={bunaken} height={350}/>
                                <Card.ImgOverlay>
                                    <div className="explore text-white">SULAWESI</div>
                                </Card.ImgOverlay>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Region