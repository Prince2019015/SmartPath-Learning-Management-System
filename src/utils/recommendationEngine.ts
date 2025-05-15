// // import { Quiz, QuizResult } from '../types';
// // import LogisticRegression from 'ml-logistic-regression';
// // interface Course {
// //   id: string;
// //   title: string;
// //   description: string;
// //   category: string;
// //   level: 'Beginner' | 'Intermediate' | 'Advanced';
// //   topics: string[];
// //   imageUrl: string;
// // }

// // // Available courses
// // const courses: Course[] = [
// //   {
// //     id: 'web-dev',
// //     title: 'Full Stack Web Development',
// //     description:
// //       'Learn modern web development with HTML, CSS, JavaScript, React, Node.js, and more.',
// //     category: 'Web Development',
// //     level: 'Intermediate',
// //     topics: ['javascript', 'react', 'node', 'html', 'css'],
// //     imageUrl:
// //       'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg',
// //     pdfUrl:
// //       'https://drive.google.com/file/d/1iMUW_PSiEN-fTA4Kzp9At4T2RSty9mly/view?usp=drivesdk',
// //   },
// //   {
// //     id: 'data-science',
// //     title: 'Data Science & Analytics',
// //     description:
// //       'Master data analysis, machine learning, and statistical modeling with Python.',
// //     category: 'Data Science',
// //     level: 'Advanced',
// //     topics: ['python', 'statistics', 'machine-learning', 'data-analysis'],
// //     imageUrl:
// //       'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg',
// //     pdfUrl:
// //       'https://drive.google.com/file/d/1iJwJ98q3rC48JP5zIxhvgnJ2t_85mMr5/view?usp=drivesdk',
// //   },
// //   {
// //     id: 'mobile-dev',
// //     title: 'Mobile App Development',
// //     description:
// //       'Build cross-platform mobile apps using React Native and modern mobile technologies.',
// //     category: 'Mobile Development',
// //     level: 'Intermediate',
// //     topics: ['react-native', 'mobile', 'ios', 'android'],
// //     imageUrl:
// //       'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg',
// //     pdfUrl:
// //       'https://drive.google.com/file/d/1iZUDde8EhIB-cTE36Rlw3W2Fwbr-BLzV/view?usp=drivesdk',
// //   },
// //   {
// //     id: 'cloud-computing',
// //     title: 'Cloud Computing & DevOps',
// //     description:
// //       'Learn cloud services, containerization, and modern deployment practices.',
// //     category: 'Cloud Computing',
// //     level: 'Advanced',
// //     topics: ['aws', 'docker', 'kubernetes', 'devops'],
// //     imageUrl:
// //       'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg',
// //     pdfUrl:
// //       'https://drive.google.com/file/d/1iZnV35oTnpX6dGpV6lw91f8OQ63_A8HH/view?usp=drivesdk',
// //   },
// //   {
// //     id: 'cybersecurity',
// //     title: 'Cybersecurity Fundamentals',
// //     description:
// //       'Master the basics of network security, cryptography, and ethical hacking.',
// //     category: 'Cybersecurity',
// //     level: 'Intermediate',
// //     topics: ['security', 'cryptography', 'networking', 'ethical-hacking'],
// //     imageUrl:
// //       'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg',
// //     pdfUrl:
// //       'https://drive.google.com/file/d/1i_-25AxAc_P4EiX6oN-h9N1jNqTS6O6d/view?usp=drivesdk',
// //   },
// // ];

// // // Feature extraction from quiz results
// // function extractFeatures(
// //   quizResults: QuizResult[],
// //   quizzes: Quiz[]
// // ): number[][] {
// //   return quizResults
// //     .map((result) => {
// //       const quiz = quizzes.find((q) => q.id === result.quizId);
// //       if (!quiz) return [];

// //       // Calculate features
// //       const scorePercentage = result.score / result.totalQuestions;
// //       const timePerQuestion = result.timeTaken / result.totalQuestions;
// //       const consistencyScore = calculateConsistencyScore(result.answers);
// //       const difficultyLevel = getDifficultyLevel(quiz.level);
// //       const categoryScore = getCategoryScore(quiz.category);

