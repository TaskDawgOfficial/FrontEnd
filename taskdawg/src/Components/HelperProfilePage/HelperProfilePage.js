import React from 'react';
import BottomNavbar from '../BottomNavBar/BottomNavBar';
import TopNavbar from '../TopNavBar/TopNavBar';
import { Card, Row, Col } from 'react-bootstrap';

import "./HelperProfilePage.css"

function HelperProfilePage() {
    return (
        <div>
            <TopNavbar></TopNavbar>

            

            <BottomNavbar></BottomNavbar>
        </div>
    );
}

export default HelperProfilePage;