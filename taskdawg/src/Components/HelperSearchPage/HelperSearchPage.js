import React, { useState } from 'react';
import BottomNavbar from '../BottomNavBar/BottomNavBar';
import TopNavbar from '../TopNavBar/TopNavBar';
import { Modal, Button, Form } from 'react-bootstrap';
import { FiFilter } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import "./HelperSearchPage.css"

function HelperSearchPage() {

    const [showModal, setShowModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({
        filter1: false,
        filter2: false,
        filter3: false,
    });

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleFilterChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.checked });
    };

    const handleModalToggle = () => {
        setShowModal(!showModal);
    };

    const handleFilterSubmit = () => {
        console.log('Filters applied:', filters);
        setShowModal(false);
    };

    // To navigate to the thread
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

            <div className="helperSearchBar flex justify-between items-center bg-gray-100 p-4 rounded-md">
                {/* Search Bar */}
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search..."
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Filter Icon */}
                <button
                    onClick={handleModalToggle}
                    className="ml-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center"
                >
                    <FiFilter className="w-6 h-6" />
                </button>

                {/* Filter Modal */}
                <Modal show={showModal} onHide={handleModalToggle}>
                    <Modal.Header closeButton>
                    <Modal.Title>Filter Options</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form>
                        <Form.Group controlId="filter1">
                        <Form.Check
                            type="checkbox"
                            name="filter1"
                            label="Filter Option 1"
                            checked={filters.filter1}
                            onChange={handleFilterChange}
                        />
                        </Form.Group>

                        <Form.Group controlId="filter2">
                        <Form.Check
                            type="checkbox"
                            name="filter2"
                            label="Filter Option 2"
                            checked={filters.filter2}
                            onChange={handleFilterChange}
                        />
                        </Form.Group>

                        <Form.Group controlId="filter3">
                        <Form.Check
                            type="checkbox"
                            name="filter3"
                            label="Filter Option 3"
                            checked={filters.filter3}
                            onChange={handleFilterChange}
                        />
                        </Form.Group>
                    </Form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalToggle}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleFilterSubmit}>
                        Apply Filters
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>

            {/* Search results */}
            <div className="content-margin-search w-full content-margin">
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

export default HelperSearchPage;