// //       return [
// //         scorePercentage,
// //         timePerQuestion,
// //         consistencyScore,
// //         difficultyLevel,
// //         categoryScore,
// //       ];
// //     })
// //     .filter((feature) => feature.length > 0);
// // }

// // function calculateConsistencyScore(answers: QuizResult['answers']): number {
// //   const correctAnswers = answers.filter((a) => a.isCorrect).length;
// //   const totalAnswers = answers.length;
// //   return correctAnswers / totalAnswers;
// // }

// // function getDifficultyLevel(level: string): number {
// //   switch (level) {
// //     case 'Beginner':
// //       return 1;
// //     case 'Intermediate':
// //       return 2;
// //     case 'Advanced':
// //       return 3;
// //     default:
// //       return 1;
// //   }
// // }

// // function getCategoryScore(category: string): number {
// //   const categoryWeights: { [key: string]: number } = {
// //     'Web Development': 1,
// //     'Data Science': 2,
// //     'Mobile Development': 3,
// //     'Cloud Computing': 4,
// //     Cybersecurity: 5,
// //   };
// //   return categoryWeights[category] || 0;
// // }

// // function prepareTrainingData(
// //   features: number[][]
// // ): { X: number[][]; y: Float64Array } | null {
// //   if (features.length === 0) return null;

// //   const X: number[][] = [];
// //   const yTemp: number[] = [];

// //   features.forEach((feature) => {
// //     for (let i = 0; i < 5; i++) {
// //       const noisyFeature = feature.map((f) => f + (Math.random() - 0.5) * 0.1);
// //       X.push(noisyFeature);

// //       const avgScore = (noisyFeature[0] + noisyFeature[2]) / 2;
// //       yTemp.push(avgScore > 0.7 ? 1 : 0);
// //     }
// //   });

// //   if (X.length === 0) return null;

// //   const y = Float64Array.from(yTemp);
// //   return { X, y };
// // }

// // export function analyzeQuizResults(
// //   quizResults: QuizResult[],
// //   quizzes: Quiz[]
// // ): Course[] {
// //   if (quizResults.length === 0) return [];

// //   const features = extractFeatures(quizResults, quizzes);
// //   if (features.length === 0) return [];

// //   const trainingData = prepareTrainingData(features);
// //   if (!trainingData) return [];

// //   const { X, y } = trainingData;

// //   try {
// //     const model = new LogisticRegression({ numSteps: 100, learningRate: 0.5 });
// //     model.train(X, y);

// //     const coursePredictions = courses.map((course) => {
// //       const courseFeatures = [
// //         0.8, // Assume good base performance
// //         60, // Average time per question
// //         0.8, // Consistency score
// //         getDifficultyLevel(course.level),
// //         getCategoryScore(course.category),
// //       ];

// //       const prediction = model.predict([courseFeatures])[0];

// //       return {
// //         course,
// //         score: prediction,
// //       };
// //     });

// //     return coursePredictions
// //       .sort((a, b) => b.score - a.score)
// //       .slice(0, 3)
// //       .map((prediction) => prediction.course);
// //   } catch (error) {
// //     console.error('Error in recommendation engine:', error);
// //     return courses.slice(0, 3);
// //   }
// // }

// // export function recommendCourses(
// //   quizTopics: any[],
// //   maxRecommendations: number = 1
// // ): Course[] {
// //   return courses.slice(0, maxRecommendations);
// // }

// // // export function recommendCourses(
// // //   quizTopics: string[],
// // //   maxRecommendations: number = 3
// // // ): Course[] {
// // //   const scoredCourses = courses.map((course) => {
// // //     const matchScore = course.topics.filter((topic) =>
// // //       quizTopics.includes(topic)
// // //     ).length;
// // //     return { course, score: matchScore };
// // //   });

// // //   return scoredCourses
// // //     .sort((a, b) => b.score - a.score)
// // //     .slice(0, maxRecommendations)
// // //     .map((item) => item.course);
// // // }

