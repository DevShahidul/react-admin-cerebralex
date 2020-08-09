import React from 'react';
import {Spring} from 'react-spring/renderprops';
import { ListGroup, NavDropdown, Button } from 'react-bootstrap';

import accounts from '../../images/svgs/accounts.svg'
import accountsActive from '../../images/svgs/accounts-color.svg'
import analytics from '../../images/svgs/analytics.svg'
import analyticsActive from '../../images/svgs/analytics-color.svg'
import campaigns from '../../images/svgs/campaigns.svg'
import campaignsActive from '../../images/svgs/campaigns-color.svg'
import dashboard from '../../images/svgs/dashboard.svg'
import dashboardDefault from '../../images/svgs/dashboard-default.svg'
import history from '../../images/svgs/history.svg'
import historyActive from '../../images/svgs/history-color.svg'
import library from '../../images/svgs/library.svg'
import libraryActive from '../../images/svgs/library-color.svg'

const Sidebar = ({setToggleNav, toggleNav}) => {

    return(
        <Spring
            to= {{marginLeft: 0}}
            from= {{marginLeft: -203}}
            config = {{delay: 600, duration: 250}}
        >
            {props => <aside style={props} className="sidebar-expanded sidebar-container bg-light-dark" id="sidebar-container">
                <div className="action-row d-flex align-items-center pl-3">
                    <NavDropdown className="user-info pr-2 d-md-none" title="Nadav Kerzner" id="collasible-user-dropdown">
                        <NavDropdown.Item href="#action/3.1">Log Out</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Change Password</NavDropdown.Item>
                    </NavDropdown>
                    <Button variant="transparent" onClick={() => setToggleNav(!toggleNav)} className="ml-auto sidebar-close"></Button>
                </div>
                <ListGroup defaultActiveKey="#link1">
                    <ListGroup.Item className="bg-light-dark d-flex align-items-center" action href="#link1">
                        <div className="nav-icon">
                            <img src={accounts} alt="accounts icon" />
                            <img className="active-icon" src={accountsActive} alt="accounts icon" />
                        </div>
                        <div className="nav-text ml-3" data-title="Accounts">Accounts</div>
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-light-dark d-flex align-items-center" action href="#link2">
                        <div className="nav-icon">
                            <img className="active-icon" src={dashboard} style={{width:'17px', height: '14px'}} alt="accounts icon" />
                            <img src={dashboardDefault} style={{width:'17px', height: '14px'}} alt="accounts icon" />
                        </div>
                        <div className="nav-text ml-3" data-title="Dashboard">Dashboard</div>
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-light-dark d-flex align-items-center" action href="#link3">
                        <div className="nav-icon">
                            <img src={campaigns} alt="accounts icon" />
                            <img className="active-icon" src={campaignsActive} alt="accounts icon" />
                        </div>
                        <div className="nav-text ml-3" data-title="Campaigns">Campaigns</div>
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-light-dark d-flex align-items-center" action href="#link4">
                        <div className="nav-icon">
                            <img src={analytics} alt="accounts icon" />
                            <img className="active-icon" src={analyticsActive} alt="accounts icon" />
                        </div>
                        <div className="nav-text ml-3" data-title="Analytics">Analytics</div>
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-light-dark d-flex align-items-center" action href="#link5">
                        <div className="nav-icon">
                            <img src={library} alt="accounts icon" />
                            <img className="active-icon" src={libraryActive} alt="accounts icon" />
                        </div>
                        <div className="nav-text ml-3" data-title="Creative Library">Creative Library</div>
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-light-dark d-flex align-items-center" action href="#link6">
                        <div className="nav-icon">
                            <img src={history} alt="accounts icon" />
                            <img className="active-icon" src={historyActive} alt="accounts icon" />
                        </div>
                        <div className="nav-text ml-3" data-title="Change History">Change History</div>
                    </ListGroup.Item>
                </ListGroup>
            </aside>}
        </Spring>
    )
}

export default Sidebar;