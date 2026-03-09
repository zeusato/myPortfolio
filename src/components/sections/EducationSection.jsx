import ListSection from './ListSection';

export default function EducationSection({ data, onCardClick }) {
    return (
        <ListSection
            title="Education &"
            titleAccent="Certifications"
            items={data.education}
            onCardClick={onCardClick}
        />
    );
}