// interface Course {
//   id: string;
//   title: string;
//   level: 'Beginner' | 'Intermediate' | 'Advanced';
//   category: string;
//   description: string;
//   imageUrl: string;
//   pdfUrl: string;
// }

// // Add the rest of the 5 categories here similarly...
// const courseLibrary: { [key: string]: Course[] } = {
//   'React Basics': [
//     {
//       id: 'react-beginner',
//       title: 'React Beginner',
//       level: 'Beginner',
//       category: 'React Basics',
//       description: 'Learn fundamentals of React like components and props.',
//       imageUrl: 'https://via.placeholder.com/300x200?text=React+Beginner',
//       pdfUrl: 'https://example.com/react-beginner.pdf',
//     },
//     {
//       id: 'react-intermediate',
//       title: 'React Intermediate',
//       level: 'Intermediate',
//       category: 'React Basics',
//       description: 'Understand hooks, state, and context API.',
//       imageUrl: 'https://via.placeholder.com/300x200?text=React+Intermediate',
//       pdfUrl: 'https://example.com/react-intermediate.pdf',
//     },
//     {
//       id: 'react-advanced',
//       title: 'React Advanced',
//       level: 'Advanced',
//       category: 'React Basics',
//       description: 'Master performance optimizations and advanced patterns.',
//       imageUrl: 'https://via.placeholder.com/300x200?text=React+Advanced',
//       pdfUrl: 'https://example.com/react-advanced.pdf',
//     },
//   ],

//   'JavaScript Fundamentals': [
//     {
//       id: 'js-beginner',
//       title: 'JavaScript Beginner',
//       level: 'Beginner',
//       category: 'JavaScript Fundamentals',
//       description: 'Start with JS basics: variables, loops, and functions.',
//       imageUrl: 'https://via.placeholder.com/300x200?text=JS+Beginner',
//       pdfUrl: 'https://example.com/js-beginner.pdf',
//     },
//     {
//       id: 'js-intermediate',
//       title: 'JavaScript Intermediate',
//       level: 'Intermediate',
//       category: 'JavaScript Fundamentals',
//       description: 'Explore ES6, arrays, objects, and DOM manipulation.',
//       imageUrl: 'https://via.placeholder.com/300x200?text=JS+Intermediate',
//       pdfUrl: 'https://example.com/js-intermediate.pdf',
//     },
//     {
//       id: 'js-advanced',
//       title: 'JavaScript Advanced',
//       level: 'Advanced',
//       category: 'JavaScript Fundamentals',
//       description: 'Master async, closures, prototypes, and performance.',
//       imageUrl: 'https://via.placeholder.com/300x200?text=JS+Advanced',
//       pdfUrl: 'https://example.com/js-advanced.pdf',
//     },
//   ],

//   'Data Science Fundamentals': [
//     {
//       id: 'ds-beginner',
//       title: 'Data Science Beginner',
//       level: 'Beginner',
//       category: 'Data Science Fundamentals',
//       description: 'Introduction to data types, NumPy and basic analysis.',
//       imageUrl: 'https://via.placeholder.com/300x200?text=DS+Beginner',
//       pdfUrl: 'https://example.com/ds-beginner.pdf',
//     },
//     {
//       id: 'ds-intermediate',
//       title: 'Data Science Intermediate',
//       level: 'Intermediate',
//       category: 'Data Science Fundamentals',
//       description: 'Learn Pandas, data cleaning and visualization tools.',
//       imageUrl: 'https://via.placeholder.com/300x200?text=DS+Intermediate',
//       pdfUrl: 'https://example.com/ds-intermediate.pdf',
//     },
//     {
//       id: 'ds-advanced',
//       title: 'Data Science Advanced',
//       level: 'Advanced',
//       category: 'Data Science Fundamentals',
//       description: 'Apply ML models, stats, and real-world data projects.',
//       imageUrl: 'https://via.placeholder.com/300x200?text=DS+Advanced',
//       pdfUrl: 'https://example.com/ds-advanced.pdf',
//     },
//   ],

