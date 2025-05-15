// import React, { useState } from 'react';
// import { Search, Filter } from 'lucide-react';
// import { useQuiz } from '../context/QuizContext';
// import QuizCard from '../components/QuizCard';

// const QuizzesPage: React.FC = () => {
//   const { quizzes } = useQuiz();
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedLevel, setSelectedLevel] = useState<string>('');
//   const [selectedCategory, setSelectedCategory] = useState<string>('');

//   const categories = Array.from(new Set(quizzes.map(quiz => quiz.category)));
//   const levels = ['Beginner', 'Intermediate', 'Advanced'];

//   const filteredQuizzes = quizzes.filter(quiz => {
//     const matchesSearch = quiz.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          quiz.description.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesLevel = selectedLevel === '' || quiz.level === selectedLevel;
//     const matchesCategory = selectedCategory === '' || quiz.category === selectedCategory;

//     return matchesSearch && matchesLevel && matchesCategory;
//   });

//   return (
//     <div className="min-h-screen bg-gray-50 pt-20 pb-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h1 className="text-3xl font-bold text-gray-900 mb-4">Coding Quizzes</h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Test your programming knowledge with our comprehensive collection of quizzes.
//             From beginner to advanced, we have challenges for every skill level.
//           </p>
//         </div>

//         {/* Search and filters */}
//         <div className="bg-white rounded-lg shadow-md p-4 mb-8">
//           <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
//             <div className="flex-1 mb-4 md:mb-0">
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Search className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <input
//                   type="text"
//                   placeholder="Search quizzes..."
//                   className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//               </div>
//             </div>

//             <div className="flex flex-col sm:flex-row sm:space-x-4">
//               <div className="mb-4 sm:mb-0 flex items-center">
//                 <Filter className="h-5 w-5 text-gray-400 mr-2" />
//                 <span className="text-sm text-gray-700 mr-2">Filters:</span>
//               </div>

//               <select
//                 className="block w-full sm:w-auto pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
//                 value={selectedCategory}
//                 onChange={(e) => setSelectedCategory(e.target.value)}
//               >
//                 <option value="">All Categories</option>
//                 {categories.map((category) => (
//                   <option key={category} value={category}>
//                     {category}
//                   </option>
//                 ))}
//               </select>

//               <select
//                 className="mt-2 sm:mt-0 block w-full sm:w-auto pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
//                 value={selectedLevel}
//                 onChange={(e) => setSelectedLevel(e.target.value)}
//               >
//                 <option value="">All Levels</option>
//                 {levels.map((level) => (
//                   <option key={level} value={level}>
//                     {level}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>
//         </div>

//         {/* Quiz Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredQuizzes.length > 0 ? (
//             filteredQuizzes.map((quiz) => (
//               <QuizCard key={quiz.id} quiz={quiz} />
//             ))
//           ) : (
//             <div className="col-span-full text-center py-12">
//               <p className="text-gray-500 text-lg">
//                 No quizzes found matching your criteria. Try adjusting your filters.
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuizzesPage;

import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { useQuiz } from '../context/QuizContext';
import QuizCard from '../components/QuizCard';

const QuizzesPage: React.FC = () => {
  const { quizzes } = useQuiz();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const categories = Array.from(new Set(quizzes.map((quiz) => quiz.category)));
  const levels = ['Beginner', 'Intermediate', 'Advanced'];

  const filteredQuizzes = quizzes.filter((quiz) => {
    const matchesSearch =
      quiz.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quiz.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevel === '' || quiz.level === selectedLevel;
    const matchesCategory =
      selectedCategory === '' || quiz.category === selectedCategory;

    return matchesSearch && matchesLevel && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Coding Quizzes
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Test your programming knowledge with our comprehensive collection of
            quizzes. From beginner to advanced, we have challenges for every
            skill level.
          </p>
        </div>

        {/* Search and filters */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
            <div className="flex-1 mb-4 md:mb-0">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search quizzes..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <div className="mb-4 sm:mb-0 flex items-center">
                <Filter className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-sm text-gray-700 mr-2">Filters:</span>
              </div>

              <select
                className="block w-full sm:w-auto pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>

              <select
                className="mt-2 sm:mt-0 block w-full sm:w-auto pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
              >
                <option value="">All Levels</option>
                {levels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Quiz Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredQuizzes.length > 0 ? (
            filteredQuizzes.map((quiz) => (
              <QuizCard key={quiz.id} quiz={quiz} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">
                No quizzes found matching your criteria. Try adjusting your
                filters.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizzesPage;
