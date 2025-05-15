// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//   Code,
//   BookOpen,
//   Award,
//   Users,
//   Terminal,
//   Database,
//   Cloud,
//   Globe,
//   File as Mobile,
// } from 'lucide-react';

// const HomePage: React.FC = () => {
//   const navigate = useNavigate();

//   const courses = [
//     {
//       id: 'web-dev',
//       title: 'Full Stack Web Development',
//       description:
//         'Learn modern web development with HTML, CSS, JavaScript, React, Node.js, and more.',
//       duration: '12 weeks',
//       level: 'Intermediate',
//       image:
//         'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg',
//       icon: Globe,
//       color: 'blue',
//       pdfLink:
//         'https://drive.google.com/file/d/1iMUW_PSiEN-fTA4Kzp9At4T2RSty9mly/view?usp=drivesdk',
//     },
//     {
//       id: 'data-science',
//       title: 'Data Science ',
//       description:
//         'Master data analysis, machine learning, and statistical modeling with Python.',
//       duration: '10 weeks',
//       level: 'Advanced',
//       image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg',
//       icon: Database,
//       color: 'purple',
//       pdfLink:
//         'https://drive.google.com/file/d/1iJwJ98q3rC48JP5zIxhvgnJ2t_85mMr5/view?usp=drivesdk',
//     },
//     {
//       id: 'mobile-dev',
//       title: 'Mobile App Development',
//       description:
//         'Build cross-platform mobile apps using React Native and modern mobile technologies.',
//       duration: '8 weeks',
//       level: 'Intermediate',
//       image:
//         'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg',
//       icon: Mobile,
//       color: 'green',
//       pdfLink:
//         'https://drive.google.com/file/d/1iZUDde8EhIB-cTE36Rlw3W2Fwbr-BLzV/view?usp=drivesdk',
//     },
//     {
//       id: 'cloud-computing',
//       title: 'Cloud Computing & DevOps',
//       description:
//         'Learn cloud services, containerization, and modern deployment practices.',
//       duration: '10 weeks',
//       level: 'Advanced',
//       image:
//         'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg',
//       icon: Cloud,
//       color: 'orange',
//       pdfLink:
//         'https://drive.google.com/file/d/1iZnV35oTnpX6dGpV6lw91f8OQ63_A8HH/view?usp=drivesdk',
//     },
//     {
//       id: 'cybersecurity',
//       title: 'Cybersecurity Fundamentals',
//       description:
//         'Master the basics of network security, cryptography, and ethical hacking.',
//       duration: '12 weeks',
//       level: 'Intermediate',
//       image:
//         'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg',
//       icon: Terminal,
//       color: 'red',
//       pdfLink:
//         'https://drive.google.com/file/d/1i_-25AxAc_P4EiX6oN-h9N1jNqTS6O6d/view?usp=drivesdk',
//     },
//   ];

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <div className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
//         <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
//           <div className="flex flex-col lg:flex-row items-center">
//             <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
//               <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
//                 Become a Better Developer
//               </h1>
//               <p className="text-xl mb-8 text-blue-100">
//                 Master coding skills with interactive lessons and challenging
//                 quizzes. Practice, test, and improve your programming knowledge.
//               </p>
//               <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
//                 <button
//                   onClick={() => navigate('/courses')}
//                   className="px-8 py-3 bg-white text-blue-700 font-medium rounded-md shadow-md hover:bg-blue-50 transition-colors"
//                 >
//                   Explore Courses
//                 </button>
//                 <button
//                   onClick={() => navigate('/quizzes')}
//                   className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-blue-700 transition-colors"
//                 >
//                   Try a Quiz
//                 </button>
//               </div>
//             </div>
//             <div className="lg:w-1/2">
//               <img
//                 src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//                 alt="Coding Education"
//                 className="rounded-lg shadow-xl"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Features Section */}
//       <div className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900">
//               Why Choose CodeAcademy
//             </h2>
//             <p className="mt-4 text-xl text-gray-600">
//               Everything you need to master coding skills
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
//               <div className="bg-blue-100 text-blue-700 p-3 rounded-full inline-block mb-4">
//                 <Code className="h-6 w-6" />
//               </div>
//               <h3 className="text-xl font-medium text-gray-900 mb-2">
//                 Interactive Coding
//               </h3>
//               <p className="text-gray-600">
//                 Learn by doing with our interactive coding challenges and
//                 exercises.
//               </p>
//             </div>

//             <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
//               <div className="bg-purple-100 text-purple-700 p-3 rounded-full inline-block mb-4">
//                 <BookOpen className="h-6 w-6" />
//               </div>
//               <h3 className="text-xl font-medium text-gray-900 mb-2">
//                 Comprehensive Courses
//               </h3>
//               <p className="text-gray-600">
//                 From beginner to advanced, our courses cover everything you need
//                 to know.
//               </p>
//             </div>

