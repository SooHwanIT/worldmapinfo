import * as React from 'react';
// import './Home.css'
import Header from './Semantic/Header';
import Footer from './Semantic/Footer';
import { IoMdPerson } from "react-icons/io";
import '../css/Home.css'

function Home() {
    return (
        <div className="background">
            <Header/>
            <div className="background_deco"></div>

            <div className="main_text">
                <img src="https://i.ibb.co/zbpsF3W/v2.png" alt="contents logo" className="contents_logo"/>
                <p className="explane">
                    'CORONOMY'는 CORONA와 ECONOMY의 합성어로 코로나로 인해 경제가 어떻게 변화하였는지 시각 자료를 제공하는 사이트 입니다.
                </p>
            </div>

            <div className="bt">
                <a href='/analysis' className="A"><span className="country_analysis">Go To Country Analysis</span></a>
                <a href='/compare' className="C"><span className="country compare">Go To Country Compare</span></a>
                <a href='/map' className="M"><span className="map">Go To Map</span></a>
            </div>

            <Footer/>
        </div>
    );
}

export default Home;