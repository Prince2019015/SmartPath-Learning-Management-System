import React from 'react';
import { Clock, BookOpen, BarChart } from 'lucide-react';
import { Quiz } from '../types';
import { Link } from 'react-router-dom';

interface QuizCardProps {
  quiz: Quiz;
}

const QuizCard: React.FC<QuizCardProps> = ({ quiz }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="h-40 overflow-hidden">
        <img 
          src={quiz.imageUrl} 
          alt={quiz.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{quiz.title}</h3>
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
            quiz.level === 'Beginner' ? 'bg-green-100 text-green-800' :
            quiz.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {quiz.level}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{quiz.description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{quiz.duration} mins</span>
          </div>
          <div className="flex items-center">
            <BookOpen className="h-4 w-4 mr-1" />
            <span>{quiz.questions.length} questions</span>
          </div>
          <div className="flex items-center">
            <BarChart className="h-4 w-4 mr-1" />
            <span>{quiz.category}</span>
          </div>
        </div>
        <Link 
          to={`/quiz/${quiz.id}`}
          className="block w-full text-center py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Start Quiz
        </Link>
      </div>
    </div>
  );
};

export default QuizCard;