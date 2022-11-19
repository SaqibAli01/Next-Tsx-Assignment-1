import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from '../../styles/header.module.css';
import Box8 from '../Box8.tsx/Box8';
function Header() {
    return (
        <div className={styles.nsves}>
            <Navbar bg="F9FAFD" expand="lg" className={styles.nsves} >
                <Container fluid>
                    <Navbar.Brand href="#">

                        <Link href="http://localhost:3000">
                            <img className={styles.ic_image} src='icons.png' alt="nav" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >

                            <NavDropdown title="HYPEINDUSTRY" id="navbarScrollingDropdown" className={styles.frc}>

                                <Link href="/HyperIndustry">
                                    <NavDropdown.Item href="/Box1">
                                        {/* <NavDropdown.Item href="#action3"> */}
                                        HYPEINDUSTRY
                                    </NavDropdown.Item>
                                </Link>



                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Saqib ALi
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="HYPE OFFERS" id="navbarScrollingDropdown" className={styles.frc}>

                                <Link href="hyperIndustry1">
                                    <NavDropdown.Item href="#action3">
                                        Action
                                    </NavDropdown.Item>
                                </Link>
                                <NavDropdown.Item href="#action4">
                                    HYPE OFFERS
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    SAQIB Ali
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="SHIPPING" id="navbarScrollingDropdown"
                                className={styles.frc}>
                                {/* <link href='/Selling'>
                                </link> */}
                                <Link href="Selling">

                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                </Link>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>

                                <Nav.Link href="#" className={styles.frc}>
                            <Link href="/Seller" className={styles.Links}>
                                    SELLER
                            </Link>
                                </Nav.Link>
                        </Nav>

                        <Navbar bg="light" className={styles.B_header}>
                            <Nav.Link href="#"><img className={styles.persons} src='person.png' /> </Nav.Link>
                            <Nav.Link href="#" className={styles.frc}> Login</Nav.Link>
                            <br />

                            {/* <Nav.Link href="#" className={styles.frc}><input type='search' placeholder='Search' /></Nav.Link> */}
                            {/* <Nav.Link href="#"><img src='ser.png' /></Nav.Link> */}
                        </Navbar>

                        <div className={styles.container}>
                            <form className={styles.nosubmit}>
                                <input className={styles.nosubmit} type="search" placeholder="Search..." />
                            </form>
                        </div>

                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div >
    );
}

export default Header;