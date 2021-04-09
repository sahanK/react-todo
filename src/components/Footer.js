import React from 'react';
import {useHistory} from 'react-router-dom';

const Footer = ({todos}) => {
    const history = useHistory();
    const onButtonClick = () => {
        history.location.state = [...todos];
        history.push("/about", todos);
    }
    return(
        <div>
            <div style={{textAlign: "center", marginTop: "50px"}}>
                <button className="nav-button" onClick={onButtonClick}>ABOUT US</button>
            </div>
        </div>
    );
}

export default Footer;
