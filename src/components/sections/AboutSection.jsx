import { motion } from 'framer-motion';

const stagger = {
    animate: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function AboutSection({ data }) {
    const { about, skills } = data;

    return (
        <motion.section variants={stagger} initial="initial" animate="animate">
            <motion.div className="section-header" variants={fadeUp}>
                <h2 className="section-title">
                    About <span className="gradient-text">Me</span>
                </h2>
            </motion.div>

            <div className="about-content">
                {/* Text block */}
                <motion.div className="about-text-block" variants={fadeUp}>
                    <h3 className="about-headline">{about.headline}</h3>
                    <p className="about-description">{about.description}</p>
                </motion.div>

                {/* Highlight stats */}
                <motion.div className="about-highlights" variants={stagger}>
                    {about.highlights.map((h, i) => (
                        <motion.div key={i} className="highlight-card" variants={fadeUp}>
                            <div className="highlight-value">{h.value}</div>
                            <div className="highlight-label">{h.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Skills */}
                <motion.div variants={fadeUp}>
                    <h3 className="section-header" style={{ marginTop: 8 }}>
                        <span className="section-title" style={{ fontSize: '1.6rem' }}>
                            Core <span className="gradient-text">Skills</span>
                        </span>
                    </h3>
                    <motion.div className="skills-grid" variants={stagger}>
                        {skills.map((skill, i) => (
                            <motion.div key={i} className="skill-item" variants={fadeUp}>
                                <div className="skill-header">
                                    <span className="skill-name">{skill.name}</span>
                                    <span className="skill-percent">{skill.level}%</span>
                                </div>
                                <div className="skill-track">
                                    <motion.div
                                        className="skill-fill"
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: skill.level / 100 }}
                                        transition={{ duration: 1, delay: 0.3 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
}
