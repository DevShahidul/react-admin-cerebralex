import React, {useState} from 'react';
import {Row, Col, Tabs, Tab, Form, Button } from 'react-bootstrap';
import { Scrollbars } from "react-custom-scrollbars";
import DatePicker from "react-datepicker";

const Datepicker = () => {
    const [startDate, setStartDate] = useState(new Date("2020/01/09"));
    const [endDate, setEndDate] = useState(new Date("2020/01/24"));
    const [compareState, setCompareState] = useState(false);
    const [dateToggleState, setDateToggleState] = useState(false);
    
    return(
        <Col className="date-picker-col d-flex col-6">
            <div className={dateToggleState ? "datepicker-wrap ml-auto show" : "datepicker-wrap ml-auto"}>
              <div className="d-flex">
                <div className="datepicker-toggler ml-auto">
                    <div className="d-none d-md-block">
                      <p>Yesterday: 09 Jan 2020 - 24 Jan 2020</p>
                      <span>vs. 10 Jan - 10 Jan</span>
                    </div>
                    <div className="d-flex align-items-center d-md-none">
                    <i className="far fa-calendar-alt"></i> <span className="mx-2">Yesterday</span>
                    </div>
                    <button className="icon" onClick={() => setDateToggleState(!dateToggleState)}><i className="fa fa-chevron-down" aria-hidden="true"></i></button>
                </div>
              </div>
              <div className="datepicker-tab-wrap dropdown-box">
                <div className="d-flex heading-row">
                  <span className="d-md-none">Select Dates</span>
                  <button className="hideDatepicker ml-auto" onClick={() => setDateToggleState(!dateToggleState)}><i className="fa fa-times" aria-hidden="true"></i></button>
                </div>
                <Tabs
                  defaultActiveKey="presets"
                  transition={false}
                  id="noanim-tab-example"
                >
                  <Tab eventKey="presets" title="Presets">
                    <Form>
                      <Scrollbars className="custom-scrollbar" style={{ width: 320, height: 425 }}>
                        <Form.Group className="radio">
                          <Form.Check
                            type="radio"
                            label="Today"
                            name="presets"
                            id="today"
                          />
                          <Form.Check
                            type="radio"
                            label="Yesterday"
                            name="presets"
                            id="yesterday"
                          />
                          <Form.Check
                            type="radio"
                            label="Last 30 Days"
                            name="presets"
                            id="last30Days"
                          />
                          <Form.Check
                            type="radio"
                            label="This Month"
                            name="presets"
                            id="thisMonth"
                          />
                          <Form.Check
                            type="radio"
                            label="Last Month"
                            name="presets"
                            id="lastMonth"
                          />
                          <Form.Check
                            type="radio"
                            label="Last 30 Days"
                            name="presets"
                            id="last30Days2"
                          />
                          <Form.Check
                            type="radio"
                            label="This Month"
                            name="presets"
                            id="thisMonth2"
                          />
                          <Form.Check
                            type="radio"
                            label="Last Month"
                            name="presets"
                            id="lastMonth2"
                          />
                          <Form.Check
                            type="radio"
                            label="Last 30 Days"
                            name="presets"
                            id="last30Days3"
                          />
                          <Form.Check
                            type="radio"
                            label="This Month"
                            name="presets"
                            id="thisMonth3"
                          />
                          <Form.Check
                            type="radio"
                            label="Last Month"
                            name="presets"
                            id="lastMonth3"
                          />
                        </Form.Group>
                      </Scrollbars>
                      <Form.Group className="button-row text-center">
                        <Col>
                          <Button type="submit">Done</Button>
                        </Col>
                      </Form.Group>
                    </Form>
                  </Tab>
                  <Tab
                    className={compareState ? "datepicker-contents compared" : "datepicker-contents"}
                    eventKey="custom-range"
                    title="Custom Range"
                  >
                    <Row className="no-gutters action-row">
                      <div className="selectedDate text-center">
                        <p>09/01/2020 - 09/01/2020</p>
                        {
                          compareState ? <p className="compared-date"><span className="d-block py-2">vs.</span> 09/01/2020 - 09/01/2020</p> : ''
                        }
                      </div>
                      <Form.Check
                        className="ml-auto"
                        type="switch"
                        id="custom-switch"
                        label="Compare"
                        onChange={() => setCompareState(!compareState) }
                      />
                    </Row>
                    <Row className="no-gutters datepicker-row">
                        <DatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          inline
                          startDate={startDate}
                          endDate={endDate}
                          //monthsShown={2}
                        />
                        <DatePicker
                          selected={endDate}
                          onChange={(date) => setEndDate(date)}
                          inline
                          startDate={startDate}
                          endDate={endDate}
                          minDate={startDate}
                        />
                    </Row>
                    <Form.Group className="button-row text-center">
                      <Col>
                        <Button type="submit">Done</Button>
                      </Col>
                    </Form.Group>
                  </Tab>
                </Tabs>
              </div>
            </div>
        </Col>
    )
}

export default Datepicker;