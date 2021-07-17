

import * as React from 'react';
import Header from './Semantic/Header';
import Footer from './Semantic/Footer';
import AnalysisInput from './Etc/AnalysisInput'
// import './Analysis.css'



function Analysis() {
    return (
        <div>
            <Header/>
                <AnalysisInput/>
            <Footer/>
        </div>
    );
}

export default Analysis;