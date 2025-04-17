import React from 'react';
import { Link } from 'react-router-dom';
import './SectionToggle.css';

interface SectionToggleProps {
    activeSection: 'platform' | 'websites';
}

const SectionToggle: React.FC<SectionToggleProps> = ({ activeSection }) => {
    return (
        <div className="section-toggle">
            <Link
                to="/"
                className={`toggle-btn ${activeSection === 'platform' ? 'active' : ''}`}
            >
                Онлайн платформа
            </Link>
            <Link
                to="/websites"
                className={`toggle-btn ${activeSection === 'websites' ? 'active' : ''}`}
            >
                Сайты
            </Link>
        </div>
    );
};

export default SectionToggle;
