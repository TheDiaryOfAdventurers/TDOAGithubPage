import React from 'react';
import './Capsule.css';

const Capsule = ({ children, className = '', maxWidth }) => {
    // Create a style object. If maxWidth is provided, add it to the object.
    const style = {};
    if (maxWidth) {
        style.maxWidth = maxWidth;
    }

    return (
        <div className={`capsule ${className}`} style={style}>
            {children}
        </div>
    );
};

export default Capsule;
