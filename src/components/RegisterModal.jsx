import React, { useState } from 'react';
import './RegisterModal.css';
import {register} from "../api/auth.jsx";

const RegisterModal = ({ isOpen, onClose, onSwitchToLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    if (!isOpen) {
        return null;
    }

    const handleRegister = () => {
        if (password !== confirmPassword) {
            alert('两次密码不匹配！');
            return;
        }
        register(username, password)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleRegister();
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <div className="modal-title-group">
                        <h2>注册</h2>
                        <div className="modal-tip-text">
                            已有账户？去<span className="modal-switch-link" onClick={onSwitchToLogin}>登录</span>
                            <br/>
                            <strong>用户名</strong>仅允许包含英文字母、数字、下划线、长度 2-32 位
                            <br/>
                            <strong>密码</strong>必须包含包含大小写英文字母、数字、
                            <br/>
                            仅允许下划线，长度 6-20 位
                        </div>
                    </div>
                    <button className="close-button" onClick={onClose}>&times;</button>
                </div>
                <div className="modal-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="reg-username">用户名</label>
                            <input 
                                type="text" 
                                id="reg-username" 
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)} 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="reg-password">密码</label>
                            <input 
                                type="password" 
                                id="reg-password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="reg-confirm-password">确认密码</label>
                            <input 
                                type="password" 
                                id="reg-confirm-password" 
                                value={confirmPassword} 
                                onChange={(e) => setConfirmPassword(e.target.value)} 
                            />
                        </div>
                        <div className="form-actions">
                            <button type="submit" className="btn btn-primary">注册</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterModal;
