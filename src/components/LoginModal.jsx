import React, {useState} from 'react';
import '../api/auth.jsx'
import './LoginModal.css';
import {login, register} from "../api/auth.jsx";

const LoginModal = ({isOpen, onClose}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    if (!isOpen) {
        return null;
    }

    const handleRegister = async () => {
        await register({username, password})
    };

    const handleLogin = async () => {
        await login({username, password})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin();
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>登录 / 注册</h2>
                    <button className="close-button" onClick={onClose}>&times;</button>
                </div>
                <div className="modal-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">用户名</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">密码</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="form-actions">
                            <button type="submit" className="btn btn-primary">登录</button>
                            <button type="button" className="btn" onClick={handleRegister}>注册</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
