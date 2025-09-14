import { useState } from 'react';
import './Quiz.css';

const quizQuestions = [
  {
    id: 1,
    question: "A particle of mass m moves in a potential V(x) = ½kx². What is the ground state energy?",
    options: ["ħω/2", "ħω", "3ħω/2", "2ħω"],
    correct: 0,
    explanation: "For a quantum harmonic oscillator, the ground state energy is E₀ = ħω/2, where ω = √(k/m)."
  },
  {
    id: 2,
    question: "In special relativity, what happens to the length of an object moving at velocity v?",
    options: ["Increases by γ", "Decreases by γ", "Remains constant", "Increases by v/c"],
    correct: 1,
    explanation: "Length contraction occurs: L = L₀/γ, where γ = 1/√(1-v²/c²)."
  },
  {
    id: 3,
    question: "The entropy of a black hole is proportional to:",
    options: ["Its mass", "Its volume", "Its surface area", "Its temperature"],
    correct: 2,
    explanation: "Bekenstein-Hawking entropy: S = A/4G, where A is the surface area of the event horizon."
  },
  {
    id: 4,
    question: "In quantum mechanics, the uncertainty principle states:",
    options: ["ΔxΔp ≥ ħ", "ΔxΔp ≥ ħ/2", "ΔxΔp = ħ", "ΔxΔp ≤ ħ/2"],
    correct: 1,
    explanation: "Heisenberg uncertainty principle: ΔxΔp ≥ ħ/2, where ħ = h/2π."
  }
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswer = (answerIndex) => {
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    if (answerIndex === quizQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizCompleted(false);
  };

  if (quizCompleted) {
    return (
      <div className="quiz">
        <div className="quiz-result">
          <h2>Quiz Completed!</h2>
          <p>Your Score: {score}/{quizQuestions.length}</p>
          <p className="score-message">
            {score === quizQuestions.length ? "Perfect! You're ready for JEE Advanced!" :
             score >= quizQuestions.length * 0.7 ? "Great job! Keep practicing!" :
             "Keep studying and try again!"}
          </p>
          <button onClick={resetQuiz} className="btn primary">Try Again</button>
        </div>
      </div>
    );
  }

  const question = quizQuestions[currentQuestion];

  return (
    <div className="quiz">
      <h1>Test Your Physics - JEE Advanced Level</h1>
      <div className="quiz-progress">
        Question {currentQuestion + 1} of {quizQuestions.length}
      </div>
      
      <div className="quiz-card">
        <h3>{question.question}</h3>
        <div className="options">
          {question.options.map((option, index) => (
            <button
              key={index}
              className={`option ${selectedAnswer === index ? 'selected' : ''} 
                         ${showResult && index === question.correct ? 'correct' : ''}
                         ${showResult && selectedAnswer === index && index !== question.correct ? 'incorrect' : ''}`}
              onClick={() => !showResult && handleAnswer(index)}
              disabled={showResult}
            >
              {option}
            </button>
          ))}
        </div>
        
        {showResult && (
          <div className="explanation">
            <h4>Explanation:</h4>
            <p>{question.explanation}</p>
            <button onClick={nextQuestion} className="btn primary">
              {currentQuestion < quizQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;