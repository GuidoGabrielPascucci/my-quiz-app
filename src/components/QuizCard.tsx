import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

type QuizCardProps = {
  title: string,
  description: string,
  icon: LucideIcon,
  difficulty: string,
  questionsCount: number,
  category: string,
  href: string
}

const QuizCard: React.FC<QuizCardProps> = ({ title, description, icon: Icon, difficulty, questionsCount, category, href }) => (
  <div className="h-full rounded-lg border border-gray-200 bg-white p-6 hover:shadow-lg transition-shadow">
    <Link to={href}>
      <div className="flex items-center justify-between">
        <Icon className="h-8 w-8 text-blue-600" />
        <span className={`
            px-2 py-1 rounded-full text-xs font-semibold
            ${difficulty === 'easy' ? 'bg-green-100 text-green-800' :
            difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'}
          `}>
          {difficulty}
        </span>
      </div>

      <div className="mt-4">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600 text-sm">{description}</p>
      </div>

      <div className="mt-4 flex justify-between text-sm text-gray-500">
        <span>{category}</span>
        <span>{questionsCount} preguntas</span>
      </div>
    </Link>
  </div>
);

export default QuizCard;