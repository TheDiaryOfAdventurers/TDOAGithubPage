import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { SearchIcon, SunIcon, MoonIcon, UserIcon } from './ThemeIcons.jsx';
import UserCapsule from './UserCapsule.jsx';
import LoginModal from './LoginModal.jsx'; // 1. 引入 LoginModal
import './Navbar.css';

const NAV_LINKS = [
    { name: '主页', path: '/' },
    { name: '论坛', path: '/forum' },
    { name: 'Wiki', path: '/wiki' },
];

const Navbar = ({ theme, toggleTheme }) => {
    const [isProfileCapsuleOpen, setProfileCapsuleOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false); // 2. 添加模态框的状态
    const [capsulePosition, setCapsulePosition] = useState({ top: 0, left: 0 });
    const userIconRef = useRef(null);

    const handleUserIconClick = () => {
        if (userIconRef.current) {
            const rect = userIconRef.current.getBoundingClientRect();
            setCapsulePosition({
                top: rect.bottom + 24, // 调整间距
                left: rect.left + rect.width / 2,
            });
        }
        setProfileCapsuleOpen(!isProfileCapsuleOpen);
    };

    // 3. 创建打开模态框的函数
    const openLoginModal = () => {
        setProfileCapsuleOpen(false); // 先关闭胶囊
        setIsModalOpen(true);      // 再打开模态框
    };

    return (
        <>
            <div className="navbar-capsule">
                <div className="nav-links-container">
                    {NAV_LINKS.map((link) => (
                        <NavLink key={link.name} to={link.path} className="nav-link">
                            {link.name}
                        </NavLink>
                    ))}
                    <button className="nav-action-button nav-link-button">
                        <SearchIcon />
                    </button>
                    <button ref={userIconRef} onClick={handleUserIconClick} className="nav-action-button nav-link-button">
                        <UserIcon />
                    </button>
                </div>
                <div className="nav-actions-container">
                    <button onClick={toggleTheme} className="nav-action-button">
                        {theme === 'light' ? <MoonIcon /> : <SunIcon />}
                    </button>
                </div>
            </div>

            {isProfileCapsuleOpen && (
                <div style={{
                    position: 'fixed',
                    top: `${capsulePosition.top}px`,
                    left: `${capsulePosition.left}px`,
                    transform: 'translateX(-50%)',
                    zIndex: 1100,
                }}>
                    {/* 4. 将打开模态框的函数作为 prop 传递下去 */}
                    <UserCapsule onLoginClick={openLoginModal} />
                </div>
            )}

            {/* 5. 在这里渲染模态框 */}
            <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

export default Navbar;