//   'Mobile Development': [
//     {
//       id: 'mobile-beginner',
//       title: 'Mobile Dev Beginner',
//       level: 'Beginner',
//       category: 'Mobile Development',
//       description: 'Understand basics of mobile apps and UI components.',
//       imageUrl: 'https://via.placeholder.com/300x200?text=Mobile+Beginner',
//       pdfUrl: 'https://example.com/mobile-beginner.pdf',
//     },
//     {
//       id: 'mobile-intermediate',
//       title: 'Mobile Dev Intermediate',
//       level: 'Intermediate',
//       category: 'Mobile Development',
//       description: 'Work with navigation, APIs and platform tools.',
//       imageUrl: 'https://via.placeholder.com/300x200?text=Mobile+Intermediate',
//       pdfUrl: 'https://example.com/mobile-intermediate.pdf',
//     },
//     {
//       id: 'mobile-advanced',
//       title: 'Mobile Dev Advanced',
//       level: 'Advanced',
//       category: 'Mobile Development',
//       description: 'Optimize performance and build production apps.',
//       imageUrl: 'https://via.placeholder.com/300x200?text=Mobile+Advanced',
//       pdfUrl: 'https://example.com/mobile-advanced.pdf',
//     },
//   ],

//   'Cloud Computing & DevOps': [
//     {
//       id: 'cloud-beginner',
//       title: 'Cloud & DevOps Beginner',
//       level: 'Beginner',
//       category: 'Cloud Computing & DevOps',
//       description: 'Basics of cloud platforms, virtualization and CI/CD.',
//       imageUrl: 'https://via.placeholder.com/300x200?text=Cloud+Beginner',
//       pdfUrl: 'https://example.com/cloud-beginner.pdf',
//     },
//     {
//       id: 'cloud-intermediate',
//       title: 'Cloud & DevOps Intermediate',
//       level: 'Intermediate',
//       category: 'Cloud Computing & DevOps',
//       description: 'Docker, Kubernetes, GitHub Actions, and workflows.',
//       imageUrl: 'https://via.placeholder.com/300x200?text=Cloud+Intermediate',
//       pdfUrl: 'https://example.com/cloud-intermediate.pdf',
//     },
//     {
//       id: 'cloud-advanced',
//       title: 'Cloud & DevOps Advanced',
//       level: 'Advanced',
//       category: 'Cloud Computing & DevOps',
//       description: 'Deploy microservices with autoscaling and monitoring.',
//       imageUrl: 'https://via.placeholder.com/300x200?text=Cloud+Advanced',
//       pdfUrl: 'https://example.com/cloud-advanced.pdf',
//     },
//   ],

//   'Cybersecurity Basics': [
//     {
//       id: 'cyber-beginner',
//       title: 'Cybersecurity Beginner',
//       level: 'Beginner',
//       category: 'Cybersecurity Basics',
//       description: 'Intro to threats, attacks, and basic protection methods.',
//       imageUrl: 'https://via.placeholder.com/300x200?text=Cyber+Beginner',
//       pdfUrl: 'https://example.com/cyber-beginner.pdf',
//     },
//     {
//       id: 'cyber-intermediate',
//       title: 'Cybersecurity Intermediate',
//       level: 'Intermediate',
//       category: 'Cybersecurity Basics',
//       description: 'Dive into encryption, auth, and secure protocols.',
//       imageUrl: 'https://via.placeholder.com/300x200?text=Cyber+Intermediate',
//       pdfUrl: 'https://example.com/cyber-intermediate.pdf',
//     },
//     {
//       id: 'cyber-advanced',
//       title: 'Cybersecurity Advanced',
//       level: 'Advanced',
//       category: 'Cybersecurity Basics',
//       description: 'Defensive tools, ethical hacking, and threat modeling.',
//       imageUrl: 'https://via.placeholder.com/300x200?text=Cyber+Advanced',
//       pdfUrl: 'https://example.com/cyber-advanced.pdf',
//     },
//   ],
// };

// export function recommendCourses(
//   topic: string,
//   score: number,
//   totalQuestions: number
// ): Course[] {
//   const percentage = (score / totalQuestions) * 100;

