import React from 'react';
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';
// import {library} from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCloud} from '@fortawesome/free-solid-svg-icons'

const MainPage = () => {
    return (
        <div>
            <h3>Welcome to react tutorial</h3>
            <small>Main Page</small>
            <Button variant="danger">
                <span>
                    <Link to="/404">Cloud </Link>
                    <FontAwesomeIcon icon={faCloud}/>
                </span>
            </Button>
        </div>
    );
}

export default MainPage;