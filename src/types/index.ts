export interface User {
  id: string;
  name: string;
  email: string;
  isLoggedIn: boolean;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  duration: number; // in minutes
  questions: Question[];
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  imageUrl: string;
}

export interface Question {
  id: string;
  text: string;
  code?: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
  }[];
}

export interface QuizResult {
  quizId: string;
  score: number;
  totalQuestions: number;
  timeTaken: number; // in seconds
  answers: {
    questionId: string;
    selectedOptionId: string;
    isCorrect: boolean;
  }[];
  completedAt: string;
}