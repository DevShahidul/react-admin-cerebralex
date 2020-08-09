import React from 'react';
import {Spring} from 'react-spring/renderprops';
import {Col, Button, Form, FormControl } from 'react-bootstrap';

const Search = ({toggleSearch, setToggleSearch}) => {
    return(
        < Col className = { toggleSearch ? "d-flex col-12 col-xl-6 toggle-search mt-md-5 mt-xl-0 showSearch" : "d-flex col-12 col-xl-6 toggle-search mt-md-5 mt-xl-0"}>
            <div className="search-wrapper ml-auto d-flex align-items-center">
                <Spring
                from={{transform: 'scaleX(0)', transformOrigin: 'left'}}
                to={{transform: 'scaleX(1)'}}
                config={{ delay: 1400, duration: 250}}
                >
                    {props => <Form style={props} inline>
                        <Button className="search-btn"><i className="fa fa-search" aria-hidden="true"></i></Button>
                        <FormControl type="text" placeholder="Search..." className="mr-sm-2" />
                    </Form>}
                </Spring>
                <Spring
                from={{transform: 'scale(0)'}}
                to={{transform: 'scale(1)'}}
                config={{ delay: 1650, duration: 250}}
                >
                    {props => <Button style={props} className="d-none d-md-inline"><i className="fa fa-share-square" aria-hidden="true"></i> Export</Button>}
                </Spring>
                
                <Button className="search-close d-md-none" onClick={() => setToggleSearch(!toggleSearch)}>Close</Button>
            </div>
        </Col>
    )
}

export default Search;