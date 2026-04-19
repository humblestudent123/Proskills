import React, { useState } from "react";
import "../Page3-test/test-page.css";

const ModelsTestPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answersChecked, setAnswersChecked] = useState({});

  const questions = [
    {
      id: 1,
      question: "Что обычно нужно установить для запуска локальных моделей ИИ?",
      options: [
        "Только браузер",
        "Python и библиотеки вроде transformers/torch",
        "Только видеоплеер",
        "Только графический редактор"
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "Где чаще всего ищут открытые модели для локального запуска?",
      options: [
        "Hugging Face и GitHub",
        "Только музыкальные сервисы",
        "Только социальные сети",
        "Только магазины игр"
      ],
      correctAnswer: 0
    },
    {
      id: 3,
      question: "Зачем желательно использовать GPU при работе с крупными моделями?",
      options: [
        "Чтобы ускорить вычисления и генерацию",
        "Чтобы изменить цвет интерфейса",
        "Чтобы не подключать интернет",
        "Чтобы уменьшить количество вопросов в тесте"
      ],
      correctAnswer: 0
    },
    {
      id: 4,
      question: "Какая библиотека чаще используется для генерации изображений локально?",
      options: [
        "diffusers",
        "pygame",
        "requests",
        "flask"
      ],
      correctAnswer: 0
    },
    {
      id: 5,
      question: "С чего безопаснее начинать изучение локальных моделей?",
      options: [
        "С самых крупных моделей на слабом ПК",
        "С небольших моделей и простых экспериментов",
        "С удаления драйверов видеокарты",
        "С отключения пакетного менеджера"
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

    const question = shuffledQuestions.find((q) => q.id === questionId);
    const isCorrect = question.correctAnswerIndex === answerIndex;

    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: answerIndex
    }));

    setAnswersChecked((prev) => ({
      ...prev,
      [questionId]: isCorrect
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
    setAnswersChecked({});
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
        <h1>Тест по теме моделей</h1>
        <p>
          Вопрос {currentQuestion + 1} из {questions.length}
        </p>

        <div className="progress">
          <div
            className="progress-fill"
            style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`
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

export default ModelsTestPage;