//   const allCourses = courseLibrary[topic];
//   if (!allCourses) return [];

//   if (percentage < 50) {
//     return allCourses; // beginner, intermediate, advanced
//   } else if (percentage >= 50 && percentage < 80) {
//     return allCourses.filter(
//       (course) => course.level === 'Intermediate' || course.level === 'Advanced'
//     );
//   } else if (percentage >= 80) {
//     return allCourses.filter((course) => course.level === 'Advanced');
//   }

//   return [];
// }

interface Course {
  id: string;
  title: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  description: string;
  imageUrl: string;
  pdfUrl: string;
}

// const courseLibrary: { [key: string]: Course[] } = {
// ... keep your full courseLibrary as you already have it
const courseLibrary: { [key: string]: Course[] } = {
  'React Basics': [
    {
      id: 'react-beginner',
      title: 'React Beginner',
      level: 'Beginner',
      category: 'React Basics',
      description: 'Learn fundamentals of React like components and props.',
      imageUrl:
        'https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png',
      pdfUrl:
        'https://www.youtube.com/playlist?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3',
    },
    {
      id: 'react-intermediate',
      title: 'React Intermediate',
      level: 'Intermediate',
      category: 'React Basics',
      description: 'Understand hooks, state, and context API.',
      imageUrl:
        'https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png',
      pdfUrl:
        'https://www.youtube.com/playlist?list=PLdPwRNmUlk0lybMtRRF5xrvFd1UEo6UAR',
    },
    {
      id: 'react-advanced',
      title: 'React Advanced',
      level: 'Advanced',
      category: 'React Basics',
      description: 'Master performance optimizations and advanced patterns.',
      imageUrl:
        'https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png',
      pdfUrl:
        'https://drive.google.com/file/d/1GzhNZRY7J3mHC4xzDlez3I7UW_KT6b07/view?usp=sharing',
    },
  ],

  'JavaScript Fundamentals': [
    {
      id: 'js-beginner',
      title: 'JavaScript Beginner',
      level: 'Beginner',
      category: 'JavaScript Fundamentals',
      description: 'Start with JS basics: variables, loops, and functions.',
      imageUrl:
        'https://th.bing.com/th/id/R.35fde9e2f21022536029356e95c86faa?rik=tKrXgn2dvVJqAw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2flogo-javascript-png-javascript-ile-twitter-retweet-uygulamas-833.png&ehk=EYrDqaaPfX6%2fHeLEOTnVTnshumwnFWj06e8qHpLVHko%3d&risl=&pid=ImgRaw&r=0',
      pdfUrl:
        'https://www.youtube.com/playlist?list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR',
    },
    {
      id: 'js-intermediate',
      title: 'JavaScript Intermediate',
      level: 'Intermediate',
      category: 'src/pages/image.png',
      description: 'Explore ES6, arrays, objects, and DOM manipulation.',
      imageUrl:
        'https://th.bing.com/th/id/R.35fde9e2f21022536029356e95c86faa?rik=tKrXgn2dvVJqAw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2flogo-javascript-png-javascript-ile-twitter-retweet-uygulamas-833.png&ehk=EYrDqaaPfX6%2fHeLEOTnVTnshumwnFWj06e8qHpLVHko%3d&risl=&pid=ImgRaw&r=0',
      pdfUrl:
        'https://www.youtube.com/playlist?list=PLGjplNEQ1it_oTvuLRNqXfz_v_0pq6unW',
    },
    {
      id: 'js-advanced',
      title: 'JavaScript Advanced',
      level: 'Advanced',
      category: 'JavaScript Fundamentals',
      description: 'Master async, closures, prototypes, and performance.',
      imageUrl:
        'https://th.bing.com/th/id/R.35fde9e2f21022536029356e95c86faa?rik=tKrXgn2dvVJqAw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2flogo-javascript-png-javascript-ile-twitter-retweet-uygulamas-833.png&ehk=EYrDqaaPfX6%2fHeLEOTnVTnshumwnFWj06e8qHpLVHko%3d&risl=&pid=ImgRaw&r=0',
      pdfUrl:
        'https://drive.google.com/file/d/1j4_pDyW7DMTeWzulZlgdzofXc0eD_lyo/view?usp=drive_link',
    },
  ],

  'Data Science Fundamentals': [
    {
      id: 'ds-beginner',
      title: 'Data Science Beginner',
      level: 'Beginner',
      category: 'Data Science Fundamentals',
      description: 'Introduction to data types, NumPy and basic analysis.',
      imageUrl:
        'https://th.bing.com/th/id/OIP.sCVVRib0DZHhvvYn45VqawHaEK?cb=iwc2&rs=1&pid=ImgDetMain',
      pdfUrl:
        'https://www.youtube.com/watch?v=gDZ6czwuQ18&pp=ygUiRGF0YSBTY2llbmNlIEZ1bmRhbWVudGFscyBwbGF5bGlzdA%3D%3D',
    },
    {
      id: 'ds-intermediate',
      title: 'Data Science Intermediate',
      level: 'Intermediate',
      category: 'Data Science Fundamentals',
      description: 'Learn Pandas, data cleaning and visualization tools.',
      imageUrl:
        'https://th.bing.com/th/id/OIP.sCVVRib0DZHhvvYn45VqawHaEK?cb=iwc2&rs=1&pid=ImgDetMain',
      pdfUrl: 'https://www.youtube.com/watch?v=-ETQ97mXXF0',
    },
    {
      id: 'ds-advanced',
      title: 'Data Science Advanced',
      level: 'Advanced',
      category: 'Data Science Fundamentals',
      description: 'Apply ML models, stats, and real-world data projects.',
      imageUrl:
        'https://th.bing.com/th/id/OIP.sCVVRib0DZHhvvYn45VqawHaEK?cb=iwc2&rs=1&pid=ImgDetMain',
      pdfUrl:
        'https://drive.google.com/file/d/1iJwJ98q3rC48JP5zIxhvgnJ2t_85mMr5/view?usp=drive_link',
    },
  ],

  'Mobile Development': [
    {
      id: 'mobile-beginner',
      title: 'Mobile Dev Beginner',
      level: 'Beginner',
      category: 'Mobile Development',
      description: 'Understand basics of mobile apps and UI components.',
      imageUrl:
        'https://static.vecteezy.com/system/resources/previews/000/523/046/original/vector-mobile-app-development-concept.jpg',
      pdfUrl: 'https://www.youtube.com/watch?v=u64gyCdqawU',
    },
    {
      id: 'mobile-intermediate',
      title: 'Mobile Dev Intermediate',
      level: 'Intermediate',
      category: 'Mobile Development',
      description: 'Work with navigation, APIs and platform tools.',
      imageUrl:
        'https://static.vecteezy.com/system/resources/previews/000/523/046/original/vector-mobile-app-development-concept.jpg',
      pdfUrl:
        'https://www.youtube.com/playlist?list=PLTjRvDozrdlxzQet01qZBt-sRG8bbDggv',
    },
    {
      id: 'mobile-advanced',
      title: 'Mobile Dev Advanced',
      level: 'Advanced',
      category: 'Mobile Development',
      description: 'Optimize performance and build production apps.',
      imageUrl:
        'https://static.vecteezy.com/system/resources/previews/000/523/046/original/vector-mobile-app-development-concept.jpg',
      pdfUrl:
        'https://drive.google.com/file/d/1iZUDde8EhIB-cTE36Rlw3W2Fwbr-BLzV/view?usp=drive_link',
    },
  ],

  'Cloud Computing & DevOps': [
    {
      id: 'cloud-beginner',
      title: 'Cloud & DevOps Beginner',
      level: 'Beginner',
      category: 'Cloud Computing & DevOps',
      description: 'Basics of cloud platforms, virtualization and CI/CD.',
      imageUrl:
        'https://itchronicles.com/wp-content/uploads/2020/08/devops-cloud-computing-768x531.jpg',
      pdfUrl:
        'https://www.youtube.com/playlist?list=PLxCzCOWd7aiHRHVUtR-O52MsrdUSrzuy4',
    },
    {
      id: 'cloud-intermediate',
      title: 'Cloud & DevOps Intermediate',
      level: 'Intermediate',
      category: 'Cloud Computing & DevOps',
      description: 'Docker, Kubernetes, GitHub Actions, and workflows.',
      imageUrl:
        'https://itchronicles.com/wp-content/uploads/2020/08/devops-cloud-computing-768x531.jpg',
      pdfUrl:
        'https://www.youtube.com/playlist?list=PLdpzxOOAlwvIKMhk8WhzN1pYoJ1YU8Csa',
    },
    {
      id: 'cloud-advanced',
      title: 'Cloud & DevOps Advanced',
      level: 'Advanced',
      category: 'Cloud Computing & DevOps',
      description: 'Deploy microservices with autoscaling and monitoring.',
      imageUrl:
        'https://itchronicles.com/wp-content/uploads/2020/08/devops-cloud-computing-768x531.jpg',
      pdfUrl:
        'https://drive.google.com/file/d/1du7kQ3lfWeG79uq8AE6Jc_FS-MV0SwKe/view?usp=sharing',
    },
  ],

  'Cybersecurity Basics': [
    {
      id: 'cyber-beginner',
      title: 'Cybersecurity Beginner',
      level: 'Beginner',
      category: 'Cybersecurity Basics',
      description: 'Intro to threats, attacks, and basic protection methods.',
      imageUrl:
        'https://www.1stformationsblog.co.uk/wp-content/uploads/2021/10/shutterstock_505066678.jpg',
      pdfUrl:
        'https://www.youtube.com/playlist?list=PL9ooVrP1hQOGPQVeapGsJCktzIO4DtI4_',
    },
    {
      id: 'cyber-intermediate',
      title: 'Cybersecurity Intermediate',
      level: 'Intermediate',
      category: 'Cybersecurity Basics',
      description: 'Dive into encryption, auth, and secure protocols.',
      imageUrl:
        'https://www.1stformationsblog.co.uk/wp-content/uploads/2021/10/shutterstock_505066678.jpg',
      pdfUrl: 'https://www.youtube.com/watch?v=s19BxFpoSd0&t=60165s',
    },
    {
      id: 'cyber-advanced',
      title: 'Cybersecurity Advanced',
      level: 'Advanced',
      category: 'Cybersecurity Basics',
      description: 'Defensive tools, ethical hacking, and threat modeling.',
      imageUrl:
        'https://www.1stformationsblog.co.uk/wp-content/uploads/2021/10/shutterstock_505066678.jpg',
      pdfUrl:
        'https://drive.google.com/file/d/1i_-25AxAc_P4EiX6oN-h9N1jNqTS6O6d/view?usp=drive_link',
    },
  ],
};

