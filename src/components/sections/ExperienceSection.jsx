import ListSection from './ListSection';

export default function ExperienceSection({ data, onCardClick }) {
    return (
        <ListSection
            title="Work"
            titleAccent="Experience"
            items={data.experience}
            onCardClick={onCardClick}
        />
    );
}
