import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';
import {
  Award,
  Clock,
  CheckCircle,
  XCircle,
  BarChart,
  ArrowLeft,
  Home,
  BookOpen,
} from 'lucide-react';
import CodeBlock from '../components/CodeBlock';
import {
  analyzeQuizResults,
  recommendCourses,
} from '../utils/recommendationEngine';

const QuizResultsPage: React.FC = () => {
  const { quizId } = useParams<{ quizId: string }>();
  const navigate = useNavigate();
  const { quizzes, quizResults, resetQuiz } = useQuiz();

  useEffect(() => {
    if (!quizId) return;

    const result = quizResults.find((result) => result.quizId === quizId);
    if (!result) {
      navigate(`/quiz/${quizId}`);
    }
  }, [quizId, quizResults, navigate]);

  const quiz = quizzes.find((q) => q.id === quizId);
  const result = quizResults.find((r) => r.quizId === quizId);

  if (!quiz || !result) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-12 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600">
            Quiz result not found. Please try taking the quiz again.
          </p>
          <Link to="/quizzes" className="mt-4 inline-block text-blue-600">
            Back to quizzes
          </Link>
        </div>
      </div>
    );
  }

  const recommendedCourses = recommendCourses(
    quiz.title,
    result.score,
    result.totalQuestions
  );

  const percentage = (result.score / result.totalQuestions) * 100;
  const minutes = Math.floor(result.timeTaken / 60);
  const seconds = result.timeTaken % 60;

  let performanceMessage = '';
  let performanceColor = '';

  if (percentage >= 90) {
    performanceMessage = 'Excellent! You have mastered this subject.';
    performanceColor = 'text-green-600';
  } else if (percentage >= 70) {
    performanceMessage = 'Good job! You have a solid understanding.';
    performanceColor = 'text-blue-600';
  } else if (percentage >= 50) {
    performanceMessage = 'Nice effort! Keep practicing to improve.';
    performanceColor = 'text-yellow-600';
  } else {
    performanceMessage = 'Keep learning! Review the material and try again.';
    performanceColor = 'text-red-600';
  }

  const handleCourseClick = (courseId: string) => {
    const courseFiles: { [key: string]: string } = {
      'js-basics':
        'https://drive.google.com/file/d/1iwkbUIYSTLa-Rxbivlu6hIP36xK1-rmX/view?usp=drivesdk',
      'react-essentials':
        'https://drive.google.com/file/d/1j1Zm0MNxBrKgUKfnX6FEjxydGLjDgEva/view?usp=drivesdk',
      'js-advanced':
        'https://drive.google.com/file/d/1j4_pDyW7DMTeWzulZlgdzofXc0eD_lyo/view?usp=drivesdk',
    };

    const filePath = courseFiles[courseId];
    if (filePath) {
      window.open(filePath, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="bg-blue-600 text-white p-6">
            <h1 className="text-2xl font-bold mb-2">{quiz.title} - Results</h1>
            <p className="opacity-90">{quiz.description}</p>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <Award className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-blue-600">
                  {result.score}/{result.totalQuestions}
                </div>
                <div className="text-sm text-gray-600">Score</div>
              </div>

              <div className="bg-green-50 rounded-lg p-4 text-center">
                <BarChart className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-green-600">
                  {percentage.toFixed(0)}%
                </div>
                <div className="text-sm text-gray-600">Percentage</div>
              </div>

              <div className="bg-purple-50 rounded-lg p-4 text-center">
                <Clock className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-purple-600">
                  {minutes}:{seconds.toString().padStart(2, '0')}
                </div>
                <div className="text-sm text-gray-600">Time Taken</div>
              </div>
            </div>

            <div className="text-center mb-8">
              <h2 className={`text-xl font-bold ${performanceColor}`}>
                {performanceMessage}
              </h2>
            </div>

            {/* Recommended Courses Section */}
            {recommendedCourses.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">
                  Recommended Courses Based on Quiz Topics
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {recommendedCourses.map((course) => (
                    <div
                      key={course.id}
                      className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                      onClick={() => handleCourseClick(course.id)}
                    >
                      <div className="h-40 relative">
                        <img
                          src={course.imageUrl}
                          alt={course.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 right-2 bg-white text-xs font-medium px-2 py-1 rounded-full">
                          {course.level}
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium text-gray-900 mb-1">
                          {course.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">
                          {course.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">
                            {course.category}
                          </span>
                          <a
                            href={course.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                            onClick={(e) => e.stopPropagation()}
                          >
                            View Course
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <h2 className="text-xl font-semibold mb-4">Question Review</h2>
            <div className="space-y-6">
              {quiz.questions.map((question, index) => {
                const answer = result.answers.find(
                  (a) => a.questionId === question.id
                );
                const selectedOption = question.options.find(
                  (o) => o.id === answer?.selectedOptionId
                );
                const correctOption = question.options.find((o) => o.isCorrect);

                return (
                  <div
                    key={question.id}
                    className={`p-4 border rounded-lg ${
                      answer?.isCorrect
                        ? 'border-green-200 bg-green-50'
                        : 'border-red-200 bg-red-50'
                    }`}
                  >
                    <div className="flex items-start">
                      <div className="mr-3 mt-1">
                        {answer?.isCorrect ? (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-600" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">
                          Question {index + 1}: {question.text}
                        </h3>

                        {question.code && <CodeBlock code={question.code} />}

                        <div className="mt-2">
                          <div className="text-sm text-gray-700">
                            <span className="font-medium">Your answer: </span>
                            {selectedOption
                              ? selectedOption.text
                              : 'No answer provided'}
                          </div>

                          {!answer?.isCorrect && (
                            <div className="text-sm text-green-700 mt-1">
                              <span className="font-medium">
                                Correct answer:{' '}
                              </span>
                              {correctOption
                                ? correctOption.text
                                : 'Error: No correct answer defined'}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/quizzes"
                className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                onClick={resetQuiz}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Quizzes
              </Link>

              <Link
                to="/"
                className="inline-flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
                onClick={resetQuiz}
              >
                <Home className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizResultsPage;
