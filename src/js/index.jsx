import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import {DATA} from './data';
import {Header} from './header/'
import {AboutMePage} from './pages/about_me'
import {HomePage} from './pages/home'
import {NYCPage} from './pages/nyc'
import {PortraitsPage} from './pages/portraits'
import {StyleGuidePage} from './pages/style_guide'
import {TravelsPage} from './pages/travels'

const Index = () => {
  return (
    <Router>
      <div>
        <Header header={DATA.name} subheader={DATA.title}/>
        <Route path='/' exact component={HomePage} />
        <Route path='/about_me' component={AboutMePage} />
        <Route path='/home' component={HomePage} />
        <Route path='/nyc' component={NYCPage} />
        <Route path='/portraits' component={PortraitsPage} />
        <Route path='/style_guide' component={StyleGuidePage} />
        <Route path='/travels' component={TravelsPage} />
      </div>
    </Router>
  )
};

ReactDOM.render(<Index />, document.getElementById('index'));
