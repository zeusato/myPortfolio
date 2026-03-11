import ListSection from './ListSection';

export default function EducationSection({ data, onCardClick }) {
    return (
        <ListSection
            title="Học vấn &"
            titleAccent="Chứng chỉ"
            items={data.education}
            onCardClick={onCardClick}
        />
    );
}
