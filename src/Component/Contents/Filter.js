import React, {useState} from 'react';
import {Spring} from 'react-spring/renderprops';
import {Col, Button, Form, FormControl } from 'react-bootstrap';
import { Scrollbars } from "react-custom-scrollbars";

const Filter = ({toggleSearch, setToggleSearch}) => {
    const [toggleFilter, setToggleFilter] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [filterEdittoggle, setCilterEditToggle] = useState(false);

    return(
        <div className="filter-wrapper border-left ml-4 pl-4 d-flex align-items-center">
            <Spring
                from={{transform: 'scale(0)'}}
                to={{transform: 'scale(1)'}}
                config={{ delay: 1250, duration: 250 }}
            >
            {props => <div style={props} className={filterEdittoggle ? "active-fliter-item d-none d-md-inline shown" : "active-fliter-item d-none d-md-inline"}>
                <div className="d-flex active-fliter-action">
                    <div className="fliter-name">Status: </div>
                    <span className="filter-text" onClick={() => setCilterEditToggle(!filterEdittoggle)}>Active</span>
                    <Button variant="transparent"><i className="fa fa-times" aria-hidden="true"></i></Button>
                </div>
                <div className="fliter-edit dropdown-box">
                    <div className="close-dropdown">
                        <Button variant="transparent" onClick={() => setCilterEditToggle(!filterEdittoggle)}><i className="fa fa-times" aria-hidden="true"></i></Button>
                    </div>
                    <Form>
                        <Form.Group className="checkbox">
                            <Col sm={12}>
                                <Form.Check
                                type="radio"
                                label="Active"
                                name="status"
                                id="active"
                                />
                                <Form.Check
                                type="radio"
                                label="Pause"
                                name="status"
                                id="pause"
                                />
                                <Form.Check
                                type="radio"
                                label="Archive"
                                name="status"
                                id="archive"
                                />
                            </Col>
                        </Form.Group>
                    </Form>
                </div>
            </div>}
            </Spring>
            <Spring
                from={{transform: 'scale(0)'}}
                to={{transform: 'scale(1)'}}
                config={{ delay: 1300, duration: 250 }}
            >
            {props => <div style={props} className="active-fliter-item d-none d-md-inline">
                <div className="d-flex active-fliter-action">
                    <div className="fliter-name">Company: </div>
                    <span className="filter-text">Liberty Mutual</span>
                    <Button variant="transparent"><i className="fa fa-times" aria-hidden="true"></i></Button>
                </div>
                <div className="fliter-edit dropdown-box">
                    <div className="close-dropdown">
                        <Button variant="transparent"><i className="fa fa-times" aria-hidden="true"></i></Button>
                    </div>
                    <Form>
                        <Form.Group className="checkbox">
                            <Col sm={12}>
                                <Form.Check
                                type="radio"
                                label="Active"
                                name="status"
                                id="active2"
                                />
                                <Form.Check
                                type="radio"
                                label="Pause"
                                name="status"
                                id="pause2"
                                />
                                <Form.Check
                                type="radio"
                                label="Archive"
                                name="status"
                                id="archive2"
                                />
                            </Col>
                        </Form.Group>
                    </Form>
                </div>
            </div>}
            </Spring>
            <Spring
                from={{transform: 'scale(0)'}}
                to={{transform: 'scale(1)'}}
                config={{ delay: 1350, duration: 250 }}
            >
                {props => <div style={props} className={toggleFilter ? "filter-content position-relative shown" : "filter-content position-relative"}>
                    <Button variant="outline-white" className="filter-btn" onClick={() => setToggleFilter(!toggleFilter)}><i className="fa fa-filter" aria-hidden="true"></i> <span>Add Filter</span></Button>
                    <Button className="search-triger d-md-none" onClick={() => setToggleSearch(!toggleSearch)}><i className="fa fa-search" aria-hidden="true"></i></Button>
                    <div className="filter-dropdown dropdown-box position-absolute">
                        <div className="close-dropdown">
                            <Button variant="transparent" onClick={() => setToggleFilter(!toggleFilter)}><i className="fa fa-times" aria-hidden="true"></i></Button>
                        </div>
                        <Scrollbars className="custom-scrollbar" style={{ width: 320, height: 477 }}>
                        <Form>
                            <Form.Group className="checkbox">
                                <Form.Label className="d-flex" as="legend" column sm={12}>
                                <span>Status</span>
                                <span className="toggle-icon ml-auto"><i className="fa fa-chevron-down" aria-hidden="true"></i></span>
                                </Form.Label>
                                <Col sm={12}>
                                    <Form.Check
                                    type="radio"
                                    label="Active"
                                    name="status"
                                    id="active3"
                                    />
                                    <Form.Check
                                    type="radio"
                                    label="Pause"
                                    name="status"
                                    id="pause3"
                                    />
                                    <Form.Check
                                    type="radio"
                                    label="Archive"
                                    name="status"
                                    id="archive3"
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group className="checkbox">
                                <Form.Label className="d-flex" as="legend" column sm={12}>
                                <span>Account Type</span>
                                <span className="toggle-icon ml-auto"><i className="fa fa-chevron-down" aria-hidden="true"></i></span>
                                </Form.Label>
                                <Col sm={12}>
                                    <Form.Check
                                    type="radio"
                                    label="Clicks"
                                    name="account-type"
                                    id="clicks"
                                    />
                                    <Form.Check
                                    type="radio"
                                    label="Leads"
                                    name="account-type"
                                    id="leads"
                                    />
                                    <Form.Check
                                    type="radio"
                                    label="Calls"
                                    name="account-type"
                                    id="calls"
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group className="checkbox">
                                <Form.Label className={toggle ? "d-flex" : "d-flex pb-0"} as="legend" column sm={12}>
                                <span>Account Manager</span>
                                <span className="toggle-icon ml-auto" onClick={() => setToggle(!toggle)}><i className="fa fa-chevron-down" aria-hidden="true"></i></span>
                                </Form.Label>
                                {
                                toggle ?
                                <Col sm={12}>
                                    <Form.Check
                                    type="radio"
                                    label="Active"
                                    name="account-manager"
                                    id="active4"
                                    />
                                    <Form.Check
                                    type="radio"
                                    label="Pause"
                                    name="account-manager"
                                    id="pause4"
                                    />
                                    <Form.Check
                                    type="radio"
                                    label="Archive"
                                    name="account-manager"
                                    id="archive4"
                                    />
                                </Col>
                                : ""
                                }
                            </Form.Group>
                            <Form.Group className="checkbox">
                                <Form.Label className="d-flex" as="legend" column sm={12}>
                                <span>Company</span>
                                <span className="toggle-icon ml-auto"><i className="fa fa-chevron-down" aria-hidden="true"></i></span>
                                </Form.Label>
                                <Col sm={12}>
                                    <div className="search-wrapper d-flex">
                                        <Button className="search-btn"><i className="fa fa-search" aria-hidden="true"></i></Button>
                                        <FormControl type="text" placeholder="Libe" className="mr-sm-2" />
                                    </div>
                                    <Form.Check
                                    type="radio"
                                    label="Liberty Mutual"
                                    name="company"
                                    id="liberty-mutual"
                                    />
                                </Col>
                            </Form.Group>
                        </Form>
                        </Scrollbars>
                        <Form.Group className="button-row text-center">
                            <Col>
                                <Button type="submit">Done</Button>
                            </Col>
                        </Form.Group>
                    </div>
                </div>}
            </Spring>
        </div>
    )
}

export default Filter;