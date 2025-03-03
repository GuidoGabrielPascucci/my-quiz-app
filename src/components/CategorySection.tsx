import QuizCard from "./QuizCard";

type CategorySectionProps = {
    title: string;
    quizzes: { title: string; id: string }[];
};

export const CategorySection = ({ title, quizzes }: CategorySectionProps) => {
    return (
        <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <div className="grid grid-cols-3 gap-4">
                {quizzes.map(quiz => (
                    <QuizCard
                        key={quiz.id}
                        title={quiz.title}
                        description={""}
                        icon={undefined}
                        difficulty={""}
                        questionsCount={0}
                        category={""}
                        href={""}
                    />
                ))}
            </div>
        </section>
    );
};
