import React from 'react';
import {Spring} from 'react-spring/renderprops';
import logo from "../../logo.svg";
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { Scrollbars } from "react-custom-scrollbars";

const Header = ({setToggleNav, toggleNav}) => {
    return (
        <Spring
            to = {{marginTop: 0}}
            from = {{ marginTop: -68}}
            config = {{duration: 500}}
        >
            {props => <header style={props} className="header-section">
            <Navbar className="bg-light-dark align-items-center" collapseOnSelect expand="md" variant="dark">
                <Navbar.Toggle onClick={() => setToggleNav(!toggleNav)} className="d-block text-white nav-icon mr-3" aria-controls="basic-navbar-nav" />
                <Navbar.Brand href="#home">
                    <img src={logo} className="brand-logo" alt="Logo" />
                </Navbar.Brand>
                <Nav className="text-white account-info border-left pl-4 ml-3 d-none d-md-inline">
                    <NavDropdown title="Account Number One" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Account Number Two</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Account Number Three</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Account Number Four</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav className="text-white ml-auto">
                    <NavDropdown className="notfications mr-md-3" title="" id="collasible-notification-dropdown">
                        <Scrollbars className="notification-custom-scroll" style={{ width: 323, height: 475 }}>
                            <div className="notification-dropdown-header d-flex">
                                <span>Notifications</span>
                                <button className="close-notification ml-auto"></button>
                            </div>
                            <div className="item-header dropdown-item">
                                New
                            </div>
                            <NavDropdown.Item className="d-flex unread" href="#">
                                <div className="activities-signal">
                                    <div className="signal-icon"></div>
                                </div>
                                <div className="information">
                                    <p>You’r campaign: <strong>Campaign number one</strong> has reached to it’s <strong>daily limit.</strong></p>
                                    <span className="notice-time"><i className="far fa-clock"></i> 1h</span>
                                </div>
                            </NavDropdown.Item>
                            <NavDropdown.Item className="d-flex unread" href="#">
                                <div className="activities-signal">
                                    <div className="signal-icon"></div>
                                </div>
                                <div className="information">
                                    <p>You’r campaign: <strong>Campaign number one</strong> has reached to it’s <strong>daily limit.</strong></p>
                                    <span className="notice-time"><i className="far fa-clock"></i> 1h</span>
                                </div>
                            </NavDropdown.Item>
                            <NavDropdown.Item className="d-flex" href="#">
                                <div className="activities-signal">
                                    <div className="signal-icon"></div>
                                </div>
                                <div className="information">
                                    <p>You’r campaign: <strong>Campaign number one</strong> has reached to it’s <strong>daily limit.</strong></p>
                                    <span className="notice-time"><i className="far fa-clock"></i> 1h</span>
                                </div>
                            </NavDropdown.Item>
                            <div className="item-header dropdown-item">
                                Earlier
                            </div>
                            <NavDropdown.Item className="d-flex" href="#">
                                <div className="activities-signal">
                                    <div className="signal-icon"></div>
                                </div>
                                <div className="information">
                                    <p>You’r campaign: <strong>Campaign number one</strong> has reached to it’s <strong>daily limit.</strong></p>
                                    <span className="notice-time"><i className="far fa-clock"></i> 1h</span>
                                </div>
                            </NavDropdown.Item>
                            <NavDropdown.Item className="d-flex" href="#">
                                <div className="activities-signal">
                                    <div className="signal-icon"></div>
                                </div>
                                <div className="information">
                                    <p>You’r campaign: <strong>Campaign number one</strong> has reached to it’s <strong>daily limit.</strong></p>
                                    <span className="notice-time"><i className="far fa-clock"></i> 1h</span>
                                </div>
                            </NavDropdown.Item>
                            <NavDropdown.Item className="d-flex" href="#">
                                <div className="activities-signal">
                                    <div className="signal-icon"></div>
                                </div>
                                <div className="information">
                                    <p>You’r campaign: <strong>Campaign number one</strong> has reached to it’s <strong>daily limit.</strong></p>
                                    <span className="notice-time"><i className="far fa-clock"></i> 1h</span>
                                </div>
                            </NavDropdown.Item>
                        </Scrollbars>
                    </NavDropdown>
                    <NavDropdown className="user-info pr-2 d-none d-md-inline" title="Nadav Kerzner" id="collasible-user-dropdown">
                        <NavDropdown.Item href="#action/3.1">Log Out</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Change Password</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar>
        </header>}
        </Spring>
    );
}
export default Header;