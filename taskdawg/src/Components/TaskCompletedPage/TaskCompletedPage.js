import React from 'react';
import { FaRegSmileBeam } from 'react-icons/fa'; // Importing a celebration-like icon
import TopNavbar from '../TopNavBar/TopNavBar';
import BottomNavbar from '../BottomNavBar/BottomNavBar';

import "./TaskCompletedPage.css"

const TaskCompletedPage = () => {
  return (
    <div>
        <TopNavbar></TopNavbar>

        <div className="taskCompletedMargins max-w-3xl mx-auto mt-20 p-6 bg-white rounded-md shadow-md text-center">
            {/* Task Completed text */}
            <h1 className="text-4xl font-bold text-green-600 mb-6">Task Completed!</h1>
            <p className="text-lg text-gray-700 mb-10">
                Thank you for completing the task. Your contribution is greatly appreciated!
            </p>

            {/* Celebration icon at the bottom */}
            <div className="flex justify-center mt-20">
                <FaRegSmileBeam className="text-yellow-500 text-9xl" />
            </div>
        </div>

        <BottomNavbar></BottomNavbar>
    </div>
  );
};

export default TaskCompletedPage;