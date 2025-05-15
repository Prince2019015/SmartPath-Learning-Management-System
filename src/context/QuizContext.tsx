// import React, { createContext, useContext, useState } from 'react';
// import { Quiz, Question, QuizResult } from '../types';
// import { mockQuizzes, getRandomQuestions } from '../data/mockData';

// interface QuizContextType {
//   quizzes: Quiz[];
//   activeQuiz: Quiz | null;
//   activeQuestion: number;
//   userAnswers: Map<string, string>;
//   quizResults: QuizResult[];
//   startQuiz: (quizId: string) => void;
//   answerQuestion: (questionId: string, optionId: string) => void;
//   nextQuestion: () => void;
//   previousQuestion: () => void;
//   submitQuiz: () => void;
//   resetQuiz: () => void;
//   timeRemaining: number;
//   isQuizActive: boolean;
// }

// const QuizContext = createContext<QuizContextType | undefined>(undefined);

// export const useQuiz = () => {
//   const context = useContext(QuizContext);
//   if (!context) {
//     throw new Error('useQuiz must be used within a QuizProvider');
//   }
//   return context;
// };

// export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const [quizzes] = useState<Quiz[]>(mockQuizzes);
//   const [activeQuiz, setActiveQuiz] = useState<Quiz | null>(null);
//   const [activeQuestion, setActiveQuestion] = useState<number>(0);
//   const [userAnswers, setUserAnswers] = useState<Map<string, string>>(
//     new Map()
//   );
//   const [quizResults, setQuizResults] = useState<QuizResult[]>([]);
//   const [timeRemaining, setTimeRemaining] = useState<number>(0);
//   const [isQuizActive, setIsQuizActive] = useState<boolean>(false);
//   const [timerId, setTimerId] = useState<number | null>(null);

//   const startQuiz = (quizId: string) => {
//     const baseQuiz = quizzes.find((q) => q.id === quizId);
//     if (baseQuiz) {
//       // Create a new quiz instance with random questions
//       const newQuiz = {
//         ...baseQuiz,
//         questions: getRandomQuestions(quizId, 5),
//       };

//       setActiveQuiz(newQuiz);
//       setActiveQuestion(0);
//       setUserAnswers(new Map());
//       setTimeRemaining(newQuiz.duration * 60);
//       setIsQuizActive(true);

//       const timer = window.setInterval(() => {
//         setTimeRemaining((prev) => {
//           if (prev <= 1) {
//             clearInterval(timer);
//             submitQuiz();
//             return 0;
//           }
//           return prev - 1;
//         });
//       }, 1000);

//       setTimerId(timer as unknown as number);
//     }
//   };

//   const answerQuestion = (questionId: string, optionId: string) => {
//     setUserAnswers(new Map(userAnswers.set(questionId, optionId)));
//   };

//   const nextQuestion = () => {
//     if (activeQuiz && activeQuestion < activeQuiz.questions.length - 1) {
//       setActiveQuestion(activeQuestion + 1);
//     }
//   };

//   const previousQuestion = () => {
//     if (activeQuestion > 0) {
//       setActiveQuestion(activeQuestion - 1);
//     }
//   };

//   const submitQuiz = () => {
//     if (activeQuiz) {
//       if (timerId) {
//         clearInterval(timerId);
//         setTimerId(null);
//       }

//       const results: QuizResult['answers'] = [];
//       let score = 0;

//       activeQuiz.questions.forEach((question) => {
//         const selectedOptionId = userAnswers.get(question.id) || '';
//         const selectedOption = question.options.find(
//           (opt) => opt.id === selectedOptionId
//         );
//         const isCorrect = !!selectedOption?.isCorrect;

//         if (isCorrect) {
//           score += 1;
//         }

//         results.push({
//           questionId: question.id,
//           selectedOptionId,
//           isCorrect,
//         });
//       });

//       const quizResult: QuizResult = {
//         quizId: activeQuiz.id,
//         score,
//         totalQuestions: activeQuiz.questions.length,
//         timeTaken: activeQuiz.duration * 60 - timeRemaining,
//         answers: results,
//         completedAt: new Date().toISOString(),
//       };

//       setQuizResults([...quizResults, quizResult]);
//       setIsQuizActive(false);
//     }
//   };

//   const resetQuiz = () => {
//     if (timerId) {
//       clearInterval(timerId);
//       setTimerId(null);
//     }

