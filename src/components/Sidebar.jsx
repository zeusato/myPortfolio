import { FaLinkedinIn, FaGithub, FaBehance, FaFacebook } from 'react-icons/fa';
import { SiZalo } from 'react-icons/si';
import {
    HiEnvelope, HiPhone, HiMapPin, HiUser,
    HiBriefcase, HiAcademicCap, HiSquares2X2, HiSparkles,
} from 'react-icons/hi2';

const iconMap = {
    FaLinkedinIn: <FaLinkedinIn />,
    FaGithub: <FaGithub />,
    FaBehance: <FaBehance />,
    FaFacebook: <FaFacebook />,
    FaZalo: <SiZalo />,
};

const navItems = [
    { id: 'about', label: 'About Me', icon: <HiUser /> },
    { id: 'experience', label: 'Experience', icon: <HiBriefcase /> },
    { id: 'education', label: 'Education', icon: <HiAcademicCap /> },
    { id: 'projects', label: 'Projects', icon: <HiSquares2X2 /> },
    { id: 'others', label: 'Others', icon: <HiSparkles /> },
];

export default function Sidebar({ data, activeSection, onNavClick, isOpen }) {
    return (
        <aside className={`sidebar${isOpen ? ' open' : ''}`}>
            {/* Profile section */}
            <div className="sidebar-profile">
                <div className="sidebar-avatar">
                    <img src={data.avatar} alt={data.name} />
                    <div className="status-dot" />
                </div>
                <h2 className="sidebar-name">{data.name}</h2>
                <p className="sidebar-role">{data.role}</p>

                <div className="sidebar-socials">
                    {data.socials.map((s) => (
                        <a key={s.name} href={s.url} target="_blank" rel="noreferrer" className="social-link" title={s.name}>
                            {iconMap[s.icon] || s.name}
                        </a>
                    ))}
                </div>

                <div className="sidebar-info">
                    <div className="sidebar-info-item"><HiEnvelope size={14} /><span>{data.email}</span></div>
                    <div className="sidebar-info-item"><HiPhone size={14} /><span>{data.phone}</span></div>
                    <div className="sidebar-info-item"><HiMapPin size={14} /><span>{data.location}</span></div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="sidebar-nav">
                {navItems.map((item) => (
                    <div key={item.id} className="nav-item">
                        <button
                            className={`nav-link${activeSection === item.id ? ' active' : ''}`}
                            onClick={() => onNavClick(item.id)}
                        >
                            <span className="nav-icon">{item.icon}</span>
                            <span className="nav-text">{item.label}</span>
                        </button>
                    </div>
                ))}
            </nav>

            <div className="sidebar-footer">
                <p>&copy; {new Date().getFullYear()} {data.name}</p>
            </div>
        </aside>
    );
}
