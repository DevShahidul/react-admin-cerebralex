import React, {useState} from 'react';
import {Spring} from 'react-spring/renderprops';
import {Row, Col, Button, Form} from 'react-bootstrap';

const CampaignAdGroupChart = () => {
    const [activities, setActivities] = useState(false)
    const [editToggle, setEditToggle] = useState(false)
    return(
        <div className="campaign-chart mt-3 pt-3">
          <Spring
            from={{transform: 'translate3d(0,50px,0)', opacity: 0}}
            to={{transform: 'translate3d(0,0,0)', opacity: 1}}
            config={{ delay: 1650, duration: 350}}
          >
            {props => <Row style={props} className="title-row no-gutters">
              <Col className="action-column col-auto d-flex align-items-center">
                <div className="select-mark">
                  <input id="checkbox-1" className="select-check" type="checkbox" />
                  <label htmlFor="checkbox-1" className="checkbox"></label>
                </div>
              </Col>
              <Col className="name col-auto">Ad Group Campaign <span className="d-none d-md-inline">Name</span> </Col>
              <Col className="budget">Bid</Col>
              <Col className="click">Clicks</Col>
              <Col className="impressions">Impressions</Col>
              <Col className="ctr">CTR</Col>
              <Col className="avg-cpc">Avg. CPC</Col>
              <Col className="cost"><i className="fas fa-sort-up"></i> Cost</Col>
              <Col className="avg-pos">Avg. Pos</Col>
              <Col className="showed">Showed</Col>
            </Row>}
          </Spring>
          <Spring
            from={{transform: 'translate3d(0,50px,0)', opacity: 0}}
            to={{transform: 'translate3d(0,0,0)', opacity: 1}}
            config={{ delay: 1750, duration: 350}}
          >
            {props => <Row style={props} className="row-item no-gutters">
            <Col className="action-column col-auto d-flex align-items-center">
              <div className="select-mark">
                <input id="checkbox-2" className="select-check" type="checkbox" />
                <label htmlFor="checkbox-2" className="checkbox"></label>
              </div>
              <div className={activities ? "activities shown" : "activities"}>
                <div className="activities-triger">
                  <span className="active"></span>
                  <Button  variant="transparent" onClick={() => setActivities(!activities)}><i className="fa fa-chevron-down" aria-hidden="true"></i></Button>
                </div>
                <div className="dropdown-box activities-dropdown">
                    <Form.Group className="radio">
                      <Col sm={12}>
                          <Form.Check
                          type="radio"
                          label="Active"
                          name="status"
                          id="active13"
                          />
                          <Form.Check
                          type="radio"
                          label="Pause"
                          name="status"
                          id="pause32"
                          className="pause"
                          />
                      </Col>
                  </Form.Group>
                </div>
              </div>
            </Col>
            <Col className="name col-auto">
              <span>California</span>
              <div className="action d-flex">
                <Button><i className="fas fa-pen"></i>Edit</Button>
                <Button><i className="fas fa-sort-amount-up"></i>Ad Group</Button>
                <Button><i className="fas fa-ball-pile"></i>Channels</Button>
              </div>
            </Col>
            <Col className="budget d-flex">
              <span>$7.50</span>
              <div className={editToggle ? "edit-budget shown" : "edit-budget"}>
                <span className="edit-toggler increase" onClick={() => setEditToggle(!editToggle)}>+25% <i className="fas fa-pen ml-2"></i></span>
                <div className="dropdown-box edit-dropdown">
                  <div className="close-dropdown d-flex align-items-center">
                      <span>Edit Multiplier</span>
                      <Button variant="transparent" onClick={() => setEditToggle(!editToggle)}><i className="fa fa-times" aria-hidden="true"></i></Button>
                  </div>
                  <div className="editable-content">
                    <input type="text" placeholder="100%" />
                  </div>
                  <div className="action-buttons d-flex">
                    <Button variant="transparent">Cancel</Button>
                    <Button className="save-btn ml-auto" variant="transparent">Save</Button>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="click">
              <span>4,856,857</span>
              <span className="increase">+25%</span>
            </Col>
            <Col className="impressions">
              <span>27,856,857</span>
              <span className="decrease">-12%</span>
            </Col>
            <Col className="ctr">
              <span>43.13%</span>
              <span className="increase">+25%</span>
            </Col>
            <Col className="avg-cpc">
              <span>$5.14</span>
              <span className="increase">+25%</span>
            </Col>
            <Col className="cost">
              <span>$24,959.84</span>
              <span className="increase">+25%</span>
            </Col>
            <Col className="avg-pos">
              <span>1.95</span>
              <span className="increase">+25%</span>
            </Col>
            <Col className="showed">
              <span>70.00%</span>
              <span className="increase">+25%</span>
            </Col>
          </Row>}
          </Spring>
          <Spring
            from={{transform: 'translate3d(0,50px,0)', opacity: 0}}
            to={{transform: 'translate3d(0,0,0)', opacity: 1}}
            config={{ delay: 1850, duration: 350}}
          >
            {props => <Row style={props} className="row-item no-gutters">
            <Col className="action-column col-auto d-flex align-items-center">
              <div className="select-mark">
                <input id="checkbox-3" className="select-check" type="checkbox" />
                <label htmlFor="checkbox-3" className="checkbox"></label>
              </div>
              <div className="activities">
                <div className="activities-triger">
                  <span className="active"></span>
                  <Button  variant="transparent"><i className="fa fa-chevron-down" aria-hidden="true"></i></Button>
                </div>
                <div className="dropdown-box activities-dropdown">
                    <Form.Group className="radio">
                      <Col sm={12}>
                          <Form.Check
                          type="radio"
                          label="Active"
                          name="status"
                          id="active31"
                          />
                          <Form.Check
                          type="radio"
                          label="Pause"
                          name="status"
                          id="pause33"
                          className="pause"
                          />
                      </Col>
                  </Form.Group>
                </div>
              </div>
            </Col>
            <Col className="name col-auto">
              <span>California</span>
              <div className="action d-flex">
                <Button><i className="fas fa-pen"></i>Edit</Button>
                <Button><i className="fas fa-sort-amount-up"></i>Ad Group</Button>
                <Button><i className="fas fa-ball-pile"></i>Channels</Button>
              </div>
            </Col>
            <Col className="budget d-flex">
              <span>$25,000</span>
              <div className="edit-budget">
                <span className="edit-toggler increase">+25% <i className="fas fa-pen ml-2"></i></span>
                <div className="dropdown-box edit-dropdown">
                  <div className="close-dropdown d-flex align-items-center">
                      <span>Edit Multiplier</span>
                      <Button variant="transparent"><i className="fa fa-times" aria-hidden="true"></i></Button>
                  </div>
                  <div className="editable-content">
                    <input type="text" placeholder="100%" />
                  </div>
                  <div className="action-buttons d-flex">
                    <Button variant="transparent">Cancel</Button>
                    <Button className="save-btn ml-auto" variant="transparent">Save</Button>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="click">
              <span>4,856,857</span>
              <span className="increase">+25%</span>
            </Col>
            <Col className="impressions">
              <span>27,856,857</span>
              <span className="decrease">-12%</span>
            </Col>
            <Col className="ctr">
              <span>43.13%</span>
              <span className="increase">+25%</span>
            </Col>
            <Col className="avg-cpc">
              <span>$5.14</span>
              <span className="increase">+25%</span>
            </Col>
            <Col className="cost">
              <span>$24,959.84</span>
              <span className="increase">+25%</span>
            </Col>
            <Col className="avg-pos">
              <span>1.95</span>
              <span className="increase">+25%</span>
            </Col>
            <Col className="showed">
              <span>70.00%</span>
              <span className="increase">+25%</span>
            </Col>
          </Row>}
          </Spring>
          <Spring
            from={{transform: 'translate3d(0,50px,0)', opacity: 0}}
            to={{transform: 'translate3d(0,0,0)', opacity: 1}}
            config={{ delay: 1950, duration: 350}}
          >
            {props => <Row style={props} className="row-item no-gutters">
              <Col className="action-column col-auto d-flex align-items-center">
                <div className="select-mark">
                  <input id="checkbox-4" className="select-check" type="checkbox" />
                  <label htmlFor="checkbox-4" className="checkbox"></label>
                </div>
                <div className="activities">
                  <div className="activities-triger">
                    <span className="active"></span>
                    <Button  variant="transparent"><i className="fa fa-chevron-down" aria-hidden="true"></i></Button>
                  </div>
                  <div className="dropdown-box activities-dropdown">
                      <Form.Group className="radio">
                        <Col sm={12}>
                            <Form.Check
                            type="radio"
                            label="Active"
                            name="status"
                            id="active32"
                            />
                            <Form.Check
                            type="radio"
                            label="Pause"
                            name="status"
                            id="pause13"
                            className="pause"
                            />
                        </Col>
                    </Form.Group>
                  </div>
                </div>
              </Col>
              <Col className="name col-auto">
                <span>California</span>
                <div className="action d-flex">
                  <Button><i className="fas fa-pen"></i>Edit</Button>
                  <Button><i className="fas fa-sort-amount-up"></i>Ad Group</Button>
                  <Button><i className="fas fa-ball-pile"></i>Channels</Button>
                </div>
              </Col>
              <Col className="budget d-flex">
                <span>$25,000</span>
                <div className="edit-budget">
                  <span className="edit-toggler increase">+25% <i className="fas fa-pen ml-2"></i></span>
                  <div className="dropdown-box edit-dropdown">
                    <div className="close-dropdown d-flex align-items-center">
                        <span>Edit Multiplier</span>
                        <Button variant="transparent"><i className="fa fa-times" aria-hidden="true"></i></Button>
                    </div>
                    <div className="editable-content">
                      <input type="text" placeholder="100%" />
                    </div>
                    <div className="action-buttons d-flex">
                      <Button variant="transparent">Cancel</Button>
                      <Button className="save-btn ml-auto" variant="transparent">Save</Button>
                    </div>
                  </div>
                </div>
              </Col>
              <Col className="click">
                <span>4,856,857</span>
                <span className="increase">+25%</span>
              </Col>
              <Col className="impressions">
                <span>27,856,857</span>
                <span className="decrease">-12%</span>
              </Col>
              <Col className="ctr">
                <span>43.13%</span>
                <span className="increase">+25%</span>
              </Col>
              <Col className="avg-cpc">
                <span>$5.14</span>
                <span className="increase">+25%</span>
              </Col>
              <Col className="cost">
                <span>$24,959.84</span>
                <span className="increase">+25%</span>
              </Col>
              <Col className="avg-pos">
                <span>1.95</span>
                <span className="increase">+25%</span>
              </Col>
              <Col className="showed">
                <span>70.00%</span>
                <span className="increase">+25%</span>
              </Col>
            </Row>}
          </Spring>
          <Spring
            from={{transform: 'translate3d(0,50px,0)', opacity: 0}}
            to={{transform: 'translate3d(0,0,0)', opacity: 1}}
            config={{ delay: 2050, duration: 350}}
          >
            {props => <Row style={props} className="row-item no-gutters">
            <Col className="action-column col-auto d-flex align-items-center">
              <div className="select-mark">
                <input id="checkbox-5" className="select-check" type="checkbox" />
                <label htmlFor="checkbox-5" className="checkbox"></label>
              </div>
              <div className="activities">
                <div className="activities-triger">
                  <span className="active"></span>
                  <Button  variant="transparent"><i className="fa fa-chevron-down" aria-hidden="true"></i></Button>
                </div>
                <div className="dropdown-box activities-dropdown">
                    <Form.Group className="radio">
                      <Col sm={12}>
                          <Form.Check
                          type="radio"
                          label="Active"
                          name="status"
                          id="active34"
                          />
                          <Form.Check
                          type="radio"
                          label="Pause"
                          name="status"
                          id="pause31"
                          className="pause"
                          />
                      </Col>
                  </Form.Group>
                </div>
              </div>
            </Col>
            <Col className="name col-auto">
              <span>California</span>
              <div className="action d-flex">
                <Button><i className="fas fa-pen"></i>Edit</Button>
                <Button><i className="fas fa-sort-amount-up"></i>Ad Group</Button>
                <Button><i className="fas fa-ball-pile"></i>Channels</Button>
              </div>
            </Col>
            <Col className="budget d-flex">
              <span>$25,000</span>
              <div className="edit-budget">
                <span className="edit-toggler increase">+25% <i className="fas fa-pen ml-2"></i></span>
                <div className="dropdown-box edit-dropdown">
                  <div className="close-dropdown d-flex align-items-center">
                      <span>Edit Multiplier</span>
                      <Button variant="transparent"><i className="fa fa-times" aria-hidden="true"></i></Button>
                  </div>
                  <div className="editable-content">
                    <input type="text" placeholder="100%" />
                  </div>
                  <div className="action-buttons d-flex">
                    <Button variant="transparent">Cancel</Button>
                    <Button className="save-btn ml-auto" variant="transparent">Save</Button>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="click">
              <span>4,856,857</span>
              <span className="increase">+25%</span>
            </Col>
            <Col className="impressions">
              <span>27,856,857</span>
              <span className="decrease">-12%</span>
            </Col>
            <Col className="ctr">
              <span>43.13%</span>
              <span className="increase">+25%</span>
            </Col>
            <Col className="avg-cpc">
              <span>$5.14</span>
              <span className="increase">+25%</span>
            </Col>
            <Col className="cost">
              <span>$24,959.84</span>
              <span className="increase">+25%</span>
            </Col>
            <Col className="avg-pos">
              <span>1.95</span>
              <span className="increase">+25%</span>
            </Col>
            <Col className="showed">
              <span>70.00%</span>
              <span className="increase">+25%</span>
            </Col>
          </Row>}
          </Spring>
          <Spring
            from={{transform: 'translate3d(0,50px,0)', opacity: 0}}
            to={{transform: 'translate3d(0,0,0)', opacity: 1}}
            config={{ delay: 2150, duration: 350}}
          >
            {props => <Row style={props} className="row-item no-gutters">
            <Col className="action-column col-auto d-flex align-items-center">
              <div className="select-mark">
                <input id="checkbox-5" className="select-check" type="checkbox" />
                <label htmlFor="checkbox-5" className="checkbox"></label>
              </div>
              <div className="activities">
                <div className="activities-triger">
                  <span className="active"></span>
                  <Button  variant="transparent"><i className="fa fa-chevron-down" aria-hidden="true"></i></Button>
                </div>
                <div className="dropdown-box activities-dropdown">
                    <Form.Group className="radio">
                      <Col sm={12}>
                          <Form.Check
                          type="radio"
                          label="Active"
                          name="status"
                          id="active34"
                          />
                          <Form.Check
                          type="radio"
                          label="Pause"
                          name="status"
                          id="pause31"
                          className="pause"
                          />
                      </Col>
                  </Form.Group>
                </div>
              </div>
            </Col>
            <Col className="name col-auto">
              <span>California</span>
              <div className="action d-flex">
                <Button><i className="fas fa-pen"></i>Edit</Button>
                <Button><i className="fas fa-sort-amount-up"></i>Ad Group</Button>
                <Button><i className="fas fa-ball-pile"></i>Channels</Button>
              </div>
            </Col>
            <Col className="budget d-flex">
              <span>$25,000</span>
              <div className="edit-budget">
                <span className="edit-toggler increase">+25% <i className="fas fa-pen ml-2"></i></span>
                <div className="dropdown-box edit-dropdown">
                  <div className="close-dropdown d-flex align-items-center">
                      <span>Edit Multiplier</span>
                      <Button variant="transparent"><i className="fa fa-times" aria-hidden="true"></i></Button>
                  </div>
                  <div className="editable-content">
                    <input type="text" placeholder="100%" />
                  </div>
                  <div className="action-buttons d-flex">
                    <Button variant="transparent">Cancel</Button>
                    <Button className="save-btn ml-auto" variant="transparent">Save</Button>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="click">
              <span>4,856,857</span>
              <span className="increase">+25%</span>
            </Col>
            <Col className="impressions">
              <span>27,856,857</span>
              <span className="decrease">-12%</span>
            </Col>
            <Col className="ctr">
              <span>43.13%</span>
              <span className="increase">+25%</span>
            </Col>
            <Col className="avg-cpc">
              <span>$5.14</span>
              <span className="increase">+25%</span>
            </Col>
            <Col className="cost">
              <span>$24,959.84</span>
              <span className="increase">+25%</span>
            </Col>
            <Col className="avg-pos">
              <span>1.95</span>
              <span className="increase">+25%</span>
            </Col>
            <Col className="showed">
              <span>70.00%</span>
              <span className="increase">+25%</span>
            </Col>
          </Row>}
          </Spring>
          <Spring
            from={{transform: 'translate3d(0,50px,0)', opacity: 0}}
            to={{transform: 'translate3d(0,0,0)', opacity: 1}}
            config={{ delay: 2250, duration: 350}}
          >
            {props => <Row style={props} className="row-item no-gutters">
            <Col className="action-column col-auto d-flex align-items-center">
              <div className="select-mark">
                <input id="checkbox-5" className="select-check" type="checkbox" />
                <label htmlFor="checkbox-5" className="checkbox"></label>
              </div>
              <div className="activities">
                <div className="activities-triger">
                  <span className="active"></span>
                  <Button  variant="transparent"><i className="fa fa-chevron-down" aria-hidden="true"></i></Button>
                </div>
                <div className="dropdown-box activities-dropdown">
                    <Form.Group className="radio">
                      <Col sm={12}>
                          <Form.Check
                          type="radio"
                          label="Active"
                          name="status"
                          id="active34"
                          />
                          <Form.Check
                          type="radio"
                          label="Pause"
                          name="status"
                          id="pause31"
                          className="pause"
                          />
                      </Col>
                  </Form.Group>
                </div>
              </div>
            </Col>
            <Col className="name col-auto">
              <span>California</span>
              <div className="action d-flex">
                <Button><i className="fas fa-pen"></i>Edit</Button>
                <Button><i className="fas fa-sort-amount-up"></i>Ad Group</Button>
                <Button><i className="fas fa-ball-pile"></i>Channels</Button>
              </div>
            </Col>
            <Col className="budget d-flex">
              <span>$25,000</span>
              <div className="edit-budget">
                <span className="edit-toggler increase">+25% <i className="fas fa-pen ml-2"></i></span>
                <div className="dropdown-box edit-dropdown">
                  <div className="close-dropdown d-flex align-items-center">
                      <span>Edit Multiplier</span>
                      <Button variant="transparent"><i className="fa fa-times" aria-hidden="true"></i></Button>
                  </div>
                  <div className="editable-content">
                    <input type="text" placeholder="100%" />
                  </div>
                  <div className="action-buttons d-flex">
                    <Button variant="transparent">Cancel</Button>
                    <Button className="save-btn ml-auto" variant="transparent">Save</Button>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="click">
              <span>4,856,857</span>
              <span className="increase">+25%</span>
            </Col>
            <Col className="impressions">
              <span>27,856,857</span>
              <span className="decrease">-12%</span>
            </Col>
            <Col className="ctr">
              <span>43.13%</span>
              <span className="increase">+25%</span>
            </Col>
            <Col className="avg-cpc">
              <span>$5.14</span>
              <span className="increase">+25%</span>
            </Col>
            <Col className="cost">
              <span>$24,959.84</span>
              <span className="increase">+25%</span>
            </Col>
            <Col className="avg-pos">
              <span>1.95</span>
              <span className="increase">+25%</span>
            </Col>
            <Col className="showed">
              <span>70.00%</span>
              <span className="increase">+25%</span>
            </Col>
          </Row>}
          </Spring>
          <Spring
            from={{transform: 'translate3d(0,50px,0)', opacity: 0}}
            to={{transform: 'translate3d(0,0,0)', opacity: 1}}
            config={{ delay: 2350, duration: 350}}
          >
            {props => <Row style={props} className="row-item no-gutters">
            <Col className="action-column col-auto d-flex align-items-center">
              <div className="select-mark">
                <input id="checkbox-5" className="select-check" type="checkbox" />
                <label htmlFor="checkbox-5" className="checkbox"></label>
              </div>
              <div className="activities">
                <div className="activities-triger">
                  <span className="active"></span>
                  <Button  variant="transparent"><i className="fa fa-chevron-down" aria-hidden="true"></i></Button>
                </div>
                <div className="dropdown-box activities-dropdown">
                    <Form.Group className="radio">
                      <Col sm={12}>
                          <Form.Check
                          type="radio"
                          label="Active"
                          name="status"
                          id="active34"
                          />
                          <Form.Check
                          type="radio"
                          label="Pause"
                          name="status"
                          id="pause31"
                          className="pause"
                          />
                      </Col>
                  </Form.Group>
                </div>
              </div>
            </Col>
            <Col className="name col-auto">
              <span>California</span>
              <div className="action d-flex">
                <Button><i className="fas fa-pen"></i>Edit</Button>
                <Button><i className="fas fa-sort-amount-up"></i>Ad Group</Button>
                <Button><i className="fas fa-ball-pile"></i>Channels</Button>
              </div>
            </Col>
            <Col className="budget d-flex">
              <span>$25,000</span>
              <div className="edit-budget">
                <span className="edit-toggler increase">+25% <i className="fas fa-pen ml-2"></i></span>
                <div className="dropdown-box edit-dropdown">
                  <div className="close-dropdown d-flex align-items-center">
                      <span>Edit Multiplier</span>
                      <Button variant="transparent"><i className="fa fa-times" aria-hidden="true"></i></Button>
                  </div>
                  <div className="editable-content">
                    <input type="text" placeholder="100%" />
                  </div>
                  <div className="action-buttons d-flex">
                    <Button variant="transparent">Cancel</Button>
                    <Button className="save-btn ml-auto" variant="transparent">Save</Button>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="click">
              <span>4,856,857</span>
              <span className="increase">+25%</span>
            </Col>
            <Col className="impressions">
              <span>27,856,857</span>
              <span className="decrease">-12%</span>
            </Col>
            <Col className="ctr">
              <span>43.13%</span>
              <span className="increase">+25%</span>
            </Col>
            <Col className="avg-cpc">
              <span>$5.14</span>
              <span className="increase">+25%</span>
            </Col>
            <Col className="cost">
              <span>$24,959.84</span>
              <span className="increase">+25%</span>
            </Col>
            <Col className="avg-pos">
              <span>1.95</span>
              <span className="increase">+25%</span>
            </Col>
            <Col className="showed">
              <span>70.00%</span>
              <span className="increase">+25%</span>
            </Col>
          </Row>}
          </Spring>
          <Spring
            from={{transform: 'translate3d(0,50px,0)', opacity: 0}}
            to={{transform: 'translate3d(0,0,0)', opacity: 1}}
            config={{ delay: 2450, duration: 350}}
          >
            {props => <Row style={props} className="row-item no-gutters">
            <Col className="action-column col-auto d-flex align-items-center">
              <div className="select-mark">
                <input id="checkbox-5" className="select-check" type="checkbox" />
                <label htmlFor="checkbox-5" className="checkbox"></label>
              </div>
              <div className="activities">
                <div className="activities-triger">
                  <span className="active"></span>
                  <Button  variant="transparent"><i className="fa fa-chevron-down" aria-hidden="true"></i></Button>
                </div>
                <div className="dropdown-box activities-dropdown">
                    <Form.Group className="radio">
                      <Col sm={12}>
                          <Form.Check
                          type="radio"
                          label="Active"
                          name="status"
                          id="active34"
                          />
                          <Form.Check
                          type="radio"
                          label="Pause"
                          name="status"
                          id="pause31"
                          className="pause"
                          />
                      </Col>
                  </Form.Group>
                </div>
              </div>
            </Col>
            <Col className="name col-auto">
              <span>California</span>
              <div className="action d-flex">
                <Button><i className="fas fa-pen"></i>Edit</Button>
                <Button><i className="fas fa-sort-amount-up"></i>Ad Group</Button>
                <Button><i className="fas fa-ball-pile"></i>Channels</Button>
              </div>
            </Col>
            <Col className="budget d-flex">
              <span>$25,000</span>
              <div className="edit-budget">
                <span className="edit-toggler increase">+25% <i className="fas fa-pen ml-2"></i></span>
                <div className="dropdown-box edit-dropdown">
                  <div className="close-dropdown d-flex align-items-center">
                      <span>Edit Multiplier</span>
                      <Button variant="transparent"><i className="fa fa-times" aria-hidden="true"></i></Button>
                  </div>
                  <div className="editable-content">
                    <input type="text" placeholder="100%" />
                  </div>
                  <div className="action-buttons d-flex">
                    <Button variant="transparent">Cancel</Button>
                    <Button className="save-btn ml-auto" variant="transparent">Save</Button>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="click">
              <span>4,856,857</span>
              <span className="increase">+25%</span>
            </Col>
            <Col className="impressions">
              <span>27,856,857</span>
              <span className="decrease">-12%</span>
            </Col>
            <Col className="ctr">
              <span>43.13%</span>
              <span className="increase">+25%</span>
            </Col>
            <Col className="avg-cpc">
              <span>$5.14</span>
              <span className="increase">+25%</span>
            </Col>
            <Col className="cost">
              <span>$24,959.84</span>
              <span className="increase">+25%</span>
            </Col>
            <Col className="avg-pos">
              <span>1.95</span>
              <span className="increase">+25%</span>
            </Col>
            <Col className="showed">
              <span>70.00%</span>
              <span className="increase">+25%</span>
            </Col>
          </Row>}
          </Spring>
          <Spring
            from={{transform: 'translate3d(0,50px,0)', opacity: 0}}
            to={{transform: 'translate3d(0,0,0)', opacity: 1}}
            config={{ delay: 2550, duration: 350}}
          >
            {props => <Row style={props} className="row-item no-gutters">
            <Col className="action-column col-auto d-flex align-items-center">
              <div className="select-mark">
                <input id="checkbox-5" className="select-check" type="checkbox" />
                <label htmlFor="checkbox-5" className="checkbox"></label>
              </div>
              <div className="activities">
                <div className="activities-triger">
                  <span className="active"></span>
                  <Button  variant="transparent"><i className="fa fa-chevron-down" aria-hidden="true"></i></Button>
                </div>
                <div className="dropdown-box activities-dropdown">
                    <Form.Group className="radio">
                      <Col sm={12}>
                          <Form.Check
                          type="radio"
                          label="Active"
                          name="status"
                          id="active34"
                          />
                          <Form.Check
                          type="radio"
                          label="Pause"
                          name="status"
                          id="pause31"
                          className="pause"
                          />
                      </Col>
                  </Form.Group>
                </div>
              </div>
            </Col>
            <Col className="name col-auto">
              <span>California</span>
              <div className="action d-flex">
                <Button><i className="fas fa-pen"></i>Edit</Button>
                <Button><i className="fas fa-sort-amount-up"></i>Ad Group</Button>
                <Button><i className="fas fa-ball-pile"></i>Channels</Button>
              </div>
            </Col>
            <Col className="budget d-flex">
              <span>$25,000</span>
              <div className="edit-budget">
                <span className="edit-toggler increase">+25% <i className="fas fa-pen ml-2"></i></span>
                <div className="dropdown-box edit-dropdown">
                  <div className="close-dropdown d-flex align-items-center">
                      <span>Edit Multiplier</span>
                      <Button variant="transparent"><i className="fa fa-times" aria-hidden="true"></i></Button>
                  </div>
                  <div className="editable-content">
                    <input type="text" placeholder="100%" />
                  </div>
                  <div className="action-buttons d-flex">
                    <Button variant="transparent">Cancel</Button>
                    <Button className="save-btn ml-auto" variant="transparent">Save</Button>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="click">
              <span>4,856,857</span>
              <span className="increase">+25%</span>
            </Col>
            <Col className="impressions">
              <span>27,856,857</span>
              <span className="decrease">-12%</span>
            </Col>
            <Col className="ctr">
              <span>43.13%</span>
              <span className="increase">+25%</span>
            </Col>
            <Col className="avg-cpc">
              <span>$5.14</span>
              <span className="increase">+25%</span>
            </Col>
            <Col className="cost">
              <span>$24,959.84</span>
              <span className="increase">+25%</span>
            </Col>
            <Col className="avg-pos">
              <span>1.95</span>
              <span className="increase">+25%</span>
            </Col>
            <Col className="showed">
              <span>70.00%</span>
              <span className="increase">+25%</span>
            </Col>
          </Row>}
          </Spring>
          <Spring
            from={{transform: 'translate3d(0,50px,0)', opacity: 0}}
            to={{transform: 'translate3d(0,0,0)', opacity: 1}}
            config={{ delay: 2650, duration: 350}}
          >
            {props => <Row style={props} className="total-row no-gutters">
            <Col className="action-column col-auto d-flex align-items-center"></Col>
            <Col className="name col-auto">
              Total  <span className="d-none d-md-inline">( All Ad Group)</span>
            </Col>
            <Col className="budget d-flex">
              <span>$7.50</span>
              <div className="edit-budget">
                <span className="edit-toggler increase">+25% <i className="fas fa-pen ml-2"></i></span>
                <div className="dropdown-box edit-dropdown">
                  <div className="close-dropdown d-flex align-items-center">
                      <span>Edit Multiplier</span>
                      <Button variant="transparent"><i className="fa fa-times" aria-hidden="true"></i></Button>
                  </div>
                  <div className="editable-content">
                    <input type="text" placeholder="100%" />
                  </div>
                  <div className="action-buttons d-flex">
                    <Button variant="transparent">Cancel</Button>
                    <Button className="save-btn ml-auto" variant="transparent">Save</Button>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="click">
              <span>4,856,857</span>
              <span className="increase">+25%</span>
            </Col>
            <Col className="impressions">
              <span>27,856,857</span>
              <span className="decrease">-12%</span>
            </Col>
            <Col className="ctr">
              <span>43.13%</span>
              <span className="increase">+25%</span>
            </Col>
            <Col className="avg-cpc">
              <span>$5.14</span>
              <span className="increase">+25%</span>
            </Col>
            <Col className="cost">
              <span>$24,959.84</span>
              <span className="increase">+25%</span>
            </Col>
            <Col className="avg-pos">
              <span>1.95</span>
              <span className="increase">+25%</span>
            </Col>
            <Col className="showed">
              <span>70.00%</span>
              <span className="increase">+25%</span>
            </Col>
          </Row>}
          </Spring>
        </div>
    )
}

export default CampaignAdGroupChart;