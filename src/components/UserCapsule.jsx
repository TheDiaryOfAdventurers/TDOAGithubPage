import React from 'react'
import './widgets/Capsule.jsx'
import './UserCapsule.css'
import Capsule from "./widgets/Capsule.jsx";

// 1. 让组件接收 onLoginClick 属性
const UserCapsule = ({ onLoginClick }) => {
    const isUserLoggedIn = () => {
        const token = sessionStorage.getItem('userToken')
        return token !== null;
    }

    const unloggedContent = (
        <Capsule className="user-profile-layout">
            <div>您还未登录哦！</div>
            {/* 2. 将 onLoginClick 绑定到按钮的 onClick 事件上 */}
            <button onClick={onLoginClick}>登录/注册</button>
        </Capsule>
    )

    const loggedContent = (
        <Capsule className="user-profile-layout">
            <div>登录好了</div>
        </Capsule>
    )

    return (
        <>
            {isUserLoggedIn() ? loggedContent : unloggedContent}
        </>
    )
}

export default UserCapsule
