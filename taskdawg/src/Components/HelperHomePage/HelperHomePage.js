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

    // Mock card data
    // Array to store the card data
    const cardData = [
        {
        title: 'Help Wabuffet take CSE 455 notes for an Amazon referral',
        date: 'November 15, 2024',
        imageUrl: 'amazon.png'
        },
        {
        title: 'Get Kirby some recruiter emails and get a C1 recruiters email',
        date: 'November 16, 2024',
        imageUrl: 'capital_one.png'
        }
    ];

    return (
        <div>
            <TopNavbar></TopNavbar>

            <div className="content-margin w-full content-margin">
                {/* Map over cardData to dynamically generate the cards */}
                {cardData.map((card, index) => (
                    <div
                    key={index}
                    onClick={() => handleCardClick(card.title, card.date, card.imageUrl)}
                    className="cursor-pointer w-full max-w-5xl mx-auto rounded overflow-hidden shadow-lg bg-white my-4"
                    >
                    {/* Title at the top left */}
                    <div className="px-4 py-2">
                        <h2 className="mt-2 font-bold text-xl text-left">{card.title}</h2>
                    </div>

                    {/* Image in the middle */}
                    <div>
                        <img className="asker-img w-1/2 object-cover" src={card.imageUrl} alt={card.title} />
                    </div>

                    {/* Date created at the bottom right */}
                    <div className="px-4 py-2 flex justify-end">
                        <p className="text-sm text-gray-600">{card.date}</p>
                    </div>
                    </div>
                ))}
            </div>

            <BottomNavbar></BottomNavbar>
        </div>
    );
}

export default HelperHomePage;