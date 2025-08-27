import React from 'react';
import './WikiEntryCard.css';

const WikiEntryCard = ({entry}) => {
    const handleClick = () => {
        // Later, this will navigate to the full wiki page for the entry
        alert(`你点击了：${entry.title}`);
    };

    return (
        <div className="wiki-entry-card" onClick={handleClick}>
            <h3>{entry.title}</h3>
            <p>{entry.description}</p>
        </div>
    );
};

export default WikiEntryCard;
