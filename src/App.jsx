import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [screen, setScreen] = useState('intro'); // 'intro', 'quiz', 'results'
  const [questions, setQuestions] = useState([]); // Array of questions
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [results, setResults] = useState([]);

  // Sample quiz questions in the old format
  const sampleQuestions = {
    response_code: 0,
    results: [
      {
        category: 'React.js',
        type: 'boolean',
        difficulty: 'medium',
        question:
          'Is React is a JavaScript library for building user interfaces?',
        correct_answer: 'True',
        incorrect_answers: ['False'],
      },
      {
        category: 'React.js',
        type: 'boolean',
        difficulty: 'medium',
        question: 'Was React developed by Google?',
        correct_answer: 'False',
        incorrect_answers: ['True'],
      },
      {
        category: 'React.js',
        type: 'boolean',
        difficulty: 'medium',
        question: 'Does React uses a virtual DOM to improve performance?',
        correct_answer: 'True',
        incorrect_answers: ['False'],
      },
      {
        category: 'React.js',
        type: 'boolean',
        difficulty: 'medium',
        question: 'Can React components can have state and props?',
        correct_answer: 'True',
        incorrect_answers: ['False'],
      },
      {
        category: 'React.js',
        type: 'boolean',
        difficulty: 'medium',
        question: 'Does React supports server-side rendering (SSR)?',
        correct_answer: 'True',
        incorrect_answers: ['False'],
      },
      {
        category: 'React.js',
        type: 'boolean',
        difficulty: 'medium',
        question: 'Are React applications are typically written in TypeScript?',
        correct_answer: 'False',
        incorrect_answers: ['True'],
      },
      {
        category: 'React.js',
        type: 'boolean',
        difficulty: 'medium',
        question:
          'Can React Router be used for client-side routing in React applications?',
        correct_answer: 'True',
        incorrect_answers: ['False'],
      },
      {
        category: 'React.js',
        type: 'boolean',
        difficulty: 'medium',
        question: 'Are React hooks introduced in React version 16.8.?',
        correct_answer: 'True',
        incorrect_answers: ['False'],
      },
      {
        category: 'React.js',
        type: 'boolean',
        difficulty: 'medium',
        question:
          'Is React is primarily used for building mobile applications?',
        correct_answer: 'False',
        incorrect_answers: ['True'],
      },
      {
        category: 'React.js',
        type: 'boolean',
        difficulty: 'medium',
        question: 'Is React Native is used for building web applications?',
        correct_answer: 'False',
        incorrect_answers: ['True'],
      },
    ],
  };

  // Function to start the quiz
  const startQuiz = () => {
    setQuestions(sampleQuestions.results);
    setScreen('quiz');
  };

  // Function to handle user's answer (True or False)
  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion].correct_answer) {
      // If the answer is correct, increment the score
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setScreen('results');
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setScreen('intro');
    setQuestions([]);
  };

  useEffect(() => {}, []);

  return (
    <div className='App text-white d-flex justify-content-center align-items-center'>
      {screen === 'intro' && (
        <div className='intro-screen screen-container screen'>
          <h1 className='header'>Welcome to the React Quiz</h1>
          <button className='begin-button button' onClick={startQuiz}>
            BEGIN
          </button>
        </div>
      )}

      {screen === 'quiz' && (
        <div className='quiz-screen screen-container'>
          <h3>Category: {questions[currentQuestion].category}</h3>
          <div className='question-card'>
            <p>{questions[currentQuestion].question}</p>
            <button
              className='button quiz-button'
              onClick={() => handleAnswer('True')}>
              True
            </button>
            <button
              className='button quiz-button'
              onClick={() => handleAnswer('False')}>
              False
            </button>
          </div>
        </div>
      )}

      {screen === 'results' && (
        <div className='results-screen screen-container screen'>
          <h2>Results</h2>
          <p>
            Score: {score}/{questions.length}
          </p>
          <h3>Questions:</h3>
          <ol>
            {questions.map((question, index) => (
              <li key={index}>
                {question.question} - {results[index] ? 'Correct' : 'Incorrect'}
              </li>
            ))}
          </ol>
          <button className='button' onClick={restartQuiz}>
            PLAY AGAIN
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
