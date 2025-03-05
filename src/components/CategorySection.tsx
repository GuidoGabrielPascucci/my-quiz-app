import Quiz from "../types/quizz.type";
import QuizCard from "./QuizCard";
import { Brain } from "lucide-react";

type CategorySectionProps = {
    title: string;
    quizzes: Quiz[];
};

export const CategorySection = ({ title, quizzes }: CategorySectionProps) => {
    return (
        <section className="border p-4 my-6">
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <div className="">

                {quizzes.map((quiz: Quiz) => (
                    <QuizCard
                        key={quiz.id}
                        title={quiz.title}
                        description={""}
                        icon={Brain}
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
