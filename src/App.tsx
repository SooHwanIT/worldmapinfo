import * as React from 'react';
import * as ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import './App.css'

import Home from './Component/Screens/Home';
import Compare from './Component/Screens/Compare';
import Analysis from './Component/Screens/Analysis';
import Map from './Component/Screens/Map';

function App() {
    return (
        <div className="display">
            <Router> 
                <Switch>
                    <Route path='/Compare' component={Compare} />
                    <Route path='/Analysis' component={Analysis} /> 
                    <Route path='/Map' component={Map} /> 
                    <Route path='/' component={Home} />
                    <Route render={() => <div className='error'>에러 페이지</div>} />
                
                </Switch>
            </Router>
        </div>
    );
}

export default App;