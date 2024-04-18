import React, { useState } from 'react';
import Modal from 'react-modal';

const LoginPrompt = ({ isOpen, onClose, onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin (username, password);
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onClose}>
            <h2>Please Log In</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                    <br />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <button type="submit">Log In</button>
            </form>
        </Modal>
    )
};

export default LoginPrompt;