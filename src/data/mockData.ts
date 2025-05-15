import { Quiz } from '../types';

// Question bank for each quiz
const questionBanks = {
  'quiz-1': [
    {
      id: 'js-q1',
      text: 'What will the following code output?',
      code: `
const greeting = 'Hello';
const target = 'World';
console.log(\`\${greeting}, \${target}!\`);`,
      options: [
        { id: 'js-q1-a', text: 'Hello World!', isCorrect: true },
        { id: 'js-q1-b', text: '${greeting}, ${target}!', isCorrect: false },
        { id: 'js-q1-c', text: 'Hello, World', isCorrect: false },
        { id: 'js-q1-d', text: 'greeting, target!', isCorrect: false },
      ],
    },
    {
      id: 'js-q2',
      text: 'Which method is used to add an element to the end of an array?',
      options: [
        { id: 'js-q2-a', text: 'push()', isCorrect: true },
        { id: 'js-q2-b', text: 'append()', isCorrect: false },
        { id: 'js-q2-c', text: 'addToEnd()', isCorrect: false },
        { id: 'js-q2-d', text: 'concat()', isCorrect: false },
      ],
    },
    {
      id: 'js-q3',
      text: 'What does the following code return?',
      code: `
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled);`,
      options: [
        { id: 'js-q3-a', text: '[2, 4, 6, 8, 10]', isCorrect: true },
        {
          id: 'js-q3-b',
          text: '[1, 2, 3, 4, 5, 1, 2, 3, 4, 5]',
          isCorrect: false,
        },
        { id: 'js-q3-c', text: '[1, 4, 9, 16, 25]', isCorrect: false },
        { id: 'js-q3-d', text: 'undefined', isCorrect: false },
      ],
    },
    {
      id: 'js-q4',
      text: 'What is the result of typeof null?',
      options: [
        { id: 'js-q4-a', text: 'object', isCorrect: true },
        { id: 'js-q4-b', text: 'null', isCorrect: false },
        { id: 'js-q4-c', text: 'undefined', isCorrect: false },
        { id: 'js-q4-d', text: 'number', isCorrect: false },
      ],
    },
    {
      id: 'js-q5',
      text: 'Which statement creates a block scope in JavaScript?',
      options: [
        { id: 'js-q5-a', text: 'let', isCorrect: true },
        { id: 'js-q5-b', text: 'var', isCorrect: false },
        { id: 'js-q5-c', text: 'function', isCorrect: false },
        { id: 'js-q5-d', text: 'this', isCorrect: false },
      ],
    },
    {
      id: 'js-q6',
      text: 'What is the output of this code?',
      code: `
console.log(1 + '2' + '2');
console.log(1 + +'2' + +'2');`,
      options: [
        { id: 'js-q6-a', text: '122 and 5', isCorrect: true },
        { id: 'js-q6-b', text: '122 and 122', isCorrect: false },
        { id: 'js-q6-c', text: '14 and 14', isCorrect: false },
        { id: 'js-q6-d', text: '32 and 32', isCorrect: false },
      ],
    },
    {
      id: 'js-q7',
      text: 'What is the purpose of the bind() method?',
      options: [
        {
          id: 'js-q7-a',
          text: 'Creates a new function with a fixed this value',
          isCorrect: true,
        },
        { id: 'js-q7-b', text: 'Joins two arrays together', isCorrect: false },
        {
          id: 'js-q7-c',
          text: 'Creates a copy of an object',
          isCorrect: false,
        },
        {
          id: 'js-q7-d',
          text: 'Binds event listeners to DOM elements',
          isCorrect: false,
        },
      ],
    },
    {
      id: 'js-q8',
      text: 'What is the output of this code?',
      code: `
let x = 1;
{
  let x = 2;
  console.log(x);
}
console.log(x);`,
      options: [
        { id: 'js-q8-a', text: '2, 1', isCorrect: true },
        { id: 'js-q8-b', text: '1, 2', isCorrect: false },
        { id: 'js-q8-c', text: '2, 2', isCorrect: false },
        { id: 'js-q8-d', text: '1, 1', isCorrect: false },
      ],
    },
    {
      id: 'js-q9',
      text: 'What is the purpose of the Symbol type in JavaScript?',
      options: [
        {
          id: 'js-q9-a',
          text: 'To create unique identifiers',
          isCorrect: true,
        },
        {
          id: 'js-q9-b',
          text: 'To define mathematical constants',
          isCorrect: false,
        },
        { id: 'js-q9-c', text: 'To create type annotations', isCorrect: false },
        { id: 'js-q9-d', text: 'To handle binary data', isCorrect: false },
      ],
    },
    {
      id: 'js-q10',
      text: 'What will this code return?',
      code: `
const arr = [1, 2, 3];
const [first, ...rest] = arr;
console.log(rest);`,
      options: [
        { id: 'js-q10-a', text: '[2, 3]', isCorrect: true },
        { id: 'js-q10-b', text: '[1]', isCorrect: false },
        { id: 'js-q10-c', text: '[1, 2, 3]', isCorrect: false },
        { id: 'js-q10-d', text: '3', isCorrect: false },
      ],
    },
    {
      id: 'js-q97',
      text: 'What is the output of this code?',
      code: `
async function example() {
  return 'Hello';
}
console.log(example());`,
      options: [
        {
          id: 'js-q97-a',
          text: 'Promise {<resolved>: "Hello"}',
          isCorrect: true,
        },
        { id: 'js-q97-b', text: 'Hello', isCorrect: false },
        { id: 'js-q97-c', text: 'undefined', isCorrect: false },
        { id: 'js-q97-d', text: 'null', isCorrect: false },
      ],
    },
    {
      id: 'js-q98',
      text: 'What is the purpose of the WeakMap object?',
      options: [
        {
          id: 'js-q98-a',
          text: 'To store key-value pairs where keys are weakly referenced',
          isCorrect: true,
        },
        {
          id: 'js-q98-b',
          text: 'To create a map with weak encryption',
          isCorrect: false,
        },
        {
          id: 'js-q98-c',
          text: 'To store only primitive values',
          isCorrect: false,
        },
        { id: 'js-q98-d', text: 'To create a read-only map', isCorrect: false },
      ],
    },
    {
      id: 'js-q99',
      text: 'What will be logged?',
      code: `
const obj = { a: 1 };
const proxy = new Proxy(obj, {
  get: (target, prop) => 42
});
console.log(proxy.a);`,
      options: [
        { id: 'js-q99-a', text: '42', isCorrect: true },
        { id: 'js-q99-b', text: '1', isCorrect: false },
        { id: 'js-q99-c', text: 'undefined', isCorrect: false },
        { id: 'js-q99-d', text: 'null', isCorrect: false },
      ],
    },
    {
      id: 'js-q100',
      text: 'What is the output?',
      code: `
function* generator() {
  yield 1;
  yield 2;
  return 3;
}
const gen = generator();
console.log([...gen]);`,
      options: [
        { id: 'js-q100-a', text: '[1, 2]', isCorrect: true },
        { id: 'js-q100-b', text: '[1, 2, 3]', isCorrect: false },
        { id: 'js-q100-c', text: '[3]', isCorrect: false },
        { id: 'js-q100-d', text: '[]', isCorrect: false },
      ],
    },
  ],
  'quiz-2': [
    {
      id: 'react-q1',
      text: 'Which hook is used to perform side effects in a function component?',
      options: [
        { id: 'react-q1-a', text: 'useEffect', isCorrect: true },
        { id: 'react-q1-b', text: 'useState', isCorrect: false },
        { id: 'react-q1-c', text: 'useContext', isCorrect: false },
        { id: 'react-q1-d', text: 'useReducer', isCorrect: false },
      ],
    },
    {
      id: 'react-q2',
      text: 'What does the following code do?',
      code: `
const [count, setCount] = useState(0);`,
      options: [
        {
          id: 'react-q2-a',
          text: 'Initializes a state variable called count with a value of 0',
          isCorrect: true,
        },
        {
          id: 'react-q2-b',
          text: 'Creates a ref called count',
          isCorrect: false,
        },
        {
          id: 'react-q2-c',
          text: 'Defines a prop called count',
          isCorrect: false,
        },
        {
          id: 'react-q2-d',
          text: 'Creates a context called count',
          isCorrect: false,
        },
      ],
    },
    {
      id: 'react-q3',
      text: 'What is the purpose of the useCallback hook?',
      options: [
        {
          id: 'react-q3-a',
          text: 'Memoize functions to prevent unnecessary re-renders',
          isCorrect: true,
        },
        { id: 'react-q3-b', text: 'Create state variables', isCorrect: false },
        { id: 'react-q3-c', text: 'Handle form submissions', isCorrect: false },
        { id: 'react-q3-d', text: 'Manage side effects', isCorrect: false },
      ],
    },
    {
      id: 'react-q4',
      text: 'What is the correct way to conditionally render content in React?',
      code: `
function Component({ isVisible }) {
  return (
    <div>
      {isVisible && <p>Visible content</p>}
    </div>
  );
}`,
      options: [
        { id: 'react-q4-a', text: 'Using the && operator', isCorrect: true },
        {
          id: 'react-q4-b',
          text: 'Using if/else statements',
          isCorrect: false,
        },
        { id: 'react-q4-c', text: 'Using switch statements', isCorrect: false },
        { id: 'react-q4-d', text: 'Using for loops', isCorrect: false },
      ],
    },
    {
      id: 'react-q5',
      text: 'What is the purpose of the key prop in React lists?',
      options: [
        {
          id: 'react-q5-a',
          text: 'Help React identify which items have changed',
          isCorrect: true,
        },
        { id: 'react-q5-b', text: 'Style list items', isCorrect: false },
        { id: 'react-q5-c', text: 'Sort list items', isCorrect: false },
        { id: 'react-q5-d', text: 'Filter list items', isCorrect: false },
      ],
    },
    {
      id: 'react-q6',
      text: 'What is the purpose of React.memo?',
      options: [
        {
          id: 'react-q6-a',
          text: 'Prevent unnecessary re-renders of functional components',
          isCorrect: true,
        },
        { id: 'react-q6-b', text: 'Store data in memory', isCorrect: false },
        {
          id: 'react-q6-c',
          text: 'Create memoized selectors',
          isCorrect: false,
        },
        { id: 'react-q6-d', text: 'Handle form validation', isCorrect: false },
      ],
    },
    {
      id: 'react-q7',
      text: 'What is the correct way to update state based on previous state?',
      code: `
setCount(prevCount => prevCount + 1);`,
      options: [
        {
          id: 'react-q7-a',
          text: 'Using a function in setState',
          isCorrect: true,
        },
        {
          id: 'react-q7-b',
          text: 'Directly modifying state',
          isCorrect: false,
        },
        { id: 'react-q7-c', text: 'Using async/await', isCorrect: false },
        { id: 'react-q7-d', text: 'Using promises', isCorrect: false },
      ],
    },
    {
      id: 'react-q8',
      text: 'What is the purpose of the useLayoutEffect hook?',
      options: [
        {
          id: 'react-q8-a',
          text: 'To perform synchronous updates after DOM mutations',
          isCorrect: true,
        },
        {
          id: 'react-q8-b',
          text: 'To handle routing in React',
          isCorrect: false,
        },
        { id: 'react-q8-c', text: 'To manage form state', isCorrect: false },
        { id: 'react-q8-d', text: 'To create animations', isCorrect: false },
      ],
    },
    {
      id: 'react-q9',
      text: 'What will this code do?',
      code: `
const Component = React.memo(({ data }) => {
  return <div>{data.value}</div>;
});`,
      options: [
        {
          id: 'react-q9-a',
          text: 'Prevent re-renders if props are unchanged',
          isCorrect: true,
        },
        {
          id: 'react-q9-b',
          text: 'Cache the rendered output',
          isCorrect: false,
        },
        { id: 'react-q9-c', text: 'Memoize the data prop', isCorrect: false },
        { id: 'react-q9-d', text: 'Create a pure component', isCorrect: false },
      ],
    },
    {
      id: 'react-q97',
      text: 'What is the purpose of the useImperativeHandle hook?',
      options: [
        {
          id: 'react-q97-a',
          text: 'Customize the instance value exposed to parent components',
          isCorrect: true,
        },
        { id: 'react-q97-b', text: 'Handle form validation', isCorrect: false },
        {
          id: 'react-q97-c',
          text: 'Manage component lifecycle',
          isCorrect: false,
        },
        { id: 'react-q97-d', text: 'Create DOM references', isCorrect: false },
      ],
    },
    {
      id: 'react-q98',
      text: 'What will this code do?',
      code: `
const [state, dispatch] = useReducer((state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    default:
      return state;
  }
}, { count: 0 });`,
      options: [
        {
          id: 'react-q98-a',
          text: 'Create a reducer for state management',
          isCorrect: true,
        },
        {
          id: 'react-q98-b',
          text: 'Create a global state store',
          isCorrect: false,
        },
        {
          id: 'react-q98-c',
          text: 'Initialize component state',
          isCorrect: false,
        },
        {
          id: 'react-q98-d',
          text: 'Create a memoized value',
          isCorrect: false,
        },
      ],
    },
    {
      id: 'react-q99',
      text: 'What is the purpose of the key prop in this code?',
      code: `
<TransitionGroup>
  {items.map(item => (
    <CSSTransition
      key={item.id}
      timeout={500}
      classNames="fade"
    >
      <div>{item.text}</div>
    </CSSTransition>
  ))}
</TransitionGroup>`,
      options: [
        {
          id: 'react-q99-a',
          text: 'To track items for animation',
          isCorrect: true,
        },
        { id: 'react-q99-b', text: 'To optimize rendering', isCorrect: false },
        { id: 'react-q99-c', text: 'To style components', isCorrect: false },
        { id: 'react-q99-d', text: 'To handle events', isCorrect: false },
      ],
    },
    {
      id: 'react-q100',
      text: 'What will this custom hook do?',
      code: `
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [value, delay]);
  
  return debouncedValue;
}`,
      options: [
        {
          id: 'react-q100-a',
          text: 'Delay updating a value until changes stop',
          isCorrect: true,
        },
        { id: 'react-q100-b', text: 'Cache a value', isCorrect: false },
        { id: 'react-q100-c', text: 'Create a timer', isCorrect: false },
        {
          id: 'react-q100-d',
          text: 'Handle form validation',
          isCorrect: false,
        },
      ],
    },
  ],
  'quiz-3': [
    //   {
    //     id: 'ds-q1',
    //     text: 'Which Python library is primarily used for numerical computing?',
    //     options: [
    //       { id: 'ds-q1-a', text: 'NumPy', isCorrect: true },
    //       { id: 'ds-q1-b', text: 'Pandas', isCorrect: false },
    //       { id: 'ds-q1-c', text: 'Matplotlib', isCorrect: false },
    //       { id: 'ds-q1-d', text: 'Scikit-learn', isCorrect: false },
    //     ],
    //   },
    //   {
    //     id: 'ds-q2',
    //     text: 'What is the purpose of pandas DataFrame?',
    //     options: [
    //       {
    //         id: 'ds-q2-a',
    //         text: 'Two-dimensional labeled data structure',
    //         isCorrect: true,
    //       },
    //       {
    //         id: 'ds-q2-b',
    //         text: 'Machine learning model training',
    //         isCorrect: false,
    //       },
    //       { id: 'ds-q2-c', text: 'Data visualization', isCorrect: false },
    //       { id: 'ds-q2-d', text: 'Neural network creation', isCorrect: false },
    //     ],
    //   },
    // ],

    {
      id: 'ds-q1',
      text: 'Which Python library is primarily used for numerical computing?',
      options: [
        { id: 'ds-q1-a', text: 'NumPy', isCorrect: true },
        { id: 'ds-q1-b', text: 'Pandas', isCorrect: false },
        { id: 'ds-q1-c', text: 'Matplotlib', isCorrect: false },
        { id: 'ds-q1-d', text: 'Scikit-learn', isCorrect: false },
      ],
    },
    {
      id: 'ds-q2',
      text: 'What is the purpose of pandas DataFrame?',
      options: [
        {
          id: 'ds-q2-a',
          text: 'Two-dimensional labeled data structure',
          isCorrect: true,
        },
        {
          id: 'ds-q2-b',
          text: 'Machine learning model training',
          isCorrect: false,
        },
        { id: 'ds-q2-c', text: 'Data visualization', isCorrect: false },
        { id: 'ds-q2-d', text: 'Neural network creation', isCorrect: false },
      ],
    },
    {
      id: 'ds-q3',
      text: 'Which of these is a common step in data preprocessing?',
      options: [
        { id: 'ds-q3-a', text: 'Handling missing values', isCorrect: true },
        { id: 'ds-q3-b', text: 'Deploying the model', isCorrect: false },
        { id: 'ds-q3-c', text: 'Hyperparameter tuning', isCorrect: false },
        { id: 'ds-q3-d', text: 'Feature selection', isCorrect: false },
      ],
    },
    {
      id: 'ds-q4',
      text: 'Which method is used to visualize the distribution of a dataset?',
      options: [
        { id: 'ds-q4-a', text: 'Histogram', isCorrect: true },
        { id: 'ds-q4-b', text: 'Pie chart', isCorrect: false },
        { id: 'ds-q4-c', text: 'Bar chart', isCorrect: false },
        { id: 'ds-q4-d', text: 'Scatter plot', isCorrect: false },
      ],
    },
    {
      id: 'ds-q5',
      text: 'What does CSV stand for?',
      options: [
        { id: 'ds-q5-a', text: 'Comma-Separated Values', isCorrect: true },
        { id: 'ds-q5-b', text: 'Column Structured View', isCorrect: false },
        { id: 'ds-q5-c', text: 'Continuous Standard Values', isCorrect: false },
        { id: 'ds-q5-d', text: 'Chart Save Values', isCorrect: false },
      ],
    },
    {
      id: 'ds-q6',
      text: 'Which of these is NOT a Python library?',
      options: [
        { id: 'ds-q6-a', text: 'TensorFlow', isCorrect: false },
        { id: 'ds-q6-b', text: 'NumPy', isCorrect: false },
        { id: 'ds-q6-c', text: 'Excel', isCorrect: true },
        { id: 'ds-q6-d', text: 'Pandas', isCorrect: false },
      ],
    },
    {
      id: 'ds-q7',
      text: 'Which library is typically used for plotting in Python?',
      options: [
        { id: 'ds-q7-a', text: 'Matplotlib', isCorrect: true },
        { id: 'ds-q7-b', text: 'NumPy', isCorrect: false },
        { id: 'ds-q7-c', text: 'Seaborn', isCorrect: false },
        { id: 'ds-q7-d', text: 'SciPy', isCorrect: false },
      ],
    },
    {
      id: 'ds-q8',
      text: 'What is the purpose of normalization in data preprocessing?',
      options: [
        {
          id: 'ds-q8-a',
          text: 'To scale values between 0 and 1',
          isCorrect: true,
        },
        { id: 'ds-q8-b', text: 'To remove outliers', isCorrect: false },
        {
          id: 'ds-q8-c',
          text: 'To convert categorical to numeric',
          isCorrect: false,
        },
        { id: 'ds-q8-d', text: 'To perform PCA', isCorrect: false },
      ],
    },
    {
      id: 'ds-q9',
      text: 'Which metric is commonly used to evaluate regression models?',
      options: [
        { id: 'ds-q9-a', text: 'Mean Squared Error (MSE)', isCorrect: true },
        { id: 'ds-q9-b', text: 'Accuracy', isCorrect: false },
        { id: 'ds-q9-c', text: 'Precision', isCorrect: false },
        { id: 'ds-q9-d', text: 'Recall', isCorrect: false },
      ],
    },
    {
      id: 'ds-q10',
      text: 'Which function is used to check for missing values in a pandas DataFrame?',
      options: [
        { id: 'ds-q10-a', text: 'isnull()', isCorrect: true },
        { id: 'ds-q10-b', text: 'fillna()', isCorrect: false },
        { id: 'ds-q10-c', text: 'dropna()', isCorrect: false },
        { id: 'ds-q10-d', text: 'checknull()', isCorrect: false },
      ],
    },
    {
      id: 'ds-q11',
      text: 'What is the dimensionality of a correlation matrix for 5 features?',
      options: [
        { id: 'ds-q11-a', text: '5x5', isCorrect: true },
        { id: 'ds-q11-b', text: '1x5', isCorrect: false },
        { id: 'ds-q11-c', text: '4x4', isCorrect: false },
        { id: 'ds-q11-d', text: '10x10', isCorrect: false },
      ],
    },
    {
      id: 'ds-q12',
      text: 'Which method in pandas is used to combine data along axis?',
      options: [
        { id: 'ds-q12-a', text: 'concat()', isCorrect: true },
        { id: 'ds-q12-b', text: 'merge()', isCorrect: false },
        { id: 'ds-q12-c', text: 'groupby()', isCorrect: false },
        { id: 'ds-q12-d', text: 'join()', isCorrect: false },
      ],
    },
    {
      id: 'ds-q13',
      text: 'Which of the following is a classification algorithm?',
      options: [
        { id: 'ds-q13-a', text: 'Logistic Regression', isCorrect: true },
        { id: 'ds-q13-b', text: 'Linear Regression', isCorrect: false },
        { id: 'ds-q13-c', text: 'KMeans', isCorrect: false },
        { id: 'ds-q13-d', text: 'PCA', isCorrect: false },
      ],
    },
    {
      id: 'ds-q14',
      text: 'Which of these visualizations best shows correlation between two variables?',
      options: [
        { id: 'ds-q14-a', text: 'Scatter plot', isCorrect: true },
        { id: 'ds-q14-b', text: 'Pie chart', isCorrect: false },
        { id: 'ds-q14-c', text: 'Histogram', isCorrect: false },
        { id: 'ds-q14-d', text: 'Box plot', isCorrect: false },
      ],
    },
    {
      id: 'ds-q15',
      text: 'What is the primary purpose of PCA in data science?',
      options: [
        { id: 'ds-q15-a', text: 'Dimensionality reduction', isCorrect: true },
        { id: 'ds-q15-b', text: 'Classification', isCorrect: false },
        { id: 'ds-q15-c', text: 'Overfitting detection', isCorrect: false },
        { id: 'ds-q15-d', text: 'Data scaling', isCorrect: false },
      ],
    },
    {
      id: 'ds-q16',
      text: 'Which evaluation metric is best for imbalanced classification datasets?',
      options: [
        { id: 'ds-q16-a', text: 'F1 Score', isCorrect: true },
        { id: 'ds-q16-b', text: 'Accuracy', isCorrect: false },
        { id: 'ds-q16-c', text: 'MSE', isCorrect: false },
        { id: 'ds-q16-d', text: 'R-squared', isCorrect: false },
      ],
    },
    {
      id: 'ds-q17',
      text: 'What does the term "bias-variance tradeoff" refer to?',
      options: [
        {
          id: 'ds-q17-a',
          text: 'Balancing model complexity and generalization',
          isCorrect: true,
        },
        { id: 'ds-q17-b', text: 'Choosing learning rate', isCorrect: false },
        {
          id: 'ds-q17-c',
          text: 'Cross-validation technique',
          isCorrect: false,
        },
        { id: 'ds-q17-d', text: 'Missing value handling', isCorrect: false },
      ],
    },
    {
      id: 'ds-q18',
      text: 'Which technique is used to reduce multicollinearity?',
      options: [
        {
          id: 'ds-q18-a',
          text: 'Remove one of the correlated features',
          isCorrect: true,
        },
        { id: 'ds-q18-b', text: 'Increase dataset size', isCorrect: false },
        { id: 'ds-q18-c', text: 'Use random sampling', isCorrect: false },
        { id: 'ds-q18-d', text: 'Normalize features', isCorrect: false },
      ],
    },
    {
      id: 'ds-q19',
      text: 'Which algorithm works well when the data is linearly separable?',
      options: [
        {
          id: 'ds-q19-a',
          text: 'Support Vector Machine with linear kernel',
          isCorrect: true,
        },
        { id: 'ds-q19-b', text: 'Decision Tree', isCorrect: false },
        { id: 'ds-q19-c', text: 'KMeans', isCorrect: false },
        { id: 'ds-q19-d', text: 'Naive Bayes', isCorrect: false },
      ],
    },
    {
      id: 'ds-q20',
      text: 'Which function from sklearn can be used to split a dataset into training and test sets?',
      options: [
        { id: 'ds-q20-a', text: 'train_test_split()', isCorrect: true },
        { id: 'ds-q20-b', text: 'split_data()', isCorrect: false },
        { id: 'ds-q20-c', text: 'partition()', isCorrect: false },
        { id: 'ds-q20-d', text: 'test_train_divide()', isCorrect: false },
      ],
    },
  ],
  'quiz-4': [
    //   {
    //     id: 'mob-q1',
    //     text: 'Which of the following is NOT a React Native component?',
    //     options: [
    //       { id: 'mob-q1-a', text: '<Div>', isCorrect: true },
    //       { id: 'mob-q1-b', text: '<View>', isCorrect: false },
    //       { id: 'mob-q1-c', text: '<Text>', isCorrect: false },
    //       { id: 'mob-q1-d', text: '<ScrollView>', isCorrect: false },
    //     ],
    //   },
    //   {
    //     id: 'mob-q2',
    //     text: 'How do you handle platform-specific code in React Native?',
    //     options: [
    //       { id: 'mob-q2-a', text: 'Platform.select()', isCorrect: true },
    //       { id: 'mob-q2-b', text: 'if (iOS) {}', isCorrect: false },
    //       { id: 'mob-q2-c', text: 'deviceType.check()', isCorrect: false },
    //       { id: 'mob-q2-d', text: 'checkPlatform()', isCorrect: false },
    //     ],
    //   },
    // ],

    {
      id: 'mob-q1',
      text: 'Which of the following is NOT a React Native component?',
      options: [
        { id: 'mob-q1-a', text: '<Div>', isCorrect: true },
        { id: 'mob-q1-b', text: '<View>', isCorrect: false },
        { id: 'mob-q1-c', text: '<Text>', isCorrect: false },
        { id: 'mob-q1-d', text: '<ScrollView>', isCorrect: false },
      ],
    },
    {
      id: 'mob-q2',
      text: 'How do you handle platform-specific code in React Native?',
      options: [
        { id: 'mob-q2-a', text: 'Platform.select()', isCorrect: true },
        { id: 'mob-q2-b', text: 'if (iOS) {}', isCorrect: false },
        { id: 'mob-q2-c', text: 'deviceType.check()', isCorrect: false },
        { id: 'mob-q2-d', text: 'checkPlatform()', isCorrect: false },
      ],
    },
    {
      id: 'mob-q3',
      text: 'Which language is used in Flutter for development?',
      options: [
        { id: 'mob-q3-a', text: 'Dart', isCorrect: true },
        { id: 'mob-q3-b', text: 'JavaScript', isCorrect: false },
        { id: 'mob-q3-c', text: 'Kotlin', isCorrect: false },
        { id: 'mob-q3-d', text: 'Swift', isCorrect: false },
      ],
    },
    {
      id: 'mob-q4',
      text: 'What does the `useState` hook in React Native do?',
      options: [
        { id: 'mob-q4-a', text: 'Manages component state', isCorrect: true },
        { id: 'mob-q4-b', text: 'Fetches data', isCorrect: false },
        { id: 'mob-q4-c', text: 'Applies styles', isCorrect: false },
        { id: 'mob-q4-d', text: 'Handles navigation', isCorrect: false },
      ],
    },
    {
      id: 'mob-q5',
      text: 'Which file contains app metadata in Android?',
      options: [
        { id: 'mob-q5-a', text: 'AndroidManifest.xml', isCorrect: true },
        { id: 'mob-q5-b', text: 'build.gradle', isCorrect: false },
        { id: 'mob-q5-c', text: 'MainActivity.kt', isCorrect: false },
        { id: 'mob-q5-d', text: 'strings.xml', isCorrect: false },
      ],
    },
    {
      id: 'mob-q6',
      text: 'Which framework is best known for writing cross-platform mobile apps in JavaScript?',
      options: [
        { id: 'mob-q6-a', text: 'React Native', isCorrect: true },
        { id: 'mob-q6-b', text: 'Xcode', isCorrect: false },
        { id: 'mob-q6-c', text: 'Android Studio', isCorrect: false },
        { id: 'mob-q6-d', text: 'Visual Studio', isCorrect: false },
      ],
    },
    {
      id: 'mob-q7',
      text: 'Which of the following is used to install dependencies in a React Native app?',
      options: [
        { id: 'mob-q7-a', text: 'npm or yarn', isCorrect: true },
        { id: 'mob-q7-b', text: 'composer', isCorrect: false },
        { id: 'mob-q7-c', text: 'pip', isCorrect: false },
        { id: 'mob-q7-d', text: 'apt-get', isCorrect: false },
      ],
    },
    {
      id: 'mob-q8',
      text: 'What’s the main advantage of using Expo in React Native?',
      options: [
        {
          id: 'mob-q8-a',
          text: 'No need for native code configuration',
          isCorrect: true,
        },
        { id: 'mob-q8-b', text: 'Supports only Android', isCorrect: false },
        { id: 'mob-q8-c', text: 'Uses TypeScript only', isCorrect: false },
        { id: 'mob-q8-d', text: 'Requires Android Studio', isCorrect: false },
      ],
    },
    {
      id: 'mob-q9',
      text: 'Which Flutter widget is commonly used for creating a list of scrollable items?',
      options: [
        { id: 'mob-q9-a', text: 'ListView', isCorrect: true },
        { id: 'mob-q9-b', text: 'Column', isCorrect: false },
        { id: 'mob-q9-c', text: 'Stack', isCorrect: false },
        { id: 'mob-q9-d', text: 'Padding', isCorrect: false },
      ],
    },
    {
      id: 'mob-q10',
      text: 'How can you debug a React Native app efficiently?',
      options: [
        {
          id: 'mob-q10-a',
          text: 'Using React Native Debugger or Chrome DevTools',
          isCorrect: true,
        },
        {
          id: 'mob-q10-b',
          text: 'Only console.log statements',
          isCorrect: false,
        },
        { id: 'mob-q10-c', text: 'Terminal only', isCorrect: false },
        { id: 'mob-q10-d', text: 'Xcode exclusively', isCorrect: false },
      ],
    },
    {
      id: 'mob-q11',
      text: 'Which of the following is a state management library in React Native?',
      options: [
        { id: 'mob-q11-a', text: 'Redux', isCorrect: true },
        { id: 'mob-q11-b', text: 'Axios', isCorrect: false },
        { id: 'mob-q11-c', text: 'Express', isCorrect: false },
        { id: 'mob-q11-d', text: 'Mocha', isCorrect: false },
      ],
    },
    {
      id: 'mob-q12',
      text: 'In Flutter, which function initializes the app UI?',
      options: [
        { id: 'mob-q12-a', text: 'runApp()', isCorrect: true },
        { id: 'mob-q12-b', text: 'initApp()', isCorrect: false },
        { id: 'mob-q12-c', text: 'startApp()', isCorrect: false },
        { id: 'mob-q12-d', text: 'loadApp()', isCorrect: false },
      ],
    },
    {
      id: 'mob-q13',
      text: 'How can you access device features like camera in React Native?',
      options: [
        {
          id: 'mob-q13-a',
          text: 'Using community packages like react-native-camera',
          isCorrect: true,
        },
        {
          id: 'mob-q13-b',
          text: 'Directly using JavaScript APIs',
          isCorrect: false,
        },
        { id: 'mob-q13-c', text: 'Using Redux', isCorrect: false },
        { id: 'mob-q13-d', text: 'With Expo only', isCorrect: false },
      ],
    },
    {
      id: 'mob-q14',
      text: 'Which layout model does Flutter use?',
      options: [
        { id: 'mob-q14-a', text: 'Widget tree', isCorrect: true },
        { id: 'mob-q14-b', text: 'DOM model', isCorrect: false },
        { id: 'mob-q14-c', text: 'Box model', isCorrect: false },
        { id: 'mob-q14-d', text: 'Flexbox only', isCorrect: false },
      ],
    },
    {
      id: 'mob-q15',
      text: 'What is the function of the React Native bridge?',
      options: [
        {
          id: 'mob-q15-a',
          text: 'Connects JavaScript and native code',
          isCorrect: true,
        },
        { id: 'mob-q15-b', text: 'Connects app to internet', isCorrect: false },
        { id: 'mob-q15-c', text: 'Renders UI only', isCorrect: false },
        {
          id: 'mob-q15-d',
          text: 'Handles push notifications',
          isCorrect: false,
        },
      ],
    },
    {
      id: 'mob-q16',
      text: 'Which annotation is used in Android to request permissions at runtime?',
      options: [
        { id: 'mob-q16-a', text: '@RequiresPermission', isCorrect: true },
        { id: 'mob-q16-b', text: '@GrantAccess', isCorrect: false },
        { id: 'mob-q16-c', text: '@AskPermission', isCorrect: false },
        { id: 'mob-q16-d', text: '@PermissionCheck', isCorrect: false },
      ],
    },
    {
      id: 'mob-q17',
      text: 'Which of the following tools is used for performance profiling in Flutter?',
      options: [
        { id: 'mob-q17-a', text: 'DevTools', isCorrect: true },
        { id: 'mob-q17-b', text: 'Inspector Gadget', isCorrect: false },
        { id: 'mob-q17-c', text: 'Chrome Console', isCorrect: false },
        { id: 'mob-q17-d', text: 'React Profiler', isCorrect: false },
      ],
    },
    {
      id: 'mob-q18',
      text: 'How do React Native apps interact with native modules?',
      options: [
        {
          id: 'mob-q18-a',
          text: 'Through Native Modules and Bridge APIs',
          isCorrect: true,
        },
        { id: 'mob-q18-b', text: 'Via Redux', isCorrect: false },
        { id: 'mob-q18-c', text: 'Using REST APIs', isCorrect: false },
        { id: 'mob-q18-d', text: 'Direct JavaScript import', isCorrect: false },
      ],
    },
    {
      id: 'mob-q19',
      text: 'In Flutter, what is the role of the "BuildContext"?',
      options: [
        {
          id: 'mob-q19-a',
          text: 'Provides location of widget in widget tree',
          isCorrect: true,
        },
        { id: 'mob-q19-b', text: 'Stores theme data', isCorrect: false },
        { id: 'mob-q19-c', text: 'Handles routing', isCorrect: false },
        { id: 'mob-q19-d', text: 'Renders widgets', isCorrect: false },
      ],
    },
    {
      id: 'mob-q20',
      text: 'Which tool allows you to write and test iOS apps on Windows in React Native?',
      options: [
        {
          id: 'mob-q20-a',
          text: 'Expo Go (with limitations)',
          isCorrect: true,
        },
        { id: 'mob-q20-b', text: 'Xcode', isCorrect: false },
        { id: 'mob-q20-c', text: 'Android Studio', isCorrect: false },
        { id: 'mob-q20-d', text: 'Visual Studio for Mac', isCorrect: false },
      ],
    },
  ],
  'quiz-5': [
    //   {
    //     id: 'cloud-q1',
    //     text: 'What is Docker primarily used for?',
    //     options: [
    //       { id: 'cloud-q1-a', text: 'Container virtualization', isCorrect: true },
    //       {
    //         id: 'cloud-q1-b',
    //         text: 'Full system virtualization',
    //         isCorrect: false,
    //       },
    //       { id: 'cloud-q1-c', text: 'Network monitoring', isCorrect: false },
    //       { id: 'cloud-q1-d', text: 'Database management', isCorrect: false },
    //     ],
    //   },
    //   {
    //     id: 'cloud-q2',
    //     text: 'Which AWS service is used for serverless computing?',
    //     options: [
    //       { id: 'cloud-q2-a', text: 'Lambda', isCorrect: true },
    //       { id: 'cloud-q2-b', text: 'EC2', isCorrect: false },
    //       { id: 'cloud-q2-c', text: 'S3', isCorrect: false },
    //       { id: 'cloud-q2-d', text: 'RDS', isCorrect: false },
    //     ],
    //   },
    // ],

    {
      id: 'cloud-q1',
      text: 'What is Docker primarily used for?',
      options: [
        { id: 'cloud-q1-a', text: 'Container virtualization', isCorrect: true },
        {
          id: 'cloud-q1-b',
          text: 'Full system virtualization',
          isCorrect: false,
        },
        { id: 'cloud-q1-c', text: 'Network monitoring', isCorrect: false },
        { id: 'cloud-q1-d', text: 'Database management', isCorrect: false },
      ],
    },
    {
      id: 'cloud-q2',
      text: 'Which AWS service is used for serverless computing?',
      options: [
        { id: 'cloud-q2-a', text: 'Lambda', isCorrect: true },
        { id: 'cloud-q2-b', text: 'EC2', isCorrect: false },
        { id: 'cloud-q2-c', text: 'S3', isCorrect: false },
        { id: 'cloud-q2-d', text: 'RDS', isCorrect: false },
      ],
    },
    {
      id: 'cloud-q3',
      text: 'What does CI/CD stand for?',
      options: [
        {
          id: 'cloud-q3-a',
          text: 'Continuous Integration / Continuous Delivery',
          isCorrect: true,
        },
        {
          id: 'cloud-q3-b',
          text: 'Code Integration / Code Deployment',
          isCorrect: false,
        },
        {
          id: 'cloud-q3-c',
          text: 'Cloud Infrastructure / Cloud Deployment',
          isCorrect: false,
        },
        {
          id: 'cloud-q3-d',
          text: 'Central Integration / Central Distribution',
          isCorrect: false,
        },
      ],
    },
    {
      id: 'cloud-q4',
      text: 'Which tool is commonly used for Infrastructure as Code?',
      options: [
        { id: 'cloud-q4-a', text: 'Terraform', isCorrect: true },
        { id: 'cloud-q4-b', text: 'Jenkins', isCorrect: false },
        { id: 'cloud-q4-c', text: 'Kubernetes', isCorrect: false },
        { id: 'cloud-q4-d', text: 'Docker', isCorrect: false },
      ],
    },
    {
      id: 'cloud-q5',
      text: 'What is the purpose of Kubernetes?',
      options: [
        { id: 'cloud-q5-a', text: 'Orchestrating containers', isCorrect: true },
        { id: 'cloud-q5-b', text: 'Running serverless code', isCorrect: false },
        { id: 'cloud-q5-c', text: 'Creating VMs', isCorrect: false },
        { id: 'cloud-q5-d', text: 'Monitoring logs', isCorrect: false },
      ],
    },
    {
      id: 'cloud-q6',
      text: 'Which AWS service provides object storage?',
      options: [
        { id: 'cloud-q6-a', text: 'Amazon S3', isCorrect: true },
        { id: 'cloud-q6-b', text: 'Amazon RDS', isCorrect: false },
        { id: 'cloud-q6-c', text: 'Amazon EC2', isCorrect: false },
        { id: 'cloud-q6-d', text: 'Amazon Lambda', isCorrect: false },
      ],
    },
    {
      id: 'cloud-q7',
      text: 'What is Jenkins commonly used for?',
      options: [
        { id: 'cloud-q7-a', text: 'CI/CD automation', isCorrect: true },
        { id: 'cloud-q7-b', text: 'Cloud storage', isCorrect: false },
        { id: 'cloud-q7-c', text: 'Logging and monitoring', isCorrect: false },
        {
          id: 'cloud-q7-d',
          text: 'Virtual machine creation',
          isCorrect: false,
        },
      ],
    },
    {
      id: 'cloud-q8',
      text: 'Which service allows you to manage containerized applications in AWS?',
      options: [
        { id: 'cloud-q8-a', text: 'ECS', isCorrect: true },
        { id: 'cloud-q8-b', text: 'Lambda', isCorrect: false },
        { id: 'cloud-q8-c', text: 'RDS', isCorrect: false },
        { id: 'cloud-q8-d', text: 'VPC', isCorrect: false },
      ],
    },
    {
      id: 'cloud-q9',
      text: 'What is a Helm chart in Kubernetes?',
      options: [
        {
          id: 'cloud-q9-a',
          text: 'A package manager for Kubernetes applications',
          isCorrect: true,
        },
        { id: 'cloud-q9-b', text: 'A logging tool', isCorrect: false },
        { id: 'cloud-q9-c', text: 'A CI/CD pipeline', isCorrect: false },
        { id: 'cloud-q9-d', text: 'A container registry', isCorrect: false },
      ],
    },
    {
      id: 'cloud-q10',
      text: 'What does the "Immutable Infrastructure" principle promote?',
      options: [
        {
          id: 'cloud-q10-a',
          text: 'Deploying fresh instances instead of modifying existing ones',
          isCorrect: true,
        },
        {
          id: 'cloud-q10-b',
          text: 'Editing servers in production',
          isCorrect: false,
        },
        {
          id: 'cloud-q10-c',
          text: 'Manual configuration of servers',
          isCorrect: false,
        },
        {
          id: 'cloud-q10-d',
          text: 'Using VMs over containers',
          isCorrect: false,
        },
      ],
    },
    {
      id: 'cloud-q11',
      text: 'Which CI/CD tool uses pipelines as code defined in a YAML file?',
      options: [
        { id: 'cloud-q11-a', text: 'GitLab CI/CD', isCorrect: true },
        { id: 'cloud-q11-b', text: 'Docker', isCorrect: false },
        { id: 'cloud-q11-c', text: 'Kubernetes', isCorrect: false },
        { id: 'cloud-q11-d', text: 'S3', isCorrect: false },
      ],
    },
    {
      id: 'cloud-q12',
      text: 'Which of the following is a popular logging and monitoring stack?',
      options: [
        { id: 'cloud-q12-a', text: 'ELK Stack', isCorrect: true },
        { id: 'cloud-q12-b', text: 'CI/CD Stack', isCorrect: false },
        { id: 'cloud-q12-c', text: 'S3 & CloudFront', isCorrect: false },
        { id: 'cloud-q12-d', text: 'IAM Stack', isCorrect: false },
      ],
    },
    {
      id: 'cloud-q13',
      text: 'What does "blue/green deployment" refer to?',
      options: [
        {
          id: 'cloud-q13-a',
          text: 'Deploying a new version alongside the old one for testing',
          isCorrect: true,
        },
        {
          id: 'cloud-q13-b',
          text: 'Deploying code in different regions',
          isCorrect: false,
        },
        {
          id: 'cloud-q13-c',
          text: 'Testing on multiple OS platforms',
          isCorrect: false,
        },
        {
          id: 'cloud-q13-d',
          text: 'Using multiple cloud providers',
          isCorrect: false,
        },
      ],
    },
    {
      id: 'cloud-q14',
      text: 'Which tool helps visualize and monitor Kubernetes clusters?',
      options: [
        { id: 'cloud-q14-a', text: 'Lens', isCorrect: true },
        { id: 'cloud-q14-b', text: 'Vim', isCorrect: false },
        { id: 'cloud-q14-c', text: 'EBS', isCorrect: false },
        { id: 'cloud-q14-d', text: 'Apache', isCorrect: false },
      ],
    },
    {
      id: 'cloud-q15',
      text: 'In Kubernetes, what is a DaemonSet used for?',
      options: [
        {
          id: 'cloud-q15-a',
          text: 'Running a pod on every node',
          isCorrect: true,
        },
        {
          id: 'cloud-q15-b',
          text: 'Ensuring high availability',
          isCorrect: false,
        },
        {
          id: 'cloud-q15-c',
          text: 'Performing rolling updates',
          isCorrect: false,
        },
        { id: 'cloud-q15-d', text: 'Monitoring clusters', isCorrect: false },
      ],
    },
    {
      id: 'cloud-q16',
      text: 'In Terraform, which command shows the changes that will be applied?',
      options: [
        { id: 'cloud-q16-a', text: 'terraform plan', isCorrect: true },
        { id: 'cloud-q16-b', text: 'terraform apply', isCorrect: false },
        { id: 'cloud-q16-c', text: 'terraform init', isCorrect: false },
        { id: 'cloud-q16-d', text: 'terraform show', isCorrect: false },
      ],
    },
    {
      id: 'cloud-q17',
      text: 'What’s the main benefit of using a service mesh like Istio?',
      options: [
        {
          id: 'cloud-q17-a',
          text: 'Managing service-to-service communication',
          isCorrect: true,
        },
        {
          id: 'cloud-q17-b',
          text: 'Managing CI/CD pipelines',
          isCorrect: false,
        },
        { id: 'cloud-q17-c', text: 'Creating VMs', isCorrect: false },
        {
          id: 'cloud-q17-d',
          text: 'Running containers locally',
          isCorrect: false,
        },
      ],
    },
    {
      id: 'cloud-q18',
      text: 'What is the role of etcd in Kubernetes?',
      options: [
        {
          id: 'cloud-q18-a',
          text: 'It stores the cluster configuration/state',
          isCorrect: true,
        },
        { id: 'cloud-q18-b', text: 'It monitors logs', isCorrect: false },
        {
          id: 'cloud-q18-c',
          text: 'It deploys applications',
          isCorrect: false,
        },
        {
          id: 'cloud-q18-d',
          text: 'It manages authentication',
          isCorrect: false,
        },
      ],
    },
    {
      id: 'cloud-q19',
      text: 'What is "canary deployment"?',
      options: [
        {
          id: 'cloud-q19-a',
          text: 'Releasing to a small group before full deployment',
          isCorrect: true,
        },
        {
          id: 'cloud-q19-b',
          text: 'Deploying in multiple regions at once',
          isCorrect: false,
        },
        {
          id: 'cloud-q19-c',
          text: 'Using a different color UI in staging',
          isCorrect: false,
        },
        {
          id: 'cloud-q19-d',
          text: 'Switching to disaster recovery',
          isCorrect: false,
        },
      ],
    },
    {
      id: 'cloud-q20',
      text: 'Which Kubernetes object helps in zero-downtime deployments?',
      options: [
        { id: 'cloud-q20-a', text: 'Deployment', isCorrect: true },
        { id: 'cloud-q20-b', text: 'Pod', isCorrect: false },
        { id: 'cloud-q20-c', text: 'Service', isCorrect: false },
        { id: 'cloud-q20-d', text: 'Job', isCorrect: false },
      ],
    },
  ],

  'quiz-6': [
    {
      id: 'sec-q1',
      text: 'What is the purpose of SSL/TLS?',
      options: [
        {
          id: 'sec-q1-a',
          text: 'Secure communication over networks',
          isCorrect: true,
        },
        { id: 'sec-q1-b', text: 'Database encryption', isCorrect: false },
        { id: 'sec-q1-c', text: 'Password hashing', isCorrect: false },
        { id: 'sec-q1-d', text: 'File compression', isCorrect: false },
      ],
    },
    {
      id: 'sec-q2',
      text: 'Which of the following is NOT a common type of cyber attack?',
      options: [
        { id: 'sec-q2-a', text: 'Data Compression Attack', isCorrect: true },
        { id: 'sec-q2-b', text: 'SQL Injection', isCorrect: false },
        {
          id: 'sec-q2-c',
          text: 'Cross-Site Scripting (XSS)',
          isCorrect: false,
        },
        { id: 'sec-q2-d', text: 'DDoS Attack', isCorrect: false },
      ],
    },
    {
      id: 'sec-q3',
      text: 'What does the term "phishing" refer to?',
      options: [
        { id: 'sec-q3-a', text: 'A type of malware', isCorrect: false },
        {
          id: 'sec-q3-b',
          text: 'Social engineering to steal credentials',
          isCorrect: true,
        },
        {
          id: 'sec-q3-c',
          text: 'Network scanning technique',
          isCorrect: false,
        },
        { id: 'sec-q3-d', text: 'File encryption tool', isCorrect: false },
      ],
    },
    {
      id: 'sec-q4',
      text: 'What is a firewall used for?',
      options: [
        { id: 'sec-q4-a', text: 'Speeding up your computer', isCorrect: false },
        {
          id: 'sec-q4-b',
          text: 'Blocking unauthorized access',
          isCorrect: true,
        },
        { id: 'sec-q4-c', text: 'Encrypting files', isCorrect: false },
        { id: 'sec-q4-d', text: 'Scanning for viruses', isCorrect: false },
      ],
    },
    {
      id: 'sec-q5',
      text: 'Which of these is a strong password?',
      options: [
        { id: 'sec-q5-a', text: '123456', isCorrect: false },
        { id: 'sec-q5-b', text: 'password', isCorrect: false },
        { id: 'sec-q5-c', text: 'Pa$5w0rD!', isCorrect: true },
        { id: 'sec-q5-d', text: 'qwerty', isCorrect: false },
      ],
    },
    {
      id: 'sec-q6',
      text: 'Which protocol is used to securely transfer files?',
      options: [
        { id: 'sec-q6-a', text: 'FTP', isCorrect: false },
        { id: 'sec-q6-b', text: 'SFTP', isCorrect: true },
        { id: 'sec-q6-c', text: 'HTTP', isCorrect: false },
        { id: 'sec-q6-d', text: 'SMTP', isCorrect: false },
      ],
    },
    {
      id: 'sec-q7',
      text: 'What is malware?',
      options: [
        { id: 'sec-q7-a', text: 'A type of software update', isCorrect: false },
        { id: 'sec-q7-b', text: 'A legitimate program', isCorrect: false },
        {
          id: 'sec-q7-c',
          text: 'Malicious software designed to harm systems',
          isCorrect: true,
        },
        { id: 'sec-q7-d', text: 'A debugging tool', isCorrect: false },
      ],
    },
    {
      id: 'sec-q8',
      text: 'Which attack involves injecting code into a website?',
      options: [
        { id: 'sec-q8-a', text: 'DDoS', isCorrect: false },
        { id: 'sec-q8-b', text: 'XSS', isCorrect: true },
        { id: 'sec-q8-c', text: 'Brute force', isCorrect: false },
        { id: 'sec-q8-d', text: 'Sniffing', isCorrect: false },
      ],
    },
    {
      id: 'sec-q9',
      text: 'What is the goal of encryption?',
      options: [
        { id: 'sec-q9-a', text: 'To delete files', isCorrect: false },
        {
          id: 'sec-q9-b',
          text: 'To hide data from unauthorized users',
          isCorrect: true,
        },
        {
          id: 'sec-q9-c',
          text: 'To increase internet speed',
          isCorrect: false,
        },
        {
          id: 'sec-q9-d',
          text: 'To monitor network traffic',
          isCorrect: false,
        },
      ],
    },
    {
      id: 'sec-q10',
      text: 'Which of the following is an example of two-factor authentication?',
      options: [
        { id: 'sec-q10-a', text: 'Password only', isCorrect: false },
        { id: 'sec-q10-b', text: 'PIN code only', isCorrect: false },
        { id: 'sec-q10-c', text: 'Password + OTP on phone', isCorrect: true },
        { id: 'sec-q10-d', text: 'Username only', isCorrect: false },
      ],
    },
    {
      id: 'sec-q11',
      text: 'What does VPN stand for?',
      options: [
        { id: 'sec-q11-a', text: 'Virtual Private Network', isCorrect: true },
        { id: 'sec-q11-b', text: 'Visual Protocol Node', isCorrect: false },
        { id: 'sec-q11-c', text: 'Variable Packet Network', isCorrect: false },
        { id: 'sec-q11-d', text: 'Verified Protection Net', isCorrect: false },
      ],
    },
    {
      id: 'sec-q12',
      text: 'What is social engineering?',
      options: [
        {
          id: 'sec-q12-a',
          text: 'Using tools to hack a system',
          isCorrect: false,
        },
        {
          id: 'sec-q12-b',
          text: 'Manipulating people to reveal confidential information',
          isCorrect: true,
        },
        { id: 'sec-q12-c', text: 'Testing network speed', isCorrect: false },
        {
          id: 'sec-q12-d',
          text: 'Designing social media apps',
          isCorrect: false,
        },
      ],
    },
    {
      id: 'sec-q13',
      text: 'Which one is a common form of malware?',
      options: [
        { id: 'sec-q13-a', text: 'Trojan Horse', isCorrect: true },
        { id: 'sec-q13-b', text: 'Sitemap', isCorrect: false },
        { id: 'sec-q13-c', text: 'DNS', isCorrect: false },
        { id: 'sec-q13-d', text: 'Pixel', isCorrect: false },
      ],
    },
    {
      id: 'sec-q14',
      text: 'What is a brute-force attack?',
      options: [
        {
          id: 'sec-q14-a',
          text: 'Scanning networks for vulnerabilities',
          isCorrect: false,
        },
        {
          id: 'sec-q14-b',
          text: 'Trying many passwords to gain access',
          isCorrect: true,
        },
        { id: 'sec-q14-c', text: 'Encrypting files', isCorrect: false },
        { id: 'sec-q14-d', text: 'Phishing emails', isCorrect: false },
      ],
    },
    {
      id: 'sec-q15',
      text: 'What is a digital certificate used for?',
      options: [
        { id: 'sec-q15-a', text: 'To store passwords', isCorrect: false },
        { id: 'sec-q15-b', text: 'To verify identity online', isCorrect: true },
        { id: 'sec-q15-c', text: 'To update antivirus', isCorrect: false },
        { id: 'sec-q15-d', text: 'To block spam', isCorrect: false },
      ],
    },
    {
      id: 'sec-q16',
      text: 'What does HTTPS stand for?',
      options: [
        {
          id: 'sec-q16-a',
          text: 'HyperText Transfer Protocol Secure',
          isCorrect: true,
        },
        {
          id: 'sec-q16-b',
          text: 'High Text Transfer Protocol Secure',
          isCorrect: false,
        },
        {
          id: 'sec-q16-c',
          text: 'HyperTool Transfer Secure',
          isCorrect: false,
        },
        {
          id: 'sec-q16-d',
          text: 'High Transfer Text Secure',
          isCorrect: false,
        },
      ],
    },
    {
      id: 'sec-q17',
      text: 'Which tool is used to analyze network packets?',
      options: [
        { id: 'sec-q17-a', text: 'Wireshark', isCorrect: true },
        { id: 'sec-q17-b', text: 'Photoshop', isCorrect: false },
        { id: 'sec-q17-c', text: 'Slack', isCorrect: false },
        { id: 'sec-q17-d', text: 'Trello', isCorrect: false },
      ],
    },
    {
      id: 'sec-q18',
      text: 'What is the main goal of penetration testing?',
      options: [
        { id: 'sec-q18-a', text: 'Improve UI', isCorrect: false },
        {
          id: 'sec-q18-b',
          text: 'Check hardware compatibility',
          isCorrect: false,
        },
        {
          id: 'sec-q18-c',
          text: 'Find security vulnerabilities',
          isCorrect: true,
        },
        { id: 'sec-q18-d', text: 'Speed up loading time', isCorrect: false },
      ],
    },
    {
      id: 'sec-q19',
      text: 'What is ransomware?',
      options: [
        { id: 'sec-q19-a', text: 'A type of firewall', isCorrect: false },
        {
          id: 'sec-q19-b',
          text: 'Malware that demands payment to unlock files',
          isCorrect: true,
        },
        { id: 'sec-q19-c', text: 'Antivirus software', isCorrect: false },
        { id: 'sec-q19-d', text: 'Secure messaging tool', isCorrect: false },
      ],
    },
    {
      id: 'sec-q20',
      text: 'Which of these is considered a secure authentication method?',
      options: [
        { id: 'sec-q20-a', text: 'Plaintext passwords', isCorrect: false },
        { id: 'sec-q20-b', text: 'Hashed passwords', isCorrect: true },
        { id: 'sec-q20-c', text: 'Usernames only', isCorrect: false },
        { id: 'sec-q20-d', text: 'Birthday as password', isCorrect: false },
      ],
    },
    {
      id: 'sec-q21',
      text: 'What kind of cyber attack involves overwhelming a system with traffic?',
      options: [
        { id: 'sec-q21-a', text: 'SQL Injection', isCorrect: false },
        { id: 'sec-q21-b', text: 'DDoS', isCorrect: true },
        { id: 'sec-q21-c', text: 'Phishing', isCorrect: false },
        { id: 'sec-q21-d', text: 'XSS', isCorrect: false },
      ],
    },
    {
      id: 'sec-q22',
      text: 'What is the function of antivirus software?',
      options: [
        { id: 'sec-q22-a', text: 'Designing firewalls', isCorrect: false },
        { id: 'sec-q22-b', text: 'Creating backups', isCorrect: false },
        {
          id: 'sec-q22-c',
          text: 'Detecting and removing malware',
          isCorrect: true,
        },
        {
          id: 'sec-q22-d',
          text: 'Increasing internet speed',
          isCorrect: false,
        },
      ],
    },
    {
      id: 'sec-q23',
      text: 'Which cryptographic algorithm is asymmetric?',
      options: [
        { id: 'sec-q23-a', text: 'AES', isCorrect: false },
        { id: 'sec-q23-b', text: 'RSA', isCorrect: true },
        { id: 'sec-q23-c', text: 'SHA-256', isCorrect: false },
        { id: 'sec-q23-d', text: 'MD5', isCorrect: false },
      ],
    },
    {
      id: 'sec-q24',
      text: 'What is the main purpose of a nonce in cryptographic protocols?',
      options: [
        { id: 'sec-q24-a', text: 'To store passwords', isCorrect: false },
        { id: 'sec-q24-b', text: 'To prevent replay attacks', isCorrect: true },
        { id: 'sec-q24-c', text: 'To hash data', isCorrect: false },
        { id: 'sec-q24-d', text: 'To generate random keys', isCorrect: false },
      ],
    },
    {
      id: 'sec-q25',
      text: 'What type of vulnerability does a buffer overflow exploit?',
      options: [
        { id: 'sec-q25-a', text: 'Authentication bypass', isCorrect: false },
        { id: 'sec-q25-b', text: 'Memory corruption', isCorrect: true },
        { id: 'sec-q25-c', text: 'Weak encryption', isCorrect: false },
        { id: 'sec-q25-d', text: 'Cross-site scripting', isCorrect: false },
      ],
    },
    {
      id: 'sec-q26',
      text: 'Which of the following is a characteristic of elliptic curve cryptography (ECC)?',
      options: [
        {
          id: 'sec-q26-a',
          text: 'Requires very large key sizes for security',
          isCorrect: false,
        },
        {
          id: 'sec-q26-b',
          text: 'Uses large prime numbers only',
          isCorrect: false,
        },
        {
          id: 'sec-q26-c',
          text: 'Provides strong security with smaller key sizes',
          isCorrect: true,
        },
        {
          id: 'sec-q26-d',
          text: 'Only works with symmetric encryption',
          isCorrect: false,
        },
      ],
    },
    {
      id: 'sec-q27',
      text: 'Which port is commonly used by HTTPS?',
      options: [
        { id: 'sec-q27-a', text: '21', isCorrect: false },
        { id: 'sec-q27-b', text: '443', isCorrect: true },
        { id: 'sec-q27-c', text: '80', isCorrect: false },
        { id: 'sec-q27-d', text: '25', isCorrect: false },
      ],
    },
    {
      id: 'sec-q28',
      text: 'What is the purpose of a honeypot in cybersecurity?',
      options: [
        { id: 'sec-q28-a', text: 'Encrypt data', isCorrect: false },
        {
          id: 'sec-q28-b',
          text: 'Monitor and attract attackers',
          isCorrect: true,
        },
        { id: 'sec-q28-c', text: 'Store backups', isCorrect: false },
        {
          id: 'sec-q28-d',
          text: 'Improve firewall efficiency',
          isCorrect: false,
        },
      ],
    },
    {
      id: 'sec-q29',
      text: 'In a PKI, what entity issues and verifies digital certificates?',
      options: [
        { id: 'sec-q29-a', text: 'Firewall', isCorrect: false },
        { id: 'sec-q29-b', text: 'Certificate Authority', isCorrect: true },
        { id: 'sec-q29-c', text: 'Proxy Server', isCorrect: false },
        { id: 'sec-q29-d', text: 'Web Server', isCorrect: false },
      ],
    },
    {
      id: 'sec-q30',
      text: 'What is a zero-day vulnerability?',
      options: [
        {
          id: 'sec-q30-a',
          text: 'A vulnerability with a known patch',
          isCorrect: false,
        },
        {
          id: 'sec-q30-b',
          text: 'A vulnerability exploited before it is known by the vendor',
          isCorrect: true,
        },
        {
          id: 'sec-q30-c',
          text: 'An outdated version of software',
          isCorrect: false,
        },
        { id: 'sec-q30-d', text: 'A patched vulnerability', isCorrect: false },
      ],
    },
    {
      id: 'sec-q31',
      text: 'Which tool is commonly used for password cracking?',
      options: [
        { id: 'sec-q31-a', text: 'Metasploit', isCorrect: false },
        { id: 'sec-q31-b', text: 'Wireshark', isCorrect: false },
        { id: 'sec-q31-c', text: 'John the Ripper', isCorrect: true },
        { id: 'sec-q31-d', text: 'Nmap', isCorrect: false },
      ],
    },
    {
      id: 'sec-q32',
      text: 'What is the primary risk of using deprecated cryptographic algorithms like MD5?',
      options: [
        { id: 'sec-q32-a', text: 'They are too slow', isCorrect: false },
        {
          id: 'sec-q32-b',
          text: 'They require too much bandwidth',
          isCorrect: false,
        },
        {
          id: 'sec-q32-c',
          text: 'They are vulnerable to collision attacks',
          isCorrect: true,
        },
        { id: 'sec-q32-d', text: 'They use too much memory', isCorrect: false },
      ],
    },
  ],
};
// Function to shuffle array
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Function to get random questions
function getRandomQuestions(quizId: string, count: number) {
  const questions = questionBanks[quizId as keyof typeof questionBanks] || [];
  return shuffleArray(questions).slice(0, count);
}