// // --- Updated recommendCourses function with Multinomial Logistic Regression ---
// export function recommendCourses(
//   topic: string,
//   score: number,
//   totalQuestions: number
// ): Course[] {
//   const percentage = (score / totalQuestions) * 100;
//   const allCourses = courseLibrary[topic];
//   if (!allCourses) return [];

//   // Multinomial Logistic Regression parameters (already trained)
//   const coefficients = [
//     [-0.6164060254424247], // Beginner
//     [-0.06898126345190905], // Intermediate
//     [0.6853872888928686], // Advanced
//   ];
//   const intercepts = [
//     34.648441673829595, // Beginner
//     10.01431558877595, // Intermediate
//     -44.66275726260356, // Advanced
//   ];
//   const labels = ['Beginner', 'Intermediate', 'Advanced'];

//   // Calculate softmax probabilities
//   const logits = coefficients.map(
//     (coef, i) => coef[0] * percentage + intercepts[i]
//   );
//   const maxLogit = Math.max(...logits);
//   const exps = logits.map((logit) => Math.exp(logit - maxLogit));
//   const sumExps = exps.reduce((sum, val) => sum + val, 0);
//   const probs = exps.map((val) => val / sumExps);

//   // Choose the predicted level with the highest probability
//   const maxProbIndex = probs.indexOf(Math.max(...probs));
//   const predictedLevel = labels[maxProbIndex];

