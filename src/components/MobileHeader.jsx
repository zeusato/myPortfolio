import { HiBars3 } from 'react-icons/hi2';

export default function MobileHeader({ onToggle }) {
    return (
        <header className="mobile-header">
            <span className="mobile-logo">Q.N</span>
            <button className="hamburger-btn" onClick={onToggle}>
                <HiBars3 />
            </button>
        </header>
    );
}