//             <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
//               <div className="bg-green-100 text-green-700 p-3 rounded-full inline-block mb-4">
//                 <Award className="h-6 w-6" />
//               </div>
//               <h3 className="text-xl font-medium text-gray-900 mb-2">
//                 Skill Assessment
//               </h3>
//               <p className="text-gray-600">
//                 Test your knowledge with our quizzes and get instant feedback.
//               </p>
//             </div>

//             <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
//               <div className="bg-orange-100 text-orange-700 p-3 rounded-full inline-block mb-4">
//                 <Users className="h-6 w-6" />
//               </div>
//               <h3 className="text-xl font-medium text-gray-900 mb-2">
//                 Community Support
//               </h3>
//               <p className="text-gray-600">
//                 Connect with other learners and get help when you need it.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Explore Courses Section */}
//       <div className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900">
//               Explore Our Courses
//             </h2>
//             <p className="mt-4 text-xl text-gray-600">
//               Comprehensive learning paths for every developer
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {courses.map((course) => {
//               const IconComponent = course.icon;
//               return (
//                 <div
//                   key={course.id}
//                   className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
//                 >
//                   <div className="h-48 relative">
//                     <img
//                       src={course.image}
//                       alt={course.title}
//                       className="w-full h-full object-cover"
//                     />
//                     <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-600">
//                       {course.level}
//                     </div>
//                   </div>
//                   <div className="p-6">
//                     <div className="flex items-center mb-4">
//                       <div
//                         className={`bg-${course.color}-100 p-2 rounded-lg mr-4`}
//                       >
//                         <IconComponent
//                           className={`h-6 w-6 text-${course.color}-600`}
//                         />
//                       </div>
//                       <h3 className="text-xl font-bold text-gray-900">
//                         {course.title}
//                       </h3>
//                     </div>
//                     <p className="text-gray-600 mb-4">{course.description}</p>
//                     <div className="flex justify-between items-center">
//                       <span className="text-sm text-gray-500">
//                         {course.duration}
//                       </span>
//                       <a
//                         href={course.pdfLink}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className={`px-4 py-2 bg-${course.color}-600 text-black rounded-md hover:bg-${course.color}-700 transition-colors inline-block text-center`}
//                       >
//                         Learn More
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       {/* Popular Quizzes Section */}
//       <div className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900">
//               Popular Coding Quizzes
//             </h2>
//             <p className="mt-4 text-xl text-gray-600">
//               Test your skills with these challenges
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
//               <div className="h-40 bg-blue-600 flex items-center justify-center text-white">
//                 <div className="text-center">
//                   <Code className="h-12 w-12 mx-auto mb-2" />
//                   <h3 className="text-xl font-medium">
//                     JavaScript Fundamentals
//                   </h3>
//                 </div>
//               </div>
//               <div className="p-6">
//                 <p className="text-gray-600 mb-4">
//                   Test your knowledge of JavaScript basics including variables,
//                   functions, and control flow.
//                 </p>
//                 <div className="flex justify-between text-sm text-gray-500 mb-4">
//                   <span>15 minutes</span>
//                   <span>5 questions</span>
//                   <span>Beginner</span>
//                 </div>
//                 <button
//                   onClick={() => navigate('/quiz/quiz-1')}
//                   className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
//                 >
//                   Start Quiz
//                 </button>
//               </div>
//             </div>

//             <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
//               <div className="h-40 bg-purple-600 flex items-center justify-center text-white">
//                 <div className="text-center">
//                   <Code className="h-12 w-12 mx-auto mb-2" />
//                   <h3 className="text-xl font-medium">React Basics</h3>
//                 </div>
//               </div>
//               <div className="p-6">
//                 <p className="text-gray-600 mb-4">
//                   Test your understanding of React components, props, and state
//                   management.
//                 </p>
//                 <div className="flex justify-between text-sm text-gray-500 mb-4">
//                   <span>20 minutes</span>
//                   <span>5 questions</span>
//                   <span>Intermediate</span>
//                 </div>
//                 <button
//                   onClick={() => navigate('/quiz/quiz-2')}
//                   className="w-full py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
//                 >
//                   Start Quiz
//                 </button>
//               </div>
//             </div>

//             <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
//               <div className="h-40 bg-green-600 flex items-center justify-center text-white">
//                 <div className="text-center">
//                   <Code className="h-12 w-12 mx-auto mb-2" />
//                   <h3 className="text-xl font-medium">Python Fundamentals</h3>
//                 </div>
//               </div>
//               <div className="p-6">
//                 <p className="text-gray-600 mb-4">
//                   Test your knowledge of Python basics including data types,
//                   functions, and control flow.
//                 </p>
//                 <div className="flex justify-between text-sm text-gray-500 mb-4">
//                   <span>15 minutes</span>
//                   <span>5 questions</span>
//                   <span>Beginner</span>
//                 </div>
//                 <button
//                   onClick={() => navigate('/quiz/quiz-3')}
//                   className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
//                 >
//                   Start Quiz
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div className="text-center mt-10">
//             <button
//               onClick={() => navigate('/quizzes')}
//               className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
//             >
//               View All Quizzes
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="bg-gray-900 text-white py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h2 className="text-3xl font-bold mb-4">
//               Ready to start your coding journey?
//             </h2>
//             <p className="text-xl text-gray-300 mb-8">
//               Sign up today and get access to all our courses and quizzes.
//             </p>
//             <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
//               <button
//                 onClick={() => navigate('/signup')}
//                 className="px-8 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-500 transition-colors"
//               >
//                 Sign Up Free
//               </button>
//               <button
//                 onClick={() => navigate('/login')}
//                 className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-gray-900 transition-colors"
//               >
//                 Log In
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Code, BookOpen, Award, Users } from 'lucide-react';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Become a Better Developer
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Master coding skills with interactive lessons and challenging
                quizzes. Practice, test, and improve your programming knowledge.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={() => navigate('/courses')}
                  className="px-8 py-3 bg-white text-blue-700 font-medium rounded-md shadow-md hover:bg-blue-50 transition-colors"
                >
                  Explore Courses
                </button>
                <button
                  onClick={() => navigate('/quizzes')}
                  className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-blue-700 transition-colors"
                >
                  Try a Quiz
                </button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Coding Education"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Why Choose SMARTPATH
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              It's a PERSONALIZED LEARNING MANAGEMENT SYSTEM Everything you need
              to master Computer Science skills
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 text-blue-700 p-3 rounded-full inline-block mb-4">
                <Code className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                Interactive Coding
              </h3>
              <p className="text-gray-600">
                Learn by doing with our interactive coding challenges and
                exercises.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 text-purple-700 p-3 rounded-full inline-block mb-4">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                Comprehensive Courses
              </h3>
              <p className="text-gray-600">
                From beginner to advanced, our courses cover everything you need
                to know.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-green-100 text-green-700 p-3 rounded-full inline-block mb-4">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                Skill Assessment
              </h3>
              <p className="text-gray-600">
                Test your knowledge with our quizzes and get instant feedback.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-orange-100 text-orange-700 p-3 rounded-full inline-block mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                Community Support
              </h3>
              <p className="text-gray-600">
                Connect with other learners and get help when you need it.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Quizzes Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Popular Coding Quizzes
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Test your skills with these challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-40 bg-blue-600 flex items-center justify-center text-white">
                <div className="text-center">
                  <Code className="h-12 w-12 mx-auto mb-2" />
                  <h3 className="text-xl font-medium">
                    JavaScript Fundamentals
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Test your knowledge of JavaScript basics including variables,
                  functions, and control flow.
                </p>
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <span>15 minutes</span>
                  <span>5 questions</span>
                  <span>Beginner</span>
                </div>
                <button
                  onClick={() => navigate('/quiz/quiz-1')}
                  className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Start Quiz
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-40 bg-purple-600 flex items-center justify-center text-white">
                <div className="text-center">
                  <Code className="h-12 w-12 mx-auto mb-2" />
                  <h3 className="text-xl font-medium">React Basics</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Test your understanding of React components, props, and state
                  management.
                </p>
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <span>20 minutes</span>
                  <span>5 questions</span>
                  <span>Intermediate</span>
                </div>
                <button
                  onClick={() => navigate('/quiz/quiz-2')}
                  className="w-full py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
                >
                  Start Quiz
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-40 bg-green-600 flex items-center justify-center text-white">
                <div className="text-center">
                  <Code className="h-12 w-12 mx-auto mb-2" />
                  <h3 className="text-xl font-medium">Python Fundamentals</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Test your knowledge of Python basics including data types,
                  functions, and control flow.
                </p>
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <span>15 minutes</span>
                  <span>5 questions</span>
                  <span>Beginner</span>
                </div>
                <button
                  onClick={() => navigate('/quiz/quiz-3')}
                  className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                >
                  Start Quiz
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => navigate('/quizzes')}
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
            >
              View All Quizzes
            </button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to start your coding journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Sign up today and get access to all our courses and quizzes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => navigate('/signup')}
                className="px-8 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-500 transition-colors"
              >
                Sign Up Free
              </button>
              <button
                onClick={() => navigate('/login')}
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-gray-900 transition-colors"
              >
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
