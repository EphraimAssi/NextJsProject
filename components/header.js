import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function Header() {
    return (
        <header>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="./">Weather</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="hourly">3 hours</Nav.Link>
                    <Nav.Link href="weekly">Weekly</Nav.Link>
                </Nav>
            </Navbar>
        </header>
    )
}