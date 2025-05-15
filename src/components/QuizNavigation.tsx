import React from 'react';
import { ChevronLeft, ChevronRight, Send } from 'lucide-react';
import Timer from './Timer';

interface QuizNavigationProps {
  currentQuestionIndex: number;
  totalQuestions: number;
  onPrevious: () => void;
  onNext: () => void;
  onSubmit: () => void;
  timeRemaining: number;
  answeredQuestions: number;
}

const QuizNavigation: React.FC<QuizNavigationProps> = ({
  currentQuestionIndex,
  totalQuestions,
  onPrevious,
  onNext,
  onSubmit,
  timeRemaining,
  answeredQuestions,
}) => {
  const isFirstQuestion = currentQuestionIndex === 0;
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;
  const progress = (answeredQuestions / totalQuestions) * 100;

  return (
    <div className="bg-white shadow-md border-t p-4 sticky bottom-0 left-0 right-0">
      <div className="mb-3">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm text-gray-600">
            Question {currentQuestionIndex + 1} of {totalQuestions}
          </span>
          <span className="text-sm text-gray-600">
            {answeredQuestions} of {totalQuestions} answered
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div>
          <Timer timeRemaining={timeRemaining} onTimeUp={onSubmit} />
        </div>
        
        <div className="flex space-x-3">
          <button
            onClick={onPrevious}
            disabled={isFirstQuestion}
            className={`flex items-center px-4 py-2 rounded-md ${
              isFirstQuestion
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Previous
          </button>
          
          {!isLastQuestion ? (
            <button
              onClick={onNext}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Next
              <ChevronRight className="h-4 w-4 ml-1" />
            </button>
          ) : (
            <button
              onClick={onSubmit}
              className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Submit Quiz
              <Send className="h-4 w-4 ml-1" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizNavigation;