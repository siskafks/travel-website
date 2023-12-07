import {Navbar, Container, Nav} from "react-bootstrap"
import logo from "../assets/img/logo.png"

const NavBar = () => {
    return (
        <div>
            <Navbar fixed="top" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} alt="logo" width={150}></img>
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#popular">DESTINATION</Nav.Link>
                        <Nav.Link>BLOG</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar