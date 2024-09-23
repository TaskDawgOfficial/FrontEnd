import React from 'react';
import BottomNavbar from '../BottomNavBar/BottomNavBar';
import TopNavbar from '../TopNavBar/TopNavBar';
import { useNavigate } from 'react-router-dom';

import "./HelperHomePage.css"

function HelperHomePage() {

    const navigate = useNavigate();

    // Function to handle navigation and pass props
    const handleCardClick = (title, date, image) => {
        navigate('/threads', { state: { title, date, image } });
    };

    return (
        <div>
            <TopNavbar></TopNavbar>

            <div className="w-full content-margin">
                <div 
                    onClick={() => handleCardClick('Help Wabuffet take CSE 455 notes for an Amazon referral', 'November 15, 2024', 'amazon.png')} 
                    className="cursor-pointer w-full max-w-5xl mx-auto rounded overflow-hidden shadow-lg bg-white my-4"
                >
                    {/* Title at the top left */}
                    <div className="px-4 py-2">
                        <h2 className="mt-2 font-bold text-xl text-left">Help Wabuffet take CSE 455 notes for an Amazon referral</h2>
                    </div>

                    {/* Image in the middle */}
                    <div>
                        <img className="asker-img w-1/2 object-cover" src="amazon.png" alt="Amazon Referral" />
                    </div>

                    {/* Date created at the bottom right */}
                    <div className="px-4 py-2 flex justify-end">
                        <p className="text-sm text-gray-600">November 15, 2024</p>
                    </div>
                </div>

                <div 
                    onClick={() => handleCardClick('Get Kirby some recruiter emails and get a C1 recruiters email', 'November 16, 2024', 'capital_one.png')} 
                    className="cursor-pointer w-full max-w-5xl mx-auto rounded overflow-hidden shadow-lg bg-white my-4"
                >
                    {/* Title at the top left */}
                    <div className="mt-2 px-4 py-2">
                        <h2 className="font-bold text-xl text-left">Get Kirby some recruiter emails and get a C1 recruiters email</h2>
                    </div>

                    {/* Image in the middle */}
                    <div>
                        <img className="asker-img w-1/2 object-cover" src="capital_one.png"/>
                    </div>

                    {/* Date created at the bottom right */}
                    <div className="px-4 py-2 flex justify-end">
                        <p className="text-sm text-gray-600">November 16, 2024</p>
                    </div>
                </div>
            </div>

            <BottomNavbar></BottomNavbar>
        </div>
    );
}

export default HelperHomePage;