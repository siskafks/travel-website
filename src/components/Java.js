import {Card, Row, Col, Container} from "react-bootstrap"
import borobudur from "../assets/img/img2.jpg"
import prambanan from "../assets/img/img8.jpg"
import kawahIjen from "../assets/img/img12.jpg"

const Java = () => {
    return (
        <div>
            <Container>
                <Row>
                    <h1 className="mt-5 mb-4 text-center">Explore Java</h1>
                    <Col md={4} className="destination-wrap">
                        <Card className="destination p-2 m-1">
                            <Card.Img variant="top" src={borobudur} height={200}/>
                            <Card.Body>
                                <Card.Title>Borobudur Temple</Card.Title>
                                <Card.Text className="text-muted">Central Java</Card.Text>
                                <Card.Text>
                                This famous Buddhist temple, dating from the 8th and 9th centuries, is located in central Java. 
                                It was built in three tiers: a pyramidal base with five concentric square terraces, the trunk of a cone with three circular platforms and, at the top, a monumental stupa. 
                                The walls and balustrades are decorated with fine low reliefs, covering a total surface area of 2,500 m2. 
                                Around the circular platforms are 72 openwork stupas, each containing a statue of the Buddha. 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="destination-wrap">
                        <Card className="destination p-2 m-1">
                            <Card.Img variant="top" src={kawahIjen} height={200}/>
                            <Card.Body>
                                <Card.Title>Ijen Crater</Card.Title>
                                <Card.Text className="text-muted">East Java</Card.Text>
                                <Card.Text>
                                Ijen plateau, also known as "Kawah Ijen" is highly recommended for nature hikers. 
                                The Plateau was at one time a huge active crater, 134 sq km in area. 
                                Ijen is a quiet but active volcano, and the landscape is dominated by the volcanic cones of Ijen 
                                and Merapi on the northeastern edge of the Plateau, and Raung on the southwestern corner. 
                                The principal attraction at Ijen is the large Crater Lake that has much sulfur, 
                                which lies hidden between sheer walls. 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="destination-wrap">
                        <Card className="destination p-2 m-1">
                            <Card.Img variant="top" src={prambanan} height={200}/>
                            <Card.Body>
                                <Card.Title>Prambanan Temple</Card.Title>
                                <Card.Text className="text-muted">Special Region of Yogyakarta</Card.Text>
                                <Card.Text>
                                    Built in the 9th century, Prambanan is the largest Hindu temple in Indonesia.
                                    Rising above the centre of the last of these concentric squares are three temples decorated with reliefs illustrating the epic of the Ramayana, 
                                    dedicated to the three great Hindu divinities (Shiva, Vishnu and Brahma) and three temples dedicated to the animals who serve them.
                                    Prambanan Temple represents a cultural treasure, and also a standing proof of past religious peaceful cohabitation.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Java