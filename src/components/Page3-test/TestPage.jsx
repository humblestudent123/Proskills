import React, { useState } from "react";
import "./test-page.css";

const AIQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answersChecked, setAnswersChecked] = useState({});

  const questions = [
    {
      id: 1,
      question: "Что такое искусственный интеллект?",
      options: [
        "Специальная программа для игры в шахматы",
        "Компьютерная система, способная выполнять задачи, требующие человеческого интеллекта",
        "Программа для обработки текстов",
        "Система для создания графических изображений"
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "Что такое нейронная сеть?",
      options: [
        "Система хранения данных",
        "Модель, вдохновленная работой мозга",
        "Графический редактор",
        "Браузер"
      ],
      correctAnswer: 1
    }
  ];

const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};


const [shuffledQuestions] = useState(() =>
  questions.map((q) => {
    const shuffledOptions = shuffleArray(q.options);

    return {
      ...q,
      options: shuffledOptions,
      correctAnswerIndex: shuffledOptions.indexOf(q.options[q.correctAnswer])
    };
  })
);

const handleAnswerSelect = (questionId, answerIndex) => {
  if (answersChecked[questionId] !== undefined) return;

  const question = shuffledQuestions.find(q => q.id === questionId);

  const isCorrect =
    question.correctAnswerIndex === answerIndex;

  setSelectedAnswers((prev) => ({
    ...prev,
    [questionId]: answerIndex,
  }));

  setAnswersChecked((prev) => ({
    ...prev,
    [questionId]: isCorrect,
  }));
};

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((p) => p + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((p) => p - 1);
    }
  };

  const calculateScore = () => {
    let correct = 0;

    shuffledQuestions.forEach((q) => {
      if (answersChecked[q.id]) {
        correct++;
      }
    });

    return correct;
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    setQuizCompleted(false);
  };

  if (quizCompleted) {
    const score = calculateScore();

    return (
      <div className="page">
        <h1>Тест завершён</h1>
        <div className="result-box">
          <h2>Ваш результат: {score} / {questions.length}</h2>
        </div>
        <button className="btn" onClick={resetQuiz}>
          Пройти заново
        </button>
      </div>
    );
  }

  if (showResults) {
    const score = calculateScore();

    return (
      <div className="page">
        <h1>Результаты</h1>

        <div className="result-box">
          <h2>Правильных ответов: {score}</h2>
        </div>

        <button className="btn" onClick={() => setQuizCompleted(true)}>
          Завершить
        </button>
      </div>
    );
  }

  const currentQ = shuffledQuestions[currentQuestion];

  return (
    <div className="page">
      <div className="header">
        <h1>Тест по ИИ</h1>
        <p>
          Вопрос {currentQuestion + 1} из {questions.length}
        </p>

        <div className="progress">
          <div
            className="progress-fill"
            style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`,
            }}
          />
        </div>
      </div>

      <div className="question-box">
        <h2>{currentQ.question}</h2>

        <div className="options">
          {currentQ.options.map((option, index) => {
            const isSelected = selectedAnswers[currentQ.id] === index;
            const isAnswered = answersChecked[currentQ.id] !== undefined;
            const isCorrect = currentQ.correctAnswerIndex === index;
          
            let className = "option";
          
            if (isAnswered) {
              if (isCorrect) className += " correct";
              else if (isSelected && !isCorrect) className += " wrong";
            }
          
            return (
              <label key={index} className={className}>
                <input
                  type="radio"
                  name={`q-${currentQ.id}`}
                  checked={isSelected}
                  onChange={() => handleAnswerSelect(currentQ.id, index)}
                />
                <span>{option}</span>
              </label>
            );
          })}
        </div>
      </div>

      <div className="buttons">
        <button onClick={handlePrevious} disabled={currentQuestion === 0}>
          Назад
        </button>

      <button
        onClick={handleNext}
        disabled={selectedAnswers[currentQ.id] === undefined}
      >
        {currentQuestion === questions.length - 1 ? "Завершить" : "Далее"}
      </button>
      </div>
    </div>
  );
};

export default AIQuiz;