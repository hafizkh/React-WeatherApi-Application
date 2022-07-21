import React, {useState} from 'react'
import '../App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';


const NavBar = () => {
  const [isLoggedIn, setisLoggedIn] = useState(null);

    const navigate = useNavigate()

    const logIn = () => {
        setisLoggedIn(true);
        alert("Loggind Successfully")
        navigate("/weather");
        
        }
    const logOut = () => {
         setisLoggedIn(false);
        alert("Log out Successfully")
         navigate('/home')
         };
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Brand as={Link} to={"/home"}>Wether</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/weather">Weather</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>

                        </Nav>
                        
                        {!isLoggedIn ? <form className="d-flex">
                            <button className="btn btn-primary" onClick={logIn}> Login </button>
                            <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
                        </form> : <button className="btn btn-primary" onClick={logOut}> Logout </button>}

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    )
}

export default NavBar