import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import TopNavbar from '../TopNavBar/TopNavBar';
import BottomNavbar from '../BottomNavBar/BottomNavBar';
import { Image } from 'react-bootstrap'; // Optional, you can use regular img if you prefer

import "./Thread.css"

const Thread = () => {
    const location = useLocation();
    const { title, date } = location.state || {}; // Destructure the passed state

    // State to store if the task is accepted
    const [isAccepted, setIsAccepted] = useState(false);
    
    // Sample questions thread data with responders
    const [threadMessages, setThreadMessages] = useState([
        {
          id: 1,
          user: 'Alice',
          message: 'How do I learn React?',
          profileIcon: 'https://via.placeholder.com/50',
          responders: [
            {
              name: 'Dave',
              profileIcon: 'https://via.placeholder.com/40',
              responseMessage: 'Start by following the official React documentation!',
            },
            {
              name: 'Eve',
              profileIcon: 'https://via.placeholder.com/40',
              responseMessage: 'There are many free tutorials online, I recommend watching some videos!',
            },
          ],
        },
        {
          id: 2,
          user: 'Bob',
          message: 'What is Tailwind CSS?',
          profileIcon: 'https://via.placeholder.com/50',
          responders: [
            {
              name: 'Mallory',
              profileIcon: 'https://via.placeholder.com/40',
              responseMessage: 'Tailwind is a utility-first CSS framework, very customizable!',
            },
          ],
        },
        {
          id: 3,
          user: 'Charlie',
          message: 'How do I use Bootstrap with React?',
          profileIcon: 'https://via.placeholder.com/50',
          responders: [
            {
              name: 'Oscar',
              profileIcon: 'https://via.placeholder.com/40',
              responseMessage: 'You can use the React Bootstrap library. It’s very easy to integrate!',
            },
            {
              name: 'Trudy',
              profileIcon: 'https://via.placeholder.com/40',
              responseMessage: 'Yes, I agree with Oscar. Also, check out the official Bootstrap website for more examples.',
            },
          ],
        },
      ]);

    const handleAcceptClick = () => {
        setIsAccepted(true);
    };

    return (
        <div>
            <TopNavbar></TopNavbar>

            <div className="thread-title-margins w-full">
                <div className="w-full mx-auto mt-10 p-4 bg-gray-100 rounded-md">
                    <h1 className="text-3xl font-bold mb-4">{title}</h1>

                    {/* Accept Button */}
                    {!isAccepted && (
                    <button
                        onClick={handleAcceptClick}
                        className="mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        Accept Task
                    </button>
                    )}
                    {isAccepted && (
                    <p className="text-green-500 mt-4">Task has been accepted!</p>
                    )}
                </div>
            </div>
            
            <div className="thread-content">
                {/* LLM Generated Response Section */}
                <div className="w-full bg-white z-50">
                    <div className="max-w-3xl mx-auto p-4 border rounded-md bg-gray-50">
                    <p className="text-xl font-bold">LLM generated response:</p>
                    <p className="text-gray-700 mt-2">This is the generated response text for the task.</p>

                    
                    </div>
                </div>
            </div>

            {/* Threading body */}
            <div className="max-w-3xl mx-auto mt-6 p-4 bg-white rounded-md shadow-md">
                <div className="space-y-4">
                    {threadMessages.map((msg) => (
                    <div key={msg.id} className="border p-4 rounded-md bg-gray-50">
                        {/* Question content */}
                        <div className="flex items-center space-x-4">
                        <Image
                            src={msg.profileIcon}
                            alt={`${msg.user} profile`}
                            roundedCircle
                            className="w-12 h-12 object-cover"
                        />
                        <div>
                            <p className="font-bold text-lg">{msg.user}</p>
                            <p className="text-gray-700">{msg.message}</p>
                        </div>
                        </div>

                        {/* List of responders */}
                        <div className="mt-4 ml-4">
                        <p className="font-bold text-gray-600">Responses:</p>
                        <div className="space-y-4 mt-2">
                            {msg.responders.map((responder, index) => (
                            <div key={index} className="flex items-start space-x-2">
                                <Image
                                src={responder.profileIcon}
                                alt={`${responder.name} profile`}
                                roundedCircle
                                className="w-8 h-8 object-cover"
                                />
                                <div>
                                <p className="font-bold">{responder.name}</p>
                                <p className="text-gray-700">{responder.responseMessage}</p>
                                </div>
                            </div>
                            ))}
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>

            <BottomNavbar></BottomNavbar>
        </div>
    );
};

export default Thread;