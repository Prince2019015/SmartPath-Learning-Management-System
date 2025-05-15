import React from 'react';
import {
  Code,
  Terminal,
  Database,
  Cloud,
  Globe,
  File as Mobile,
  Cpu,
  Wifi,
  LeafyGreen,
} from 'lucide-react';

const courses = [
  {
    id: 'web-dev',
    title: 'Full Stack Web Development',
    description:
      'Learn modern web development with HTML, CSS, JavaScript, React, Node.js, and more.',
    duration: '12 weeks',
    level: 'Intermediate',
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg',
    icon: Globe,
    color: 'blue',
    topics: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'Database Design'],
    link: 'https://www.youtube.com/playlist?list=PLDzeHZWIZsTo0wSBcg4-NMIbC0L8evLrD',
  },
  {
    id: 'data-science',
    title: 'Data Science & Analytics',
    description:
      'Master data analysis, machine learning, and statistical modeling with Python.',
    duration: '10 weeks',
    level: 'Advanced',
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg',
    icon: Database,
    color: 'purple',
    topics: [
      'Python',
      'Machine Learning',
      'Data Analysis',
      'Statistics',
      'Data Visualization',
    ],
    link: 'https://www.youtube.com/watch?v=gDZ6czwuQ18',
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Development',
    description:
      'Build cross-platform mobile apps using React Native and modern mobile technologies.',
    duration: '8 weeks',
    level: 'Intermediate',
    image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg',
    icon: Mobile,
    color: 'green',
    topics: [
      'React Native',
      'Mobile UI/UX',
      'App State Management',
      'Native APIs',
      'App Publishing',
    ],
    link: 'https://www.youtube.com/playlist?list=PLUhfM8afLE_NQbVaoIEhceR9npbY57Pdg',
  },
  {
    id: 'cloud-computing',
    title: 'Cloud Computing & DevOps',
    description:
      'Learn cloud services, containerization, and modern deployment practices.',
    duration: '10 weeks',
    level: 'Advanced',
    image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg',
    icon: Cloud,
    color: 'purple',
    topics: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Infrastructure as Code'],
    link: 'https://www.youtube.com/playlist?list=PLxCzCOWd7aiHRHVUtR-O52MsrdUSrzuy4',
  },

  {
    id: 'cybersecurity',
    title: 'Cybersecurity Fundamentals',
    description:
      'Master the basics of network security, cryptography, and ethical hacking.',
    duration: '12 weeks',
    level: 'Intermediate',
    image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg',
    icon: Terminal,
    color: 'green',
    topics: [
      'Network Security',
      'Cryptography',
      'Ethical Hacking',
      'Security Protocols',
      'Risk Assessment',
    ],
    link: 'https://www.youtube.com/playlist?list=PL9ooVrP1hQOGPQVeapGsJCktzIO4DtI4_',
  },
  {
    id: 'dsa',
    title: 'Data Structures & Algorithms',
    description:
      'Master fundamental data structures, algorithms, and problem-solving techniques.',
    duration: '12 weeks',
    level: 'Intermediate',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
    icon: Code,
    color: 'blue',
    topics: [
      'Arrays',
      'Linked Lists',
      'Trees',
      'Graphs',
      'Sorting',
      'Dynamic Programming',
    ],
    link: 'https://www.youtube.com/playlist?list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA',
  },
  {
    id: 'dbms',
    title: 'Database Management Systems',
    description:
      'Learn relational databases, SQL, normalization, indexing, and transaction management.',
    duration: '8 weeks',
    level: 'Intermediate',
    image: 'src/pages/WhatsApp Image 2025-05-14 at 11.26.47.jpeg',
    icon: Database,
    color: 'green',
    topics: ['SQL', 'Normalization', 'Indexing', 'Transactions', 'ER Models'],
    link: 'https://www.youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y',
  },
  {
    id: 'operating-systems',
    title: 'Operating Systems',
    description:
      'Dive into processes, memory management, scheduling, and file systems.',
    duration: '10 weeks',
    level: 'Advanced',
    image: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg',
    icon: Cpu,
    color: 'purple',
    topics: [
      'Processes',
      'Threads',
      'Scheduling',
      'Memory Management',
      'File Systems',
    ],
    link: 'https://www.youtube.com/playlist?list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p',
  },
  {
    id: 'computer-networks',
    title: 'Computer Networks',
    description:
      'Understand networking models, protocols, and communication mechanisms.',
    duration: '9 weeks',
    level: 'Intermediate',
    image: 'https://images.pexels.com/photos/2881232/pexels-photo-2881232.jpeg',
    icon: Wifi,
    color: 'blue',
    topics: ['OSI Model', 'TCP/IP', 'HTTP', 'Routing', 'DNS'],
    link: 'https://www.youtube.com/playlist?list=PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_',
  },
];

const CoursesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Our Courses</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive learning paths designed to help you master modern
            technologies and advance your career in software development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => {
            const IconComponent = course.icon;
            return (
              <div
                key={course.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-600">
                    {course.level}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div
                      className={`bg-${course.color}-100 p-2 rounded-lg mr-4`}
                    >
                      <IconComponent
                        className={`h-6 w-6 text-${course.color}-600`}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {course.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">{course.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">
                      What you'll learn:
                    </h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {course.topics.map((topic, index) => (
                        <li
                          key={index}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <Code className="h-4 w-4 mr-1 text-blue-500" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center mt-6">
                    <div className="text-sm text-gray-500">
                      <span className="font-medium">Duration:</span>{' '}
                      {course.duration}
                    </div>
                    <a
                      href={course.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-4 py-2 bg-${course.color}-600 text-black rounded-md hover:bg-${course.color}-700 transition-colors`}
                    >
                      Enroll Now
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
