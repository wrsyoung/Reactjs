import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import HeaderComp from './HeaderComp';
import FooterComp from './FooterComp';

import HomeRoute from '../routes/HomeRoute';
import WorkRoute from '../routes/WorkRoute';

const App = () => {
    return (
        <div>
            <Router>
                <div>
                    <HeaderComp/>
                    <div>
                        <Route exact path="/" component={HomeRoute}/>
                        <Route exact path="/work" component={WorkRoute}/>
                    </div>
                    <FooterComp/>
                </div>
            </Router>
        </div>
    );
};

export default App;