import { motion } from 'framer-motion';

const stagger = {
    animate: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function ProjectsSection({ data, onCardClick }) {
    const renderProjectGroup = (title, projects) => {
        if (!projects || projects.length === 0) return null;

        return (
            <div className="project-group">
                {title && <h3 className="project-group-title">{title}</h3>}
                <div className="project-grid">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            className="project-card"
                            variants={fadeUp}
                            onClick={() => onCardClick(project, 'project')}
                            whileHover={{ y: -6 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="project-thumb">
                                <img src={project.thumbnail} alt={project.title} />
                                <div className="project-thumb-overlay" />
                            </div>
                            <div className="project-body">
                                <p className="project-type">{project.type}</p>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.shortDesc}</p>
                                {project.tags && (
                                    <div className="card-tags" style={{ marginTop: 12 }}>
                                        {project.tags.map((t) => <span key={t} className="card-tag">{t}</span>)}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <motion.section variants={stagger} initial="initial" animate="animate" className="projects-section">
            <motion.div className="section-header" variants={fadeUp}>
                <h2 className="section-title">
                    My <span className="gradient-text">Projects</span>
                </h2>
            </motion.div>

            <motion.div variants={stagger}>
                <div className="project-main-category" style={{ marginTop: 0, paddingTop: 0, borderTop: 'none' }}>
                    <h2 className="category-title">Dự án hợp tác</h2>
                    {renderProjectGroup("", data.projects.collaborative)}
                </div>

                <div className="project-main-category">
                    <h2 className="category-title">Dự án cá nhân</h2>
                    {renderProjectGroup("Dự án lớn", data.projects.personalMajor)}
                    {renderProjectGroup("Dự án nhỏ", data.projects.personalMinor)}
                </div>
            </motion.div>
        </motion.section>
    );
}
