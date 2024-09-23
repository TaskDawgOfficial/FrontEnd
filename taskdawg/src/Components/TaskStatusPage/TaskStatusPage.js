import React from 'react';
import TopNavbar from '../TopNavBar/TopNavBar';
import BottomNavbar from '../BottomNavBar/BottomNavBar';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import "./TaskStatusPage.css"

const TaskStatusPage = () => {

    const location = useLocation();
    const { title } = location.state || {}; // Destructure the passed state

    const navigate = useNavigate();

    const handleSubmit = () => {
      // Navigate to the "Task Completed" page
      navigate('/taskCompletedPage');
    };

    return (
        <div>
            <TopNavbar></TopNavbar>

            <div className="taskStatusMargins max-w-4xl mx-auto p-6 bg-white rounded-md shadow-md mt-10">
                {/* Task Title */}
                <div className="mb-6">
                    <h1 className="text-4xl font-bold text-gray-800">Task: {title}</h1>
                </div>

                {/* Task Status */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">
                    Status: <span className="text-green-600">In Progress</span>
                    </p>
                </div>

                { /* Button to complete task */ }
                <button
                    onClick={handleSubmit}
                    className="mb-3 px-6 py-3 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600"
                >
                    Complete Task
                </button>

                {/* Map Image (acting as a map) */}
                <div className="mb-6">
                    <img
                    src="https://via.placeholder.com/600x400"
                    alt="Map showing task location"
                    className="w-full h-auto rounded-md object-cover"
                    />
                </div>

                {/* Contact Information */}
                <div className="mt-6 bg-gray-100 p-4 rounded-md">
                    <h2 className="text-xl font-bold mb-2">Contact Information</h2>
                    <p className="text-gray-700">Name: John Doe</p>
                    <p className="text-gray-700">Phone: (123) 456-7890</p>
                    <p className="text-gray-700">Email: johndoe@example.com</p>
                </div>
            </div>

            <BottomNavbar></BottomNavbar>
        </div> 
  );
};

export default TaskStatusPage;