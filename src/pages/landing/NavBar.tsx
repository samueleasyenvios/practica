import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container, Dropdown } from 'react-bootstrap';

// custom hooks
import { useRedux } from '../../hooks';

// images
import logoDark from '../../assets/images/landing/logo-dark.png';
import logoLight from '../../assets/images/landing/logo-light.png';

const NavBar = () => {
    const { appSelector } = useRedux();

    const { user, userLoggedIn } = appSelector((state) => ({
        user: state.Auth.user,
        userLoggedIn: state.Auth.userLoggedIn,
    }));

    const windowScroll = () => {
        const navbar = document.getElementById('navbar-sticky');
        if (navbar) {
            if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
                navbar.classList.add('nav-sticky');
            } else {
                navbar.classList.remove('nav-sticky');
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', (ev) => {
            ev.preventDefault();
            windowScroll();
        });
    }, []);

    return (
        <Navbar collapseOnSelect expand={false} className="navbar-expand-lg fixed-top navbar-custom" id="navbar">
            <Container>
                <Link to="/" className="logo text-uppercase">
                    <img src={logoLight} alt="" className="logo-light" height="20" />
                    <img src={logoDark} alt="" className="logo-dark" height="20" />
                </Link>

                <Navbar.Toggle className="shadow-none border-0 px-0" aria-controls="responsive-navbar-nav">
                    <i className="mdi mdi-menu"></i>
                </Navbar.Toggle>

                <Navbar.Collapse id="navbarCollapse">
                    <Nav as="ul" className="ms-auto navbar-center" id="mySidenav">
                        <Nav.Item as="li">
                            <Nav.Link href="#home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href="#services">Services</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href="#features">Features</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href="#testimonial">Testimonial</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href="#faq">FAQs</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Dropdown>
                                <Dropdown.Toggle as={Nav.Link} className="arrow-none">
                                    Pages <i className="mdi mdi-chevron-down ms-1"></i>
                                </Dropdown.Toggle>

                                <Dropdown.Menu align="end">
                                    <Dropdown.Item href="/landing-about">About</Dropdown.Item>
                                    <Dropdown.Item href="/landing-blog">Blog</Dropdown.Item>
                                    <Dropdown.Item href="/landing-blog-detail">Blog Details</Dropdown.Item>
                                    <Dropdown.Item href="/landing-contact">Contact</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav.Item>
                        <Nav.Item as="li">
                            {userLoggedIn || user ? (
                                <Nav.Link href="/auth/logout">Logout</Nav.Link>
                            ) : (
                                <Nav.Link href="/auth/login">Login</Nav.Link>
                            )}
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
