import { motion, AnimatePresence } from 'framer-motion';
import { HiXMark, HiArrowTopRightOnSquare } from 'react-icons/hi2';
import {
    HiCodeBracket, HiPaintBrush, HiRocketLaunch,
    HiAcademicCap, HiCloud, HiCommandLine, HiBanknotes, HiCalculator,
} from 'react-icons/hi2';

const iconMap = {
    HiCodeBracket: <HiCodeBracket />,
    HiPaintBrush: <HiPaintBrush />,
    HiRocketLaunch: <HiRocketLaunch />,
    HiAcademicCap: <HiAcademicCap />,
    HiCloud: <HiCloud />,
    HiCommandLine: <HiCommandLine />,
    HiBanknotes: <HiBanknotes />,
    HiCalculator: <HiCalculator />,
};

const overlayVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.25 } },
};

const containerVariants = {
    initial: { opacity: 0, y: 40, scale: 0.96 },
    animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, y: 20, scale: 0.97, transition: { duration: 0.3 } },
};

export default function Modal({ data, onClose }) {
    const isProject = data._type === 'project';

    const renderContent = (text) => {
        if (!text) return null;

        const lines = text.split('\n');
        const result = [];
        let currentList = [];

        const flushList = () => {
            if (currentList.length > 0) {
                result.push(
                    <ul key={`list-${result.length}`} style={{ marginLeft: '1.2rem', marginBottom: '20px', listStyleType: 'disc' }}>
                        {currentList}
                    </ul>
                );
                currentList = [];
            }
        };

        lines.forEach((line, i) => {
            const trimmed = line.trim();
            if (!trimmed) {
                flushList();
                return;
            }

            // Parse bold: **text**
            const parts = line.split(/(\*\*.*?\*\*)/g);
            const formattedLine = parts.map((part, index) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={index} style={{ color: 'var(--text-primary)', fontWeight: '700' }}>{part.slice(2, -2)}</strong>;
                }
                return part;
            });

            // Check for bullet points
            if (trimmed.startsWith('- ')) {
                const bulletContent = [];
                let foundMarker = false;
                formattedLine.forEach(p => {
                    if (!foundMarker && typeof p === 'string' && p.includes('- ')) {
                        bulletContent.push(p.replace('- ', ''));
                        foundMarker = true;
                    } else {
                        bulletContent.push(p);
                    }
                });
                currentList.push(<li key={i} style={{ marginBottom: '10px', color: 'var(--text-secondary)' }}>{bulletContent}</li>);
            } else {
                flushList();
                if (trimmed.endsWith(':')) {
                    result.push(<h4 key={i} style={{ color: 'var(--text-primary)', marginTop: '24px', marginBottom: '12px', fontSize: '1.1rem', fontWeight: '700' }}>{formattedLine}</h4>);
                } else {
                    result.push(<p key={i} style={{ marginBottom: '16px', color: 'var(--text-secondary)' }}>{formattedLine}</p>);
                }
            }
        });

        flushList();
        return result;
    };

    return (
        <motion.div
            className="modal-overlay"
            variants={overlayVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <div className="modal-backdrop" onClick={onClose} />

            <motion.div
                className="modal-container"
                variants={containerVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
            >
                <button className="modal-close" onClick={onClose}>
                    <HiXMark />
                </button>

                {/* Cover image for projects */}
                {isProject && data.thumbnail && (
                    <img className="modal-cover" src={data.thumbnail} alt={data.title} />
                )}

                <div className="modal-inner">
                    {isProject ? (
                        <>
                            <p className="modal-type">{data.type}</p>
                            <h2 className="modal-title">{data.title}</h2>
                            {data.tags && (
                                <div className="modal-tags">
                                    {data.tags.map((t) => <span key={t} className="modal-tag">{t}</span>)}
                                </div>
                            )}
                            <div className="modal-detail">{renderContent(data.detail)}</div>
                            {data.link && data.link !== '#' && (
                                <a href={data.link} target="_blank" rel="noreferrer" className="modal-link-btn">
                                    Xem Dự án <HiArrowTopRightOnSquare />
                                </a>
                            )}
                        </>
                    ) : (
                        <>
                            <div className="modal-icon-header">
                                <div className="card-icon-wrap" style={{ overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    {data.logo ? (
                                        <img src={data.logo} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '4px' }} />
                                    ) : (
                                        <div style={{ color: 'var(--accent-primary)', fontSize: '1.4rem', display: 'flex' }}>
                                            {iconMap[data.icon] || <HiCodeBracket />}
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <p className="modal-company">{data.company}</p>
                                </div>
                            </div>
                            <h2 className="modal-title">{data.title}</h2>
                            <span className="modal-period">{data.period}</span>
                            {data.tags && (
                                <div className="modal-tags" style={{ marginTop: 16 }}>
                                    {data.tags.map((t) => <span key={t} className="modal-tag">{t}</span>)}
                                </div>
                            )}
                            <div className="modal-detail" style={{ marginTop: '20px' }}>{renderContent(data.detail)}</div>
                        </>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
}
