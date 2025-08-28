import React from 'react'
import Capsule from "./widgets/Capsule.jsx";
import {isUserLoggedIn} from "../utils/userStatus.jsx";
import './UserCapsule.css'

// 1. 让组件接收 onLoginClick 属性
const UserCapsule = ({onLoginClick, onLogoutClick}) => {

    const unloggedContent = (
        <Capsule className="user-profile-layout">
            <div>您还未登录哦！</div>
            {/* 2. 将 onLoginClick 绑定到按钮的 onClick 事件上 */}
            <button onClick={onLoginClick}>登录/注册</button>
        </Capsule>
    )

    const loggedContent = (
        <Capsule className="user-profile-layout">
            <div>已登录，账户：
                <br/>
                <strong>
                    {sessionStorage.getItem('username') ? sessionStorage.getItem('username') : "怎么获取不到啊..."}
                </strong>
            </div>
            <button onClick={onLogoutClick}>退出登录</button>
        </Capsule>
    )

    return (
        <>
            {isUserLoggedIn() ? loggedContent : unloggedContent}
        </>
    )
}

export default UserCapsule
