import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useQuiz } from '../context/QuizContext';
import { Award, BarChart2, Clock, User, BookOpen, Star } from 'lucide-react';

const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  const { quizzes, quizResults } = useQuiz();

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-12 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600">Please log in to view your dashboard.</p>
          <Link to="/login" className="mt-4 inline-block text-blue-600">
            Log in
          </Link>
        </div>
      </div>
    );
  }

  // Calculate stats
  const totalQuizzesTaken = quizResults.length;
  const totalQuestionsAnswered = quizResults.reduce((sum, result) => sum + result.totalQuestions, 0);
  const totalCorrectAnswers = quizResults.reduce((sum, result) => sum + result.score, 0);
  const averageScore = totalQuizzesTaken > 0 
    ? Math.round((totalCorrectAnswers / totalQuestionsAnswered) * 100) 
    : 0;

  // Get recent quiz results
  const recentResults = [...quizResults]
    .sort((a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime())
    .slice(0, 5);

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
            <div className="flex items-center">
              <div className="bg-white/20 rounded-full p-3 mr-4">
                <User className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Welcome back, {user.name}!</h1>
                <p className="opacity-90">Track your progress and continue learning</p>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-blue-50 rounded-lg p-4 flex items-center">
                <div className="bg-blue-100 rounded-full p-3 mr-4">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-800">{totalQuizzesTaken}</div>
                  <div className="text-sm text-gray-600">Quizzes Taken</div>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-4 flex items-center">
                <div className="bg-green-100 rounded-full p-3 mr-4">
                  <BarChart2 className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-800">{averageScore}%</div>
                  <div className="text-sm text-gray-600">Average Score</div>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-4 flex items-center">
                <div className="bg-purple-100 rounded-full p-3 mr-4">
                  <BookOpen className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-800">{totalQuestionsAnswered}</div>
                  <div className="text-sm text-gray-600">Questions Answered</div>
                </div>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-4 flex items-center">
                <div className="bg-orange-100 rounded-full p-3 mr-4">
                  <Star className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-800">{totalCorrectAnswers}</div>
                  <div className="text-sm text-gray-600">Correct Answers</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Quizzes and Recommended Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Quiz Results */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b">
                <h2 className="text-xl font-semibold text-gray-900">Recent Quiz Results</h2>
              </div>
              <div className="p-6">
                {recentResults.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead>
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Quiz
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Score
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Date
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {recentResults.map((result) => {
                          const quiz = quizzes.find(q => q.id === result.quizId);
                          const percentage = Math.round((result.score / result.totalQuestions) * 100);
                          
                          return (
                            <tr key={`${result.quizId}-${result.completedAt}`}>
                              <td className="px-4 py-4 whitespace-nowrap">
                                <div className="font-medium text-gray-900">
                                  {quiz?.title || 'Unknown Quiz'}
                                </div>
                                <div className="text-sm text-gray-500">
                                  {quiz?.category || 'Unknown Category'}
                                </div>
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap">
                                <div className={`font-medium ${
                                  percentage >= 70 ? 'text-green-600' : 
                                  percentage >= 50 ? 'text-yellow-600' : 
                                  'text-red-600'
                                }`}>
                                  {result.score}/{result.totalQuestions} ({percentage}%)
                                </div>
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                                {new Date(result.completedAt).toLocaleDateString()}
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap text-sm">
                                <Link
                                  to={`/quiz/${result.quizId}/results`}
                                  className="text-blue-600 hover:text-blue-800"
                                >
                                  View Details
                                </Link>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="text-center py-6">
                    <p className="text-gray-500">
                      You haven't taken any quizzes yet.
                    </p>
                    <Link
                      to="/quizzes"
                      className="mt-2 inline-block text-blue-600 hover:text-blue-800"
                    >
                      Browse Quizzes
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Recommended Quizzes */}
          <div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b">
                <h2 className="text-xl font-semibold text-gray-900">Recommended Quizzes</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {quizzes.slice(0, 3).map((quiz) => (
                    <div key={quiz.id} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                      <div className="h-24 bg-gray-200 relative">
                        <img 
                          src={quiz.imageUrl}
                          alt={quiz.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 right-2 bg-white text-xs font-medium px-2 py-1 rounded-full">
                          {quiz.level}
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium text-gray-900 mb-1">{quiz.title}</h3>
                        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            <span>{quiz.duration} mins</span>
                          </div>
                          <div>
                            {quiz.questions.length} questions
                          </div>
                        </div>
                        <Link 
                          to={`/quiz/${quiz.id}`}
                          className="block w-full text-center py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors"
                        >
                          Start Quiz
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 text-center">
                  <Link 
                    to="/quizzes"
                    className="text-blue-600 hover:text-blue-800 text-sm"
                  >
                    View All Quizzes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;