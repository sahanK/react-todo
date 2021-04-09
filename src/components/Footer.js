import React from 'react';
import {Link} from 'react-router-dom';

const Footer = ({todos}) => {

    return(
        <div style={{textAlign: "center", marginTop: "50px"}}>
            <Link to={{
                pathname: "/about",
                state: {
                    todoList: todos
                }
            }}><button className="nav-button">About Us</button></Link>
        </div>
    );
}

export default Footer;
