import ListSection from './ListSection';

export default function ExperienceSection({ data, onCardClick }) {
    return (
        <ListSection
            title="Kinh nghiệm"
            titleAccent="Làm việc"
            items={data.experience}
            onCardClick={onCardClick}
        />
    );
}