//   // Return appropriate course levels
//   if (predictedLevel === 'Beginner') {
//     return allCourses;
//   } else if (predictedLevel === 'Intermediate') {
//     return allCourses.filter(
//       (course) => course.level === 'Intermediate' || course.level === 'Advanced'
//     );
//   } else if (predictedLevel === 'Advanced') {
//     return allCourses.filter((course) => course.level === 'Advanced');
//   }

//   return [];
// }

// export function recommendCourses(
//   topic: string,
//   score: number,
//   totalQuestions: number
// ): Course[] {
//   const percentage = (score / totalQuestions) * 100;
//   const allCourses = courseLibrary[topic];
//   if (!allCourses) return [];

//   // Decision Tree logic
//   let predictedLevel: 'Beginner' | 'Intermediate' | 'Advanced';
//   if (percentage < 50) {
//     predictedLevel = 'Beginner';
//   } else if (percentage <= 80) {
//     predictedLevel = 'Intermediate';
//   } else {
//     predictedLevel = 'Advanced';
//   }

//   // Filter based on predicted level
//   if (predictedLevel === 'Beginner') {
//     return allCourses;
//   } else if (predictedLevel === 'Intermediate') {
//     return allCourses.filter(
//       (course) => course.level === 'Intermediate' || course.level === 'Advanced'
//     );
//   } else {
//     return allCourses.filter((course) => course.level === 'Advanced');
//   }
// }