//     setActiveQuiz(null);
//     setActiveQuestion(0);
//     setUserAnswers(new Map());
//     setTimeRemaining(0);
//     setIsQuizActive(false);
//   };

//   return (
//     <QuizContext.Provider
//       value={{
//         quizzes,
//         activeQuiz,
//         activeQuestion,
//         userAnswers,
//         quizResults,
//         startQuiz,
//         answerQuestion,
//         nextQuestion,
//         previousQuestion,
//         submitQuiz,
//         resetQuiz,
//         timeRemaining,
//         isQuizActive,
//       }}
//     >
//       {children}
//     </QuizContext.Provider>
//   );
// };

import React, { createContext, useContext, useState } from 'react';
import { Quiz, Question, QuizResult } from '../types';
import { mockQuizzes } from '../data/mockData';

interface QuizContextType {
  quizzes: Quiz[];
  activeQuiz: Quiz | null;
  activeQuestion: number;
  userAnswers: Map<string, string>;
  quizResults: QuizResult[];
  startQuiz: (quizId: string) => void;
  answerQuestion: (questionId: string, optionId: string) => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  submitQuiz: () => void;
  resetQuiz: () => void;
  timeRemaining: number;
  isQuizActive: boolean;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [quizzes] = useState<Quiz[]>(mockQuizzes);
  const [activeQuiz, setActiveQuiz] = useState<Quiz | null>(null);
  const [activeQuestion, setActiveQuestion] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Map<string, string>>(
    new Map()
  );
  const [quizResults, setQuizResults] = useState<QuizResult[]>([]);
  const [timeRemaining, setTimeRemaining] = useState<number>(0);
  const [isQuizActive, setIsQuizActive] = useState<boolean>(false);
  const [timerId, setTimerId] = useState<number | null>(null);

  const startQuiz = (quizId: string) => {
    const quiz = quizzes.find((q) => q.id === quizId);
    if (quiz) {
      setActiveQuiz(quiz);
      setActiveQuestion(0);
      setUserAnswers(new Map());
      setTimeRemaining(quiz.duration * 60); // Convert minutes to seconds
      setIsQuizActive(true);

      // Start the timer
      const timer = window.setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            submitQuiz();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      setTimerId(timer as unknown as number);
    }
  };

  const answerQuestion = (questionId: string, optionId: string) => {
    setUserAnswers(new Map(userAnswers.set(questionId, optionId)));
  };

  const nextQuestion = () => {
    if (activeQuiz && activeQuestion < activeQuiz.questions.length - 1) {
      setActiveQuestion(activeQuestion + 1);
    }
  };

  const previousQuestion = () => {
    if (activeQuestion > 0) {
      setActiveQuestion(activeQuestion - 1);
    }
  };

  const submitQuiz = () => {
    if (activeQuiz) {
      // Clear the timer
      if (timerId) {
        clearInterval(timerId);
        setTimerId(null);
      }

      // Calculate results
      const results: QuizResult['answers'] = [];
      let score = 0;

      activeQuiz.questions.forEach((question) => {
        const selectedOptionId = userAnswers.get(question.id) || '';
        const selectedOption = question.options.find(
          (opt) => opt.id === selectedOptionId
        );
        const isCorrect = !!selectedOption?.isCorrect;

        if (isCorrect) {
          score += 1;
        }

        results.push({
          questionId: question.id,
          selectedOptionId,
          isCorrect,
        });
      });

      const quizResult: QuizResult = {
        quizId: activeQuiz.id,
        score,
        totalQuestions: activeQuiz.questions.length,
        timeTaken: activeQuiz.duration * 60 - timeRemaining,
        answers: results,
        completedAt: new Date().toISOString(),
      };

      setQuizResults([...quizResults, quizResult]);
      setIsQuizActive(false);
    }
  };

  const resetQuiz = () => {
    // Clear the timer if it's running
    if (timerId) {
      clearInterval(timerId);
      setTimerId(null);
    }

    setActiveQuiz(null);
    setActiveQuestion(0);
    setUserAnswers(new Map());
    setTimeRemaining(0);
    setIsQuizActive(false);
  };

  return (
    <QuizContext.Provider
      value={{
        quizzes,
        activeQuiz,
        activeQuestion,
        userAnswers,
        quizResults,
        startQuiz,
        answerQuestion,
        nextQuestion,
        previousQuestion,
        submitQuiz,
        resetQuiz,
        timeRemaining,
        isQuizActive,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
