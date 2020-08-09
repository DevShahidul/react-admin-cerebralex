import React, {useState} from 'react';
import './App.scss';
import Header from './Component/Header/Header';
import Sidebar from './Component/Sidebar/Sidebar';
//import CampaignsView from './Pages/CampaignsView';
//import CampaignAdGroup from './Pages/CampaignAdGroup';
import CampaignChannels from './Pages/CampaignChannels';

import Row from 'react-bootstrap/Row'

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoA11y = true;


const App = () => {
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <div className={ toggleNav ? "App collapsed" : "App"}>
      <Header setToggleNav={setToggleNav} toggleNav={toggleNav} />
      <Row className="no-gutters">
        <Sidebar setToggleNav={setToggleNav} toggleNav={toggleNav} />
        <CampaignChannels />
      </Row>
    </div>
  );
}

export default App;
