import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi2';

const splitVariants = {
    initial: {},
    exit: (custom) => ({
        [custom.axis]: custom.value,
        transition: { duration: 1.4, ease: [0.83, 0, 0.17, 1] },
    }),
};

const contentVariants = {
    initial: { opacity: 1, scale: 1 },
    exit: {
        opacity: 0,
        scale: 0.92,
        transition: { duration: 0.6, ease: [0.25, 0.8, 0.25, 1] },
    },
};

export default function LandingScreen({ data, onEnter }) {
    return (
        <motion.div className="landing-screen" exit={{ opacity: 0, transition: { delay: 1.2, duration: 0.3 } }}>
            {/* Desktop Split Panels */}
            <motion.div
                className="split-panel split-left"
                variants={splitVariants}
                custom={{ axis: 'x', value: '-100%' }}
                initial="initial"
                exit="exit"
            />
            <motion.div
                className="split-panel split-right"
                variants={splitVariants}
                custom={{ axis: 'x', value: '100%' }}
                initial="initial"
                exit="exit"
            />

            {/* Mobile Split Panels */}
            <motion.div
                className="split-panel split-top"
                variants={splitVariants}
                custom={{ axis: 'y', value: '-100%' }}
                initial="initial"
                exit="exit"
            />
            <motion.div
                className="split-panel split-bottom"
                variants={splitVariants}
                custom={{ axis: 'y', value: '100%' }}
                initial="initial"
                exit="exit"
            />

            {/* Orbiting decorative rings */}
            <div className="orbit-ring" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <div className="orbit-dot" style={{ top: 0, left: '50%' }} />
            </div>
            <div className="orbit-ring" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <div className="orbit-dot" style={{ bottom: 0, right: '10%' }} />
            </div>
            <div className="orbit-ring" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <div className="orbit-dot" style={{ top: '20%', left: 0 }} />
            </div>

            {/* Content */}
            <motion.div className="landing-content" variants={contentVariants} initial="initial" exit="exit">
                <motion.div
                    className="landing-avatar"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                >
                    <img src={data.avatar} alt={data.name} />
                </motion.div>

                <motion.h1
                    className="landing-name"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                >
                    {data.name}
                </motion.h1>

                <motion.h2
                    className="landing-role"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.7 }}
                >
                    {data.role}
                </motion.h2>

                <motion.button
                    className="enter-btn"
                    onClick={onEnter}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.9 }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                >
                    <span>Xem Hồ Sơ</span>
                    <HiArrowRight className="arrow" />
                </motion.button>
            </motion.div>
        </motion.div>
    );
}