export const mockQuizzes: Quiz[] = [
  {
    id: 'quiz-1',
    title: 'JavaScript Fundamentals',
    description:
      'Test your knowledge of JavaScript basics including variables, functions, and control flow.',
    duration: 15,
    category: 'Web Development',
    level: 'Beginner',
    imageUrl:
      'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
    questions: getRandomQuestions('quiz-1', 10),
  },
  {
    id: 'quiz-2',
    title: 'React Basics',
    description:
      'Test your understanding of React components, props, and state management.',
    duration: 20,
    category: 'Web Development',
    level: 'Intermediate',
    imageUrl:
      'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg',
    questions: getRandomQuestions('quiz-2', 10),
  },
  {
    id: 'quiz-3',
    title: 'Data Science Fundamentals',
    description:
      'Test your knowledge of data analysis, statistics, and Python libraries.',
    duration: 25,
    category: 'Data Science',
    level: 'Intermediate',
    imageUrl:
      'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg',
    questions: getRandomQuestions('quiz-3', 10),
  },
  {
    id: 'quiz-4',
    title: 'Mobile Development',
    description:
      'Test your understanding of React Native and mobile app development concepts.',
    duration: 20,
    category: 'Mobile Development',
    level: 'Intermediate',
    imageUrl:
      'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg',
    questions: getRandomQuestions('quiz-4', 10),
  },
  {
    id: 'quiz-5',
    title: 'Cloud Computing & DevOps',
    description:
      'Test your knowledge of cloud services, containerization, and deployment practices.',
    duration: 30,
    category: 'Cloud Computing',
    level: 'Advanced',
    imageUrl:
      'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg',
    questions: getRandomQuestions('quiz-5', 10),
  },
  {
    id: 'quiz-6',
    title: 'Cybersecurity Basics',
    description:
      'Test your understanding of network security, cryptography, and ethical hacking.',
    duration: 25,
    category: 'Cybersecurity',
    level: 'Intermediate',
    imageUrl:
      'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg',
    questions: getRandomQuestions('quiz-6', 10),
  },
];

export { getRandomQuestions };
