import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HeaderComp from './HeaderComp';
import FooterComp from './FooterComp';

class App extends React.Component {
    render(){

        return (
                    <div>
                        <HeaderComp />
                        <FooterComp />
                    </div>
        );
    }
}

export default App;
