import React, { createContext, useState } from 'react';

// Create a Context for login
export const LoginContext = createContext();

// Create a provider component
export const LoginProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState(''); // For storing the username
    
    // Function to handle login
    const login = (username) => {
        setIsLoggedIn(true);
        setUsername(username); // Store the username after login
    };

    // Function to handle logout
    const logout = () => {
        setIsLoggedIn(false);
        setUsername('');
    };

    return (
        <LoginContext.Provider value={{ isLoggedIn, username, login, logout }}>
            {children}
        </LoginContext.Provider>
    );
};
