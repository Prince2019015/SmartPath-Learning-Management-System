// import React, { useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { useQuiz } from '../context/QuizContext';
// import { useAuth } from '../context/AuthContext';
// import CodeBlock from '../components/CodeBlock';
// import QuizNavigation from '../components/QuizNavigation';

// const QuizPage: React.FC = () => {
//   const { quizId } = useParams<{ quizId: string }>();
//   const navigate = useNavigate();
//   const { user } = useAuth();
//   const {
//     quizzes,
//     startQuiz,
//     activeQuiz,
//     activeQuestion,
//     userAnswers,
//     answerQuestion,
//     nextQuestion,
//     previousQuestion,
//     submitQuiz,
//     isQuizActive,
//     timeRemaining
//   } = useQuiz();

//   useEffect(() => {
//     if (!quizId) return;

//     if (!isQuizActive) {
//       startQuiz(quizId);
//     }
//   }, [quizId, startQuiz, isQuizActive]);

//   useEffect(() => {
//     if (!user) {
//       navigate('/login', { state: { from: `/quiz/${quizId}` } });
//     }
//   }, [user, navigate, quizId]);

//   if (!activeQuiz) {
//     return (
//       <div className="min-h-screen bg-gray-50 pt-24 pb-12 flex items-center justify-center">
//         <div className="animate-pulse text-center">
//           <p className="text-xl text-gray-600">Loading quiz...</p>
//         </div>
//       </div>
//     );
//   }

//   const question = activeQuiz.questions[activeQuestion];
//   const selectedOptionId = userAnswers.get(question.id) || '';
//   const answeredQuestionsCount = userAnswers.size;

//   const handleOptionSelect = (optionId: string) => {
//     answerQuestion(question.id, optionId);
//   };

//   const handleSubmit = () => {
//     submitQuiz();
//     navigate(`/quiz/${quizId}/results`);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 pt-20 pb-12">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="bg-white rounded-lg shadow-md p-6 mb-16">
//           <h1 className="text-2xl font-bold text-gray-900 mb-2">{activeQuiz.title}</h1>
//           <p className="text-gray-600 mb-6">{activeQuiz.description}</p>

//           <div className="py-4">
//             <h2 className="text-xl font-semibold mb-4">
//               Question {activeQuestion + 1}: {question.text}
//             </h2>

//             {question.code && (
//               <CodeBlock code={question.code} />
//             )}

//             <div className="mt-6 space-y-3">
//               {question.options.map((option) => (
//                 <div
//                   key={option.id}
//                   onClick={() => handleOptionSelect(option.id)}
//                   className={`p-4 border rounded-md cursor-pointer transition-colors ${
//                     selectedOptionId === option.id
//                       ? 'border-blue-600 bg-blue-50'
//                       : 'border-gray-300 hover:border-blue-300 hover:bg-blue-50'
//                   }`}
//                 >
//                   <div className="flex items-center">
//                     <div className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${
//                       selectedOptionId === option.id
//                         ? 'border-blue-600 bg-blue-600'
//                         : 'border-gray-400'
//                     }`}>
//                       {selectedOptionId === option.id && (
//                         <div className="w-2 h-2 rounded-full bg-white"></div>
//                       )}
//                     </div>
//                     <span className={selectedOptionId === option.id ? 'font-medium' : ''}>
//                       {option.text}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       <QuizNavigation
//         currentQuestionIndex={activeQuestion}
//         totalQuestions={activeQuiz.questions.length}
//         onPrevious={previousQuestion}
//         onNext={nextQuestion}
//         onSubmit={handleSubmit}
//         timeRemaining={timeRemaining}
//         answeredQuestions={answeredQuestionsCount}
//       />
//     </div>
//   );
// };

// export default QuizPage;

import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';
import { useAuth } from '../context/AuthContext';
import CodeBlock from '../components/CodeBlock';
import QuizNavigation from '../components/QuizNavigation';

const QuizPage: React.FC = () => {
  const { quizId } = useParams<{ quizId: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const {
    startQuiz,
    activeQuiz,
    activeQuestion,
    userAnswers,
    answerQuestion,
    nextQuestion,
    previousQuestion,
    submitQuiz,
    isQuizActive,
    timeRemaining,
  } = useQuiz();

  useEffect(() => {
    if (!quizId) return;

    if (!isQuizActive) {
      startQuiz(quizId);
    }
  }, [quizId, startQuiz, isQuizActive]);

  useEffect(() => {
    if (!user) {
      navigate('/login', { state: { from: `/quiz/${quizId}` } });
    }
  }, [user, navigate, quizId]);

  if (!activeQuiz) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-12 flex items-center justify-center">
        <div className="animate-pulse text-center">
          <p className="text-xl text-gray-600">Loading quiz...</p>
        </div>
      </div>
    );
  }

  const question = activeQuiz.questions[activeQuestion];
  const selectedOptionId = userAnswers.get(question.id) || '';
  const answeredQuestionsCount = userAnswers.size;

  const handleOptionSelect = (optionId: string) => {
    answerQuestion(question.id, optionId);
  };

  const handleSubmit = () => {
    submitQuiz();
    navigate(`/quiz/${quizId}/results`);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-16">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {activeQuiz.title}
          </h1>
          <p className="text-gray-600 mb-6">{activeQuiz.description}</p>

          <div className="py-4">
            <h2 className="text-xl font-semibold mb-4">
              Question {activeQuestion + 1}: {question.text}
            </h2>

            {question.code && <CodeBlock code={question.code} />}

            <div className="mt-6 space-y-3">
              {question.options.map((option) => (
                <div
                  key={option.id}
                  onClick={() => handleOptionSelect(option.id)}
                  className={`p-4 border rounded-md cursor-pointer transition-colors ${
                    selectedOptionId === option.id
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-300 hover:border-blue-300 hover:bg-blue-50'
                  }`}
                >
                  <div className="flex items-center">
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${
                        selectedOptionId === option.id
                          ? 'border-blue-600 bg-blue-600'
                          : 'border-gray-400'
                      }`}
                    >
                      {selectedOptionId === option.id && (
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      )}
                    </div>
                    <span
                      className={
                        selectedOptionId === option.id ? 'font-medium' : ''
                      }
                    >
                      {option.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <QuizNavigation
        currentQuestionIndex={activeQuestion}
        totalQuestions={activeQuiz.questions.length}
        onPrevious={previousQuestion}
        onNext={nextQuestion}
        onSubmit={handleSubmit}
        timeRemaining={timeRemaining}
        answeredQuestions={answeredQuestionsCount}
      />
    </div>
  );
};

export default QuizPage;
