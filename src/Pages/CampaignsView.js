import React, {useState} from 'react';
import {Spring} from 'react-spring/renderprops';
import {Row, Col, Button} from 'react-bootstrap';
import Filter from "../Component/Contents/Filter";
import Datepicker from '../Component/Contents/Datepicker';
import Search from '../Component/Contents/Search';
import CampaignChart from '../Component/Contents/CampaignChart';

import GraphChart from '../Component/Contents/GraphChart';

const CampaignsView = () => {

    const [toggleSearch, setToggleSearch] = useState(false);

    return (
      <Col className="content-wrap p-4 bg-black text-white">
        <Spring
          to= {{marginTop: 0, opacity: 1}}
          from= {{marginTop: -68, opacity: 0}}
          delay= {950}
          config= {{duration: 250}}
        >
          {props => <Row style={props}>
            <Col className="content-title col-md-6 col-12">
              <h3>Campaigns View</h3>
            </Col>
            <Datepicker />
          </Row>}
        </Spring>
        <Row className="mt-md-4 pt-md-3 position-relative" style={{zIndex: 2}}>
          <Col className="action-col d-flex align-items-center">
            <Spring
              from={{transform: 'scale(0)'}}
              to={{transform: 'scale(1)'}}
              config={{ delay: 1200, duration: 250 }}
            >
              {props => <Button style={props} variant="primary" className="d-none d-md-inline"><i className="fa fa-plus" aria-hidden="true"></i> New Campaign</Button>}
            </Spring>
            <Filter setToggleSearch={setToggleSearch} toggleSearch={toggleSearch}/>
          </Col>
          <Search setToggleSearch={setToggleSearch} toggleSearch={toggleSearch} />
        </Row>
        <CampaignChart />
        <GraphChart />
      </Col>
    );
}

export default CampaignsView;