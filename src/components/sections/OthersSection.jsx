import { motion } from 'framer-motion';
import { HiLanguage, HiHeart, HiTrophy } from 'react-icons/hi2';

const stagger = {
    animate: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function OthersSection({ data }) {
    const { others } = data;

    return (
        <motion.section variants={stagger} initial="initial" animate="animate">
            <motion.div className="section-header" variants={fadeUp}>
                <h2 className="section-title">
                    Thông tin <span className="gradient-text">Khác</span>
                </h2>
            </motion.div>

            <motion.div className="others-grid" variants={stagger}>
                {/* Achievements */}
                <motion.div className="others-block highlight-block" variants={fadeUp}>
                    <h3 className="others-block-title">
                        <HiTrophy size={20} /> Thành tích khác
                    </h3>
                    <div className="achievement-list">
                        {others.achievements?.map((ach, i) => (
                            <div key={i} className="achievement-item">
                                <span className="achievement-title">{ach.title}</span>
                                <p className="achievement-detail">{ach.detail}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Languages */}
                <motion.div className="others-block" variants={fadeUp}>
                    <h3 className="others-block-title">
                        <HiLanguage size={20} /> Ngoại ngữ
                    </h3>
                    <div className="language-list">
                        {others.languages.map((lang, i) => (
                            <div key={i} className="language-item">
                                <span className="language-name">{lang.name}</span>
                                <span className="language-level">{lang.level}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Interests */}
                <motion.div className="others-block" variants={fadeUp}>
                    <h3 className="others-block-title">
                        <HiHeart size={20} /> Sở thích
                    </h3>
                    <div className="interest-tags">
                        {others.interests.map((item, i) => (
                            <span key={i} className="interest-tag">{item}</span>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}
