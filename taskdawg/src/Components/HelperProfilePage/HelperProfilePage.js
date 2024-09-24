import React, { useState } from 'react';
import BottomNavbar from '../BottomNavBar/BottomNavBar';
import TopNavbar from '../TopNavBar/TopNavBar';
import { Card, Row, Col } from 'react-bootstrap';

import "./HelperProfilePage.css"

function HelperProfilePage() {

    const [activeTab, setActiveTab] = useState('active'); // State to manage active tab

    // Active cards data
    const activeCards = [
      { id: 1, title: 'Active Card 1', imageUrl: 'https://via.placeholder.com/300x200' },
      { id: 2, title: 'Active Card 2', imageUrl: 'https://via.placeholder.com/300x200' },
      { id: 3, title: 'Active Card 3', imageUrl: 'https://via.placeholder.com/300x200' }
    ];
  
    // Completed cards data
    const completedCards = [
      { id: 4, title: 'Completed Card 1', imageUrl: 'https://via.placeholder.com/300x200' },
      { id: 5, title: 'Completed Card 2', imageUrl: 'https://via.placeholder.com/300x200' },
      { id: 6, title: 'Completed Card 3', imageUrl: 'https://via.placeholder.com/300x200' }
    ];

    // Function to render the correct set of cards based on the active tab
    const renderCards = (cards) => {
        return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cards.map((card) => (
            <div key={card.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                {/* Card Image */}
                <img
                src={card.imageUrl}
                alt={card.title}
                className="w-full h-48 object-cover"
                />

                {/* Card Title */}
                <div className="p-4">
                <h2 className="text-lg font-bold">{card.title}</h2>
                </div>
            </div>
            ))}
        </div>
        );
    };

    return (
        <div>
            <TopNavbar></TopNavbar>

            <div className="helperProfileMargins">
                <div className="max-w-4xl mx-auto p-6 bg-white rounded-md shadow-md mt-10">
                    {/* Profile Icon and Description */}
                    <div className="flex items-start space-x-4">
                        {/* Profile Image */}
                        <img
                        src="https://via.placeholder.com/150"
                        alt="Profile"
                        className="w-32 h-32 rounded-full object-cover"
                        />

                        {/* Description */}
                        <div className="mt-2">
                        <h1 className="text-2xl font-bold text-gray-800">John Doe</h1>
                        <p className="text-gray-700 mt-4">
                            John is a passionate software developer with over 5 years of
                            experience in web development, specializing in React, JavaScript,
                            and full-stack development. He loves to build scalable web
                            applications and enjoys working on innovative projects.
                        </p>
                        </div>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto p-6">
                    {/* Page Title */}
                    <h1 className="text-3xl font-bold mb-8 text-center">Sleep Dawg's Tasks</h1>

                    {/* Tabs */}
                    <div className="flex justify-center mb-6">
                        <button
                        className={`px-4 py-2 mr-4 rounded-md font-semibold ${
                            activeTab === 'active' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                        }`}
                        onClick={() => setActiveTab('active')}
                        >
                        Active
                        </button>
                        <button
                        className={`px-4 py-2 rounded-md font-semibold ${
                            activeTab === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                        }`}
                        onClick={() => setActiveTab('completed')}
                        >
                        Completed
                        </button>
                    </div>

                    {/* Card Grid */}
                    {activeTab === 'active' ? renderCards(activeCards) : renderCards(completedCards)}
                </div>
            </div>   

            <BottomNavbar></BottomNavbar>
        </div>
    );
}

export default HelperProfilePage;