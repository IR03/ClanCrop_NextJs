import Image from 'next/image';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import main_logo from "../../../public/Images/Common/logo.png";
import black_friday from "../../../public/Images/Common/black_friday.png";
import cart from "../../../public/Images/Common/cart.png";
import Link from 'next/link';
import { MdOutlineAddCircle } from "react-icons/md";

const Header = () => {

    return (
        <>

            <div className="topHeader">
                <Container>
                    <div className="d-flex justify-content-between align-items-center py-4">

                        <div className="promotion position-relative">
                            
                            <div className="promotion_logo position-absolute start-0 promotion_tag">
                                <Image src={black_friday}   alt="black friday promotion" />
                            </div>
                            <h4 className='promotion_content position-relative fs24 cl_white mb-0 medium'>
                                Rock your projects with 50% OFF this Black Friday
                            </h4>
                        </div>
                        <div className="addNow">
                            <Link href="" className='underline_none'>
                                <button className='smallBtn common_round5 cl_pm fs14 py-3 text-uppercase d-flex'>
                                    <MdOutlineAddCircle size={20} className='me-1' />
                                    Get premium now </button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
            <Navbar className='py-3' expand='lg' sticky="top">
                <Container>
                    {/* main logo */}
                    <Navbar.Brand href="#">
                        <Image src={main_logo} alt="ClanCrop logo" />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls='offcanvasNavbar-expand-lg' />

                    <Navbar.Offcanvas
                        id='offcanvasNavbar-expand-lg'
                        aria-labelledby='offcanvasNavbarLabel-expand-lg'
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id='offcanvasNavbarLabel-expand-lg'>
                                Offcanvas
                            </Offcanvas.Title>
                        </Offcanvas.Header>


                        <Offcanvas.Body>

                            {/* menu bar */}
                            <Nav className="justify-content-center flex-grow-1 pe-3">
                                <Nav.Link href="#">Products </Nav.Link>
                                <Nav.Link href="#">themes</Nav.Link>
                                <Nav.Link href="#">plugins</Nav.Link>
                                <Nav.Link href="#">about us</Nav.Link>
                                <Nav.Link href="#">learn</Nav.Link>
                                <Nav.Link href="#">forum</Nav.Link>
                            </Nav>

                            {/* cart & login / menu */}
                            <Nav className="justify-content-end align-items-center">
                                <Link href="">
                                    <Image className='me-5 img-fluid' src={cart} alt="product cart" />
                                </Link>
                                <Link href="" className='underline_none'>
                                    <button className='smallBtn common_round10 cl_pm fs16 '> LOGIN </button>
                                </Link>
                            </Nav>

                        </Offcanvas.Body>

                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;