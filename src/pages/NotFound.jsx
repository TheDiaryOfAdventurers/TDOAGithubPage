import React from 'react';
import './PageStyles.css'; // 引入共享样式

function NotFoundPage() {
    return (
        // 使用和 HomePage 一样的 class
        <div className="page-content page-content--center">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>别着急，吃块饼🥮吧！</p>
        </div>
    );
}

export default NotFoundPage;
