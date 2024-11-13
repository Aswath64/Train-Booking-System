import React,{useState} from 'react';
import './Home.css';
import { TextField,Button } from '@mui/material';
import logo from '../raillogo/logo.jpg';
import searchimg from '../raillogo/searchimg.jpg';
import instagram from '../raillogo/instagram.png';
import twitter from '../raillogo/twitter.png';
import facebook from '../raillogo/facebook.png';
import telegram from '../raillogo/telegram.png';
import whatsapp from '../raillogo/whatsapp.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
    const [trains,setTrains] = useState([
        {
            id: 1,
            name: 'Chozhan Express',
            img: 'https://wallpapercave.com/dwp2x/wp4740871.jpg',
            location: 'Coimbatore to Thanjavour',
            timing: '12:30 AM - 07:00 PM',
            book:false
        },
        {
            id: 2,
            name: 'Rajdhani Express',
            img: 'https://tse1.mm.bing.net/th?id=OIP.iQm9eVUUDPPOs6l5MMBE-AHaEK&pid=Api&P=0&h=180',
            location: 'Mumbai to Delhi',
            timing: '10:00 AM - 08:00 PM',
            book:false
        },
        {
            id: 3,
            name: 'Shatabdi Express',
            img: 'https://tse1.mm.bing.net/th?id=OIP.I8CRn8Fu9CMPg0atQ1KWKwHaE8&pid=Api&P=0&h=180',
            location: 'Bangalore to Chennai',
            timing: '06:00 AM - 12:00 PM',
            book:false
        },
        {
            id: 4,
            name: 'Garib Rath',
            img: 'https://tse1.mm.bing.net/th?id=OIP.lqbDQoOfEZewen6u5yqBzwHaFj&pid=Api&P=0&h=180',
            location: 'Kolkata to Patna',
            timing: '08:00 AM - 04:00 PM',
            book:false
        },
        {
            id: 5,
            name: 'Covai SF',
            img: 'https://tse1.mm.bing.net/th?id=OIP.eoAJZx6k3IHcaD4rEncJpgHaEo&pid=Api&P=0&h=180',
            location: 'Hyderabad to Bangalore',
            timing: '07:00 AM - 02:00 PM',
            book:false
        },
        {
            id: 6,
            name: 'Vande Bharat',
            img: 'https://tse1.mm.bing.net/th?id=OIP.GzpIJyBTBp2mO_cN4_RHdgHaEK&pid=Api&P=0&h=180',
            location: 'Hyderabad to Bangalore',
            timing: '07:00 AM - 02:00 PM',
            book:false
        },
    ]);

    const navigate = useNavigate();
    const goToSignup = () => navigate('/Sign');
    const goToLogin = () => navigate('/');
    const goTodetails = () => navigate('/details');


    // Function to handle booking
    const handleBooking = (train) => {
          const bookingData = {
            trainId: train.id,
            trainName: train.name,
            location: train.location,
            timing: train.timing,
            // Add any other details you want to include
          };
        
          axios.post('http://localhost:3000/cart', bookingData)
            .then((response) => {
              console.log('Success:', response.data);
              console.log(`${train.name} booked successfully!`);
              
              // Update the train booking status
              setTrains(prevTrains => 
                prevTrains.map(t =>
                  t.id === train.id ? { ...t, book: true } : t
                )
              );
            })
            .catch((error) => {
              console.error('Error:', error);
              console.log('Booking failed, please try again.');
            });
        };
        
    const handleSubmit=(id)=>{
        setTrains(prevTrains => 
            prevTrains.map(train =>
                train.id === id ? { ...train, book: false } : train
            )
        );
    }

    return (
        <div className="home-container">
            {/* Header */}
            <div className="header1">
                <img src={logo} alt="Railway Logo" className="logo" />
                <ul className="nav">
                    <li>Home</li>
                    <li onClick={goToLogin}>Login</li>
                    <li onClick={goToSignup}>Register</li>
                    <li onClick={goTodetails}>Details</li>
                    <li>About Us</li>
                </ul>
            </div>

            {/* Search Section */}
            <div className="back">
                <div className="search-section">
                 <img src={searchimg} alt="Search" className="search-img" />
                    <input type="text" placeholder="Search for Booking" className="search-input" />
                    <button className="search-btn">Search</button>
                </div>
                <h1 className="welcome-text">RAILWAY TICKET RESERVATION SYSTEM</h1>
            </div>

            {/* Train List */}
            <div className="train-list">
                {trains.map(train => (
                    <div key={train.id} className="train-card">
                        <img src={train.img} alt={train.name} className="train-img" />
                        <h3>{train.name}</h3>
                        <p><strong>Location:</strong> {train.location}</p>
                        <p><strong>Timing:</strong> {train.timing}</p>
                        <button className="book-btn" onClick={() => handleBooking(train)}>Book Now</button>
                        {train.book===true && 
                        <div>
                            <p>Passenger Name</p>
                            <TextField variant='outlined'></TextField>
                            <p>Phone Number</p>
                            <TextField variant='outlined'></TextField>
                            <p>Age</p>
                            <TextField variant='outlined'></TextField>
                            <p>Gender</p>
                            <TextField variant='outlined'></TextField>
                            <br></br>
                            <Button variant='contained' onClick={()=>handleSubmit(train.id)} sx={{}}>SUBMIT</Button>
                        </div>
                        }
                    </div>
                ))}
            </div>

            {/* Contact Us Section */}
            <div className="contact-us">
                <h2>Contact Us</h2>
                <div className="social-icons">
                    <div className="social-icon-item">
                        <img src={instagram} alt="Instagram" className="social-icon" />
                        <h3>Instagram</h3>
                    </div>
                    <div className="social-icon-item">
                        <img src={twitter} alt="Twitter" className="social-icon" />
                        <h3>Twitter</h3>
                    </div>
                    <div className="social-icon-item">
                        <img src={facebook} alt="Facebook" className="social-icon" />
                        <h3>Facebook</h3>
                    </div>
                    <div className="social-icon-item">
                        <img src={telegram} alt="Telegram" className="social-icon" />
                        <h3>Telegram</h3>
                    </div>
                    <div className="social-icon-item">
                        <img src={whatsapp} alt="WhatsApp" className="social-icon" />
                        <h3>WhatsApp</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
