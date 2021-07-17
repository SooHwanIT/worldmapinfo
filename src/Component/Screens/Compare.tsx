

import * as React from 'react';
import Header from './Semantic/Header';
import Footer from './Semantic/Footer';
import CountryInput from './Etc/CountryInput';
import '../css/Compare.css'
// import './Compare.css'



function Compare() {
    return (
        <div className="compaaaare">
            <Header/>
            <CountryInput/>
            <Footer/>
        </div>
    );
}

export default Compare;