import { motion } from 'framer-motion';
import AboutSection from './sections/AboutSection';
import ExperienceSection from './sections/ExperienceSection';
import EducationSection from './sections/EducationSection';
import ProjectsSection from './sections/ProjectsSection';
import OthersSection from './sections/OthersSection';

const sectionComponents = {
    about: AboutSection,
    experience: ExperienceSection,
    education: EducationSection,
    projects: ProjectsSection,
    others: OthersSection,
};

const pageVariants = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, y: -16, transition: { duration: 0.3 } },
};

export default function MainContent({ data, activeSection, onCardClick }) {
    const SectionComponent = sectionComponents[activeSection];

    return (
        <main className="main-content">
            <motion.div
                className="content-area"
                key={activeSection}
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                {SectionComponent && (
                    <SectionComponent data={data} onCardClick={onCardClick} />
                )}
            </motion.div>
        </main>
    );
}
