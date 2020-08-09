import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {Spring} from 'react-spring/renderprops';

import graphchart from '../../images/graphchart.jpg';

const GraphChart = () => {
    return(
      <Spring
        from={{transform: 'translate3d(0,50px,0)', opacity: 0}}
            to={{transform: 'translate3d(0,0,0)', opacity: 1}}
            config={{ delay: 2250, duration: 350}}
      >
        {props => <div style={props} className="graph-chart-wrap">
          <Row className="title no-gutters">
            <Col sm={12}>
              <span>Top Campaigns</span>
            </Col>
          </Row>
          <Row className="graph-row no-gutters">
            <Col className="information-col col-12 col-md-auto">
              <Spring
                from={{transform: 'translate3d(-100px,0,0)', opacity: 0}}
                    to={{transform: 'translate3d(0,0,0)', opacity: 1}}
                    config={{ delay: 2450, duration: 350}}
              >
                {props => <div style={props} className="info-item clicks">
                  <p>Clicks</p>
                  <p>4,856,857</p>
                </div>}
              </Spring>
              <Spring
                from={{transform: 'translate3d(-100px,0,0)', opacity: 0}}
                    to={{transform: 'translate3d(0,0,0)', opacity: 1}}
                    config={{ delay: 2550, duration: 350}}
              >
                {props => <div style={props} className="info-item impressions">
                <p>Impressions</p>
                <p>27,856,857</p>
              </div>}
              </Spring>
              <Spring
                from={{transform: 'translate3d(-100px,0,0)', opacity: 0}}
                to={{transform: 'translate3d(0,0,0)', opacity: 1}}
                config={{ delay: 2650, duration: 350}}
              >
                {props => <div style={props} className="info-item cost">
                <p>Cost</p>
                <p>$24,959.84</p>
              </div>}
              </Spring>
            </Col>
            <Col className="graph-chart col-12 mt-5 mt-md-0 col-md-auto d-none d-md-inline">
              <Spring
                from={{transform: 'translate3d(-1px, 0,0)'}}
                to={{transform: 'translate3d(1400,0,0)'}}
                config={{ delay: 2450, duration: 2350}}
              >
                {props => <div style={props} className="graph-overlay">&nbsp;</div>}
              </Spring>
              <img src={graphchart} alt="Graph chart" />
            </Col>
          </Row>
          < Row className = "no-gutters d-none d-md-flex" >
            <Col className="col-md-auto col-12">&nbsp;</Col>
            <Col className="d-flex time-range">
              <span>Sun</span>
              <span className="ml-auto">Sat</span>
            </Col>
          </Row>
        </div>}
      </Spring>
    )
}

export default GraphChart;