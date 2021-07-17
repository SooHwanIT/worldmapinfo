import * as React from 'react';
import '../../css/Footer.css'
import { AiFillGithub } from 'react-icons/ai';


const Footer =()=> {
    return (
        <div>
            <div className="footer">
                <p>github address</p>
                <a href="https://github.com/SooHwanIT">최수환&nbsp;<AiFillGithub/></a>&nbsp;
                <a href="https://github.com/butdory">정원영&nbsp;<AiFillGithub/></a>&nbsp;
                <a href="https://github.com/Green050121">윤도현&nbsp;<AiFillGithub/></a>&nbsp;
                <a href="https://github.com/SooHwanIT">최현정&nbsp;<AiFillGithub/></a>&nbsp;
                <p>made by sunrin internet highschool 최수환 최현정 정원영 윤도현</p>
                <p>Contact webmaster for more information. @gmail.com</p>
                <p>Pixabay License, last modified 7, 17, 2021, "https://pixabay.com/ko/"</p>
                <img src="https://i.ibb.co/HgptDCG/logo.png" alt="footer logo"/>
            </div>
        </div>
    )
}
export default Footer;