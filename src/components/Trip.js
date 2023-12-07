import {Card, Row, Col, Container} from "react-bootstrap"
import padar from "../assets/img/img5.jpg"
import pinkBeach from "../assets/img/img6.jpg"
import kelor from "../assets/img/img15.jpg"

const Trip = () => {
    return (
        <div>
            <Container>
                <Row>
                    <h1 className="mt-5 mb-2 text-center">Trip</h1>
                    <p className="mb-5 text-center">Plan your trip to Labuan Bajo</p>
                    <Col md={4} className="destination-wrap">
                        <Card className="destination p-2 m-1">
                            <Card.Img variant="top" src={kelor} height={200}/>
                            <Card.Body>
                                <Card.Title>Kelor Island</Card.Title>
                                <p className="text-muted text-end"><i>9.05 mil</i></p>
                                <Card.Text>
                                    Located in the heart of Indonesia, Kelor Island is a stunning uninhabited island 
                                    that makes for an awesome adventure when visiting Labuan Bajo in Flores.
                                    There are two white-sand beaches which are perfect for relaxing, sunbathing, and swimming. 
                                    Snorkeling and diving are both beautiful ways to explore its marine biodiversity.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="destination-wrap">
                        <Card className="destination p-2 m-1">
                            <Card.Img variant="top" src={padar} height={200}/>
                            <Card.Body>
                                <Card.Title>Padar Island</Card.Title>
                                <p className="text-muted text-end"><i>27.26 mil</i></p>
                                <Card.Text>
                                    Padar Island lies within Komodo National Park and is located about 20 miles from Labuan Bajo.
                                    The islands are made up of rusty-red volcanic hills, savannahs on land, 
                                    and beautiful coral reefs in the water.
                                    Padar is the best place to hike in the area and currently on trend 
                                    due to its unique view of tri-coloured beaches from the top of the hill.
                                    
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="destination-wrap">
                        <Card className="destination p-2 m-1">
                            <Card.Img variant="top" src={pinkBeach} height={200}/>
                            <Card.Body>
                                <Card.Title>Pink Beach</Card.Title>
                                <p className="text-muted text-end"><i>5.1 mil</i></p>
                                <Card.Text>
                                The pink beach on Komodo Island has become famous for its light reddish sand color and turquoise water, 
                                and it's also pretty easy to visit on a day trip from the town of Labuan Bajo.
                                Pink Beach is a terrific choice for snorkelers and beginner divers as even the shallow waters are home to an abundance of species to keep you more than entertained.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Trip