export function recommendCourses(
  topic: string,
  score: number,
  totalQuestions: number
): Course[] {
  const percentage = (score / totalQuestions) * 100;
  const allCourses = courseLibrary[topic];
  if (!allCourses) return [];

  // k-NN logic
  const courseLevels = ['Beginner', 'Intermediate', 'Advanced'];

  // Sample training data for k-NN: score and corresponding level.
  // This data can be expanded based on past data.
  const trainingData = [
    { score: 30, level: 'Beginner' },
    { score: 40, level: 'Beginner' },
    { score: 50, level: 'Intermediate' },
    { score: 60, level: 'Intermediate' },
    { score: 70, level: 'Intermediate' },
    { score: 80, level: 'Intermediate' },
    { score: 90, level: 'Advanced' },
  ];

  // Function to calculate Euclidean distance
  const euclideanDistance = (a: number, b: number) => Math.abs(a - b);

  // k-NN algorithm (k=3 for simplicity)
  const k = 3;

  // Calculate distances between the given score and training data
  const distances = trainingData.map((data) => {
    return {
      level: data.level,
      distance: euclideanDistance(percentage, data.score),
    };
  });

  // Sort distances and pick the top k
  distances.sort((a, b) => a.distance - b.distance);
  const nearestNeighbors = distances.slice(0, k);

  // Find the most common level from the nearest neighbors
  const levelCount = { Beginner: 0, Intermediate: 0, Advanced: 0 };
  nearestNeighbors.forEach((neighbor) => {
    levelCount[neighbor.level]++;
  });

  // Predict the level based on majority voting
  let predictedLevel: 'Beginner' | 'Intermediate' | 'Advanced' = 'Beginner';
  let maxCount = 0;
  for (const level in levelCount) {
    if (
      levelCount[level as 'Beginner' | 'Intermediate' | 'Advanced'] > maxCount
    ) {
      predictedLevel = level as 'Beginner' | 'Intermediate' | 'Advanced';
      maxCount = levelCount[level as 'Beginner' | 'Intermediate' | 'Advanced'];
    }
  }

  // Return courses based on predicted level
  if (predictedLevel === 'Beginner') {
    return allCourses.filter((course) => course.level === 'Beginner');
  } else if (predictedLevel === 'Intermediate') {
    return allCourses.filter(
      (course) => course.level === 'Intermediate' || course.level === 'Advanced'
    );
  } else {
    return allCourses.filter((course) => course.level === 'Advanced');
  }
}
