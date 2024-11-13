import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Details.css';
import logo from './raillogo/logo.jpg';
import DeleteIcon from '@mui/icons-material/Delete'; // Import Delete icon
import { useNavigate } from 'react-router-dom';

const Details = () => {
    const [bookings, setBookings] = useState([]);
    const navigate = useNavigate();
    const goToSignup = () => navigate('/Sign');
    const goToHome = () => navigate('/Home');
    const goToLogin = () => navigate('/');
    useEffect(() => {
        // Fetch bookings data from JSON server
        const fetchBookings = async () => {
            try {
                const response = await axios.get('http://localhost:3000/cart');
                setBookings(response.data);  // Storing the data
            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
        };

        fetchBookings();
    }, []);

    // Function to handle deletion of booking
    const handleDelete = async (id) => {
        try {
            // Sending DELETE request to remove the booking from the server
            await axios.delete(`http://localhost:3000/cart/${id}`);
            // Updating the bookings list after deletion
            setBookings(bookings.filter(booking => booking.id !== id));
            alert('Booking cancelled successfully!');
        } catch (error) {
            console.error('Error deleting booking:', error);
            alert('Failed to cancel booking, please try again.');
        }
    };

    return (
        <div>
            <ul className='header'>
                <img src={logo} style={{width:"30px"}} alt='' className='ll'></img>
                 <li onClick={goToHome}>Home</li>
                <li onClick={goToLogin}>Login</li>
                <li onClick={goToSignup}>Register</li>
                <li>About Us</li>
            </ul>
            <div style={{height:"100px"}}>
            </div>
            <div className="details-container">
                <h1>Booking Details</h1>
                {bookings.length > 0 ? (
                    <ul>
                        {bookings.map(booking => (
                            <li key={booking.id}>
                                <h3>{booking.trainName}</h3>
                                <p><strong>Location:</strong> {booking.location}</p>
                                <p><strong>Timing:</strong> {booking.timing}</p>
                                <button 
                                    className="delete-btn" 
                                    onClick={() => handleDelete(booking.id)}
                                    >
                                <DeleteIcon /> Cancel ticket
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No bookings found.</p>
                )}
            </div>
        </div>
    );
};
export default Details;
