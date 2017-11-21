import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HeaderComp from './HeaderComp';
import FooterComp from './FooterComp';
import HomepageLayout from '../layouts/HomepageLayout';
import WorkpageLayout from '../layouts/WorkpageLayout';

class App extends React.Component {
    render(){

        return (
                <Router>
                    <div>
                        <HeaderComp />
                        <div>
                            <Route exact path="/" component={HomepageLayout} />
                            <Route exact path="/work" component={WorkpageLayout} />
                        </div>
                        <FooterComp />
                    </div>
                </Router>
        );
    }
}

export default App;
