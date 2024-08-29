import React from 'react'
import { useState } from "react";
import "./quiz.css";
import Dashboard from './Dashboard';

export default function Quiz() {
    const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "HTML stands for?",
      options: [
        { id: 0, text: "HighText Marking Language", isCorrect: false },
        { id: 1, text: "HyperText Marking Language", isCorrect: false },
        { id: 2, text: "HyperText Machine Language", isCorrect: false },
        { id: 3, text: "HyperText Markup Language", isCorrect: true },
      ],
    },
    {
      text: " Which of the following tag is used to embed css in html page?",
      options: [
        { id: 0, text: "<style>", isCorrect: true },
        { id: 1, text: "<script>", isCorrect: false },
        { id: 2, text: "<!DOCTYPE html>", isCorrect: false },
        { id: 3, text: "<css>", isCorrect: false },
      ],
    },
    {
      text: "Which of the following CSS selectors are used to specify a group of elements?",
      options: [
        { id: 0, text: " class", isCorrect: true },
        { id: 1, text: "tag", isCorrect: false },
        { id: 2, text: "id", isCorrect: false },
        { id: 3, text: "both class and tag", isCorrect: false },
      ],
    },
    {
      text: "Which of the following CSS framework is used to create a responsive design?",
      options: [
        { id: 0, text: " larawell", isCorrect: false },
        { id: 1, text: "bootstrap", isCorrect: true },
        { id: 2, text: "rails", isCorrect: false },
        { id: 3, text: "django", isCorrect: false },
      ],
    },
    {
      text: "Which of the following CSS property sets the font size of text?",
      options: [
        { id: 0, text: "text-size", isCorrect: false },
        { id: 1, text: "font-size", isCorrect: true },
        { id: 2, text: "text", isCorrect: false },
        { id: 3, text: "size", isCorrect: false },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };
  return (
    <div>
      {<Dashboard/>}
         <div className="App">
      {/* 1. Header  */}
      <h1> Quiz </h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
    </div>
  )
}



  

 
   


