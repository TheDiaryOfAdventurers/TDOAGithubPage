import React, {useState, useRef} from 'react'
import {NavLink} from 'react-router-dom'
import {SearchIcon, SunIcon, MoonIcon, UserLoggedInIcon, UserNotLoggedInIcon} from './ThemeIcons.jsx'
import {isUserLoggedIn} from "../utils/userStatus.jsx";
import {logout} from "../api/auth.jsx";
import UserCapsule from './UserCapsule.jsx'
import LoginModal from './LoginModal.jsx'
import RegisterModal from './RegisterModal.jsx';
import './Navbar.css'

const NAV_LINKS = [
    {name: '主页', path: '/'},
    {name: '论坛', path: '/forum'},
    {name: 'Wiki', path: '/wiki'},
];

const Navbar = ({theme, toggleTheme}) => {
    const [isProfileCapsuleOpen, setProfileCapsuleOpen] = useState(false);
    const [modalView, setModalView] = useState('none'); // 'none', 'login', or 'register'
    const [capsulePosition, setCapsulePosition] = useState({top: 0, left: 0});
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

    // --- Modal Control Functions ---
    const openLoginModal = () => {
        setProfileCapsuleOpen(false); // 先关闭胶囊
        setModalView('login');
    };

    const switchToRegister = () => setModalView('register');
    const switchToLogin = () => setModalView('login');
    const closeModal = () => setModalView('none');
    // --- End Modal Control ---

    const handleLogout = () => {
        logout()
        window.location.reload()
    }

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
                        <SearchIcon/>
                    </button>
                    <button ref={userIconRef} onClick={handleUserIconClick}
                            className="nav-action-button nav-link-button">
                        {isUserLoggedIn() ? <UserLoggedInIcon/> : <UserNotLoggedInIcon/>}
                    </button>
                </div>
                <div className="nav-actions-container">
                    <button onClick={toggleTheme} className="nav-action-button">
                        {theme === 'light' ? <MoonIcon/> : <SunIcon/>}
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
                    <UserCapsule onLoginClick={openLoginModal} onLogoutClick={handleLogout}/>
                </div>
            )}

            {/* 根据 modalView 状态条件渲染对应的模态框 */}
            {modalView === 'login' && (
                <LoginModal
                    isOpen={true}
                    onClose={closeModal}
                    onSwitchToRegister={switchToRegister}
                />
            )}
            {modalView === 'register' && (
                <RegisterModal
                    isOpen={true}
                    onClose={closeModal}
                    onSwitchToLogin={switchToLogin}
                />
            )}
        </>
    );
};

export default Navbar;
