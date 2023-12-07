import {Card, Row, Col, Container} from "react-bootstrap"
import bromo from "../assets/img/img1.jpg"
import kelingking from "../assets/img/img3.jpg"
import rajaAmpat from "../assets/img/img4.jpg"

const Favorites = () => {
    return (
        <div>
            <Container>
                <Row id="popular">
                    <h1 className="mt-5 mb-2 text-center">Most Popular</h1>
                    <p className="mb-5 text-center">Finding out the most visited destinations in Indonesia</p>
                    <Col md={4} className="destination-wrap">
                        <Card className="destination p-2 m-1">
                            <Card.Img variant="top" src={bromo} height={200}/>
                            <Card.Body>
                                <Card.Title>Bromo Mountain</Card.Title>
                                <Card.Text className="text-muted">East Java</Card.Text>
                                <Card.Text>
                                    Mount Bromo, standing tall at 2329 m, is Indonesia's most iconic and hiked mountain.
                                    The mountain beckons majestically despite having the entire top blown off and with a crater inside 
                                    that keeps spewing off-white sulfurous smoke. 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="destination-wrap">
                        <Card className="destination p-2 m-1">
                            <Card.Img variant="top" src={kelingking} height={200}/>
                            <Card.Body>
                                <Card.Title>Kelingking Beach</Card.Title>
                                <Card.Text className="text-muted">Bali</Card.Text>
                                <Card.Text>
                                    Kelingking Beach is one of the most famous spot of Nusa Penida. 
                                    This spot has been nicknamed the Kelingking "T-Rex" because of 
                                    how the uniquely-shaped cliff looks like a giant rock dinosaur with jaws wide open.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="destination-wrap">
                        <Card className="destination p-2 m-1">
                            <Card.Img variant="top" src={rajaAmpat} height={200}/>
                            <Card.Body>
                                <Card.Title>Raja Ampat</Card.Title>
                                <Card.Text className="text-muted">West Papua</Card.Text>
                                <Card.Text>
                                    Raja Ampat is a great alternative to better-known Indonesian islands.
                                    Over 1500 reefs and islets lie scattered among the larger islands of Batanta, Waigeo, Salawati and Misool 
                                    (the “four kings” that give the destination its name in Bahasa).
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Favorites