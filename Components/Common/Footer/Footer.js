import React from 'react';
import { Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { FaRegPaperPlane, FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Link from 'next/link';
import Image from "next/image";
import footer_logo from "../../../public/Images/Common/footer_logo.png";
import gift from "../../../public/Images/Common/gift.png";
import payment from "../../../public/Images/Common/payment.png";

const Footer = () => {
    return (
        <>
            <footer>
                {/* footer_top 1 */}
                <div className="footer_top">
                    <div className="footerBg sesction_pt sesction_pb">
                        <Container>
                            {/* banner */}
                            <div className="banner">
                                <div className="d-flex flex-wrap justify-content-between align-items-center">
                                    {/* left Content */}
                                    <div className="leftContent d-flex ">
                                        <div className="banner_logo align-items-center me-4">
                                            <Image alt="network-img" src={gift} width="110" height="108" />
                                        </div>
                                        <div className="description">
                                            <h3 className='fs32 mb-4 cl_pm bold'>You will love our solutions</h3>
                                            <p className='fs16 medium cl_black'>Take a look at our high rated Softwaer and Premium Themes.</p>
                                        </div>
                                    </div>
                                    {/* right Content */}
                                    <div className="rightContent">
                                        <button className='smallBtn common_round10 cl_black fs16 text-uppercase'>
                                            browse all plugins
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* content */}
                            <div className="content">
                                <Row>
                                    {/* single content 1 */}
                                    <Col xl={4} lg={4} sm={6} className="mt-4">
                                        <div className="single_content">
                                            <div className="footer_logo mb-5">
                                                <Image alt="network-img" src={footer_logo} width="220" height="50" />
                                            </div>
                                            <p className='cl_white fs20 mb-5'>
                                                Want To Get Discount and Product Updates From Us?
                                            </p>
                                            <Form className='mb-5'>
                                                <InputGroup>
                                                    <Form.Control
                                                        placeholder="Email Address"
                                                    />
                                                    <button type="submit" className='border-0 submit_button'>
                                                        <FaRegPaperPlane size={25} className='me-3 cl_pm' />
                                                    </button>
                                                </InputGroup>
                                            </Form>

                                            <div className="social_link">
                                                <ul className='l_s_none p-0 d-flex'>
                                                    <li>
                                                        <a href="#facebook" target="_blank">
                                                            <div className="icon">
                                                                <FaFacebookF />
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#facebook" target="_blank">
                                                            <div className="icon">
                                                                <FaTwitter />
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#facebook" target="_blank">
                                                            <div className="icon">
                                                                <FaLinkedinIn />
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#facebook" target="_blank">
                                                            <div className="icon">
                                                                <AiFillInstagram />
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#facebook" target="_blank">
                                                            <div className="icon">
                                                                <FaPinterestP />
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Col>
                                    {/* single content 2 */}
                                    <Col xl={3} lg={4} sm={6} className="mt-4 d-flex justify-content-center">
                                        <div className="single_content">
                                            <div className="title mb-5">
                                                <h4 className='cl_gold bold fs24'>Company</h4>
                                            </div>
                                            <div className="content">
                                                <ul className='l_s_none p-0'>
                                                    <li>
                                                        <Link href="">About Us</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="">Testimonials</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="">Affiliates</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="">Partners</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="">Contact Us</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="">Career</Link>
                                                    </li>


                                                </ul>
                                            </div>
                                        </div>
                                    </Col>
                                    {/* single content 3 */}
                                    <Col xl={2} lg={4} sm={6} className="mt-4 d-flex justify-content-center">
                                        <div className="single_content">
                                            <div className="title mb-5">
                                                <h4 className='cl_gold bold fs24'>Links</h4>
                                            </div>
                                            <div className="content">
                                                <ul className='l_s_none p-0'>
                                                    <li>
                                                        <Link href="">Support Area</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="">Refund Policy</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="">Terms of Service</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="">Service</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="">Privacy Policy</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="">Brand Assets</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="">Coupons</Link>
                                                    </li>


                                                </ul>
                                            </div>
                                        </div>
                                    </Col>
                                    {/* single content 4 */}
                                    <Col xl={3} lg={4} sm={6} className="mt-4 d-flex justify-content-end">
                                        <div className="single_content">
                                            <div className="title mb-5">
                                                <h4 className='cl_gold bold fs24'>Our Products</h4>
                                            </div>
                                            <div className="content">
                                                <ul className='l_s_none p-0'>
                                                    <li>
                                                        <Link href="">Clan Inventory</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="">Clan Promotion</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="">Clan Page Builder</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="">Clan Pos Management System</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="">Clan Resume Builder</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="">Clan Restaurant Billing Management</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="">Management</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Col>

                                </Row>
                            </div>
                        </Container>
                    </div>
                </div>
                {/* footer_middle 2 */}
                <div className="footer_middle bg_gray">
                    <Container>
                        <div className="footer_middle_content py-3 d-flex flex-wrap justify-content-between align-items-center">

                            {/* left content */}
                            <div className="copyright_content mt-3">
                                <p className='fs16 cl_black medium mb-3'>
                                    Copyright © 2021
                                    <span className='cl_pm fs20 medium mx-1'>Clan</span>
                                    <span className='cl_gold fs20 medium me-1'>Crop.</span>
                                    All Rights Reserved.
                                    <br />
                                    Design & Developed By
                                </p>
                            </div>

                            {/* right content */}
                            <div className="payment_content">
                                <div className="payment_logo">
                                    <Image alt="payment_logo" src={payment} />
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
                {/* footer_bottom 3 */}
                <div className="footer_bottom bg_dark">
                    <Container>
                        <div className="footer_bottom_content py-3 d-flex flex-wrap justify-content-between align-items-center">
                            {/* left content */}
                            <div className="copyright_content ">
                                <p className='fs16 cl_white mb-0'>
                                    This Website uses cookies to ensure you get the best experience on our website. <Link href=" " className='cl_white_hover'>Learn More.</Link>
                                </p>
                            </div>

                            {/* right content */}
                            <div className="copyright_content">
                                <Link href=" " className='fs16 cl_white_hover me-3'>Opt Out</Link>
                                <button className='smallBtn common_round5 cl_pm fs14 py-2'> Allow Cookies </button>
                            </div>
                        </div>
                    </Container>
                </div>
            </footer>
        </>
    );
};

export default Footer;