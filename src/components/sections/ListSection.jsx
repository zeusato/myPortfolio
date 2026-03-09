import { motion } from 'framer-motion';
import {
    HiCodeBracket, HiPaintBrush, HiRocketLaunch,
    HiAcademicCap, HiCloud, HiCommandLine, HiBanknotes, HiCalculator,
} from 'react-icons/hi2';

// Map icon strings from data.js to actual icon components
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

const stagger = {
    animate: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function ListSection({ title, titleAccent, items, onCardClick }) {
    return (
        <motion.section variants={stagger} initial="initial" animate="animate">
            <motion.div className="section-header" variants={fadeUp}>
                <h2 className="section-title">
                    {title} <span className="gradient-text">{titleAccent}</span>
                </h2>
            </motion.div>

            <motion.div className="card-list" variants={stagger}>
                {items.map((item) => (
                    <motion.div
                        key={item.id}
                        className="list-card"
                        variants={fadeUp}
                        onClick={() => onCardClick(item, 'list')}
                        whileHover={{ y: -4 }}
                        whileTap={{ scale: 0.99 }}
                    >
                        <div className="card-icon-wrap">
                            {iconMap[item.icon] || <HiCodeBracket />}
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">{item.title}</h3>
                            <div className="card-meta">
                                <span className="card-company">{item.company}</span>
                                <span className="card-period">{item.period}</span>
                            </div>
                            <p className="card-desc">{item.shortDesc}</p>
                            {item.tags && (
                                <div className="card-tags">
                                    {item.tags.map((t) => <span key={t} className="card-tag">{t}</span>)}
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
}
