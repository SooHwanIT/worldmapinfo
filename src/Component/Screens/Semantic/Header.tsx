import * as React from 'react';
import { Link } from 'react-router-dom';
import '../../css/Header.css'

//  아까 z-index 안 먹던거 position: absolute; 주고 다시해봐
const Header =()=> {
    return (
        <div className="header">
            <img src="https://i.ibb.co/HgptDCG/logo.png" alt="header logo"/>
            <p></p>
            <Link to='/'><p>Home</p></Link>
            <Link to='/analysis'><p>Country analysis</p></Link>
            <Link to='/compare'><p>Country compare</p></Link>
            <Link to='/Map'><p>Map</p></Link>
        </div>
    )
}
export default Header;