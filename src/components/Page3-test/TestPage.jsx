import React, { useState } from 'react';

const AIQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const questions = [
    {
      id: 1,
      question: "Что такое искусственный интеллект?",
      options: [
        "Специальная программа для игры в шахматы",
        "Компьютерная система, способная выполнять задачи, требующие человеческого интеллекта, такие как обучение, восприятие и решение проблем",
        "Программа для обработки текстов",
        "Система для создания графических изображений"
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "Какой из следующих методов обучения является основным в искусственном интеллекте?",
      options: [
        "Логический вывод",
        "Обучение с подкреплением",
        "Блокчейн-аналитика",
        "Линейная регрессия"
      ],
      correctAnswer: 1
    },
    {
      id: 3,
      question: "Что такое нейронная сеть?",
      options: [
        "Система для хранения данных",
        "Компьютерная модель, вдохновленная структурой биологических нейронов",
        "Программа для обработки графики",
        "Метод для сжатия данных"
      ],
      correctAnswer: 1
    },
    {
      id: 4,
      question: "Какой из следующих методов обучения используется в машинном обучении?",
      options: [
        "Обучение с учителем",
        "Обучение без учителя",
        "Обучение с подкреплением",
        "Все вышеперечисленные"
      ],
      correctAnswer: 3
    },
    {
      id: 5,
      question: "Что такое глубокое обучение?",
      options: [
        "Метод машинного обучения без использования нейросетей",
        "Метод машинного обучения, основанный на использовании искусственных нейронных сетей с большим количеством слоев",
        "Метод для обработки текстовых данных",
        "Метод для создания графических изображений"
      ],
      correctAnswer: 1
    },
    {
      id: 6,
      question: "Какой из следующих методов используется для обработки естественного языка?",
      options: [
        "Обработка естественного языка (NLP)",
        "Компьютерное зрение",
        "Машинное обучение",
        "Нейросеть"
      ],
      correctAnswer: 0
    },
    {
      id: 7,
      question: "Что такое обучение с учителем?",
      options: [
        "Метод, при котором алгоритм использует неразмеченные данные",
        "Метод, при котором алгоритм использует размеченный набор данных с правильными ответами",
        "Метод для создания графических изображений",
        "Метод для обработки звуковых данных"
      ],
      correctAnswer: 1
    },
    {
      id: 8,
      question: "Что такое компьютерное зрение?",
      options: [
        "Область ИИ, занимающаяся разработкой систем для обработки и анализа изображений и видео",
        "Область ИИ, занимающаяся обработкой естественного языка",
        "Область ИИ, занимающаяся созданием игр",
        "Область ИИ, занимающаяся анализом данных"
      ],
      correctAnswer: 0
    },
    {
      id: 9,
      question: "Какой из следующих типов нейронных сетей используется для обработки изображений?",
      options: [
        "Рекуррентные нейронные сети",
        "Сверточные нейронные сети",
        "Нейронные сети прямого распространения",
        "Ассоциативные сети"
      ],
      correctAnswer: 1
    },
    {
      id: 10,
      question: "Что такое обработка естественного языка (NLP)?",
      options: [
        "Область ИИ, занимающаяся анализом, пониманием и генерацией человеческого языка",
        "Область ИИ, занимающаяся созданием графических изображений",
        "Область ИИ, занимающаяся анализом данных",
        "Область ИИ, занимающаяся распознаванием речи"
      ],
      correctAnswer: 0
    }
  ];

  const handleAnswerSelect = (questionId, answerIndex) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    setQuizCompleted(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    setQuizCompleted(false);
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach(question => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const getScoreColor = (score) => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return 'text-white';
    if (percentage >= 60) return 'text-yellow-300';
    return 'text-red-400';
  };

  if (quizCompleted) {
    const score = calculateScore();
    const percentage = Math.round((score / questions.length) * 100);
    
    return (
      <div className="learn-container">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Тест завершен!</h2>
          <p className="text-gray-400">Вы прошли тест по искусственному интеллекту и нейросетям</p>
        </div>
        
        <div className="bg-[#1f1f1f] border border-[rgba(255,255,255,0.1)] rounded-xl p-8 mb-8 text-center">
          <div className="text-6xl font-bold mb-4">
            <span className={getScoreColor(score)}>{score}</span>
            <span className="text-gray-500"> / {questions.length}</span>
          </div>
          <div className="text-2xl font-semibold mb-2">Ваш результат</div>
          <div className="text-xl text-gray-300 mb-4">{percentage}% правильных ответов</div>
          <div className="text-lg text-gray-300">
            {percentage >= 80 ? 'Отлично! Вы хорошо разбираетесь в ИИ!' : 
             percentage >= 60 ? 'Хорошо! Вы имеете базовые знания в этой области' : 
             'Попробуйте пройти тест еще раз для лучшего понимания'}
          </div>
        </div>
        
        <div className="flex justify-center">
          <button
            onClick={resetQuiz}
            className="px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors duration-200"
          >
            Пройти тест заново
          </button>
        </div>
      </div>
    );
  }

  if (showResults) {
    const score = calculateScore();
    return (
      <div className="learn-container">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Результаты теста</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-[#1f1f1f] p-6 rounded-lg border border-[rgba(255,255,255,0.1)]">
            <h3 className="text-lg font-semibold text-white mb-2">Правильных ответов</h3>
            <p className="text-3xl font-bold text-white">{score}</p>
          </div>
          <div className="bg-[#1f1f1f] p-6 rounded-lg border border-[rgba(255,255,255,0.1)]">
            <h3 className="text-lg font-semibold text-white mb-2">Процент правильных ответов</h3>
            <p className="text-3xl font-bold text-white">{Math.round((score / questions.length) * 100)}%</p>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-4">Разбор ответов:</h3>
          <div className="space-y-4">
            {questions.map((question, index) => {
              const userAnswer = selectedAnswers[question.id];
              const isCorrect = userAnswer === question.correctAnswer;
              return (
                <div key={question.id} className={`p-4 rounded-lg border ${isCorrect ? 'bg-green-900/30 border-green-700' : 'bg-red-900/30 border-red-700'}`}>
                  <div className="font-medium mb-2">
                    {index + 1}. {question.question}
                  </div>
                  <div className="text-sm">
                    <div className="mb-1">
                      <span className="font-semibold">Ваш ответ:</span> 
                      <span className={isCorrect ? 'text-green-300' : 'text-red-300'}>
                        {userAnswer !== undefined ? question.options[userAnswer] : 'Не отвечен'}
                      </span>
                    </div>
                    {!isCorrect && (
                      <div>
                        <span className="font-semibold">Правильный ответ:</span> 
                        <span className="text-green-300"> {question.options[question.correctAnswer]}</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            className="px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors duration-200"
          >
            Завершить тест
          </button>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <div className="learn-container">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-white">Тест по искусственному интеллекту и нейросетям</h2>
          <span className="text-sm text-gray-400">
            Вопрос {currentQuestion + 1} из {questions.length}
          </span>
        </div>
        
        <div className="w-full bg-[#333] rounded-full h-2.5 mb-6">
          <div 
            className="bg-white h-2.5 rounded-full transition-all duration-500" 
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-white mb-6">
          {currentQ.question}
        </h3>
        
        <div className="space-y-4">
          {currentQ.options.map((option, index) => (
            <label 
              key={index}
              className={`flex items-start p-4 rounded-lg border cursor-pointer transition-colors duration-200 ${
                selectedAnswers[currentQ.id] === index 
                  ? 'border-white bg-[rgba(255,255,255,0.1)]' 
                  : 'border-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.2)]'
              }`}
            >
              <input
                type="radio"
                name={`question-${currentQ.id}`}
                value={index}
                checked={selectedAnswers[currentQ.id] === index}
                onChange={() => handleAnswerSelect(currentQ.id, index)}
                className="mt-1 mr-3 h-5 w-5 text-white focus:ring-white"
              />
              <span className="text-gray-300">{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          className={`px-6 py-3 font-medium rounded-lg transition-colors duration-200 ${
            currentQuestion === 0 
              ? 'bg-[#333] text-gray-500 cursor-not-allowed' 
              : 'bg-[#333] text-white hover:bg-[#444]'
          }`}
        >
          Предыдущий
        </button>
        
        {currentQuestion < questions.length - 1 ? (
          <button
            onClick={handleNext}
            disabled={selectedAnswers[currentQ.id] === undefined}
            className={`px-6 py-3 font-medium rounded-lg transition-colors duration-200 ${
              selectedAnswers[currentQ.id] === undefined
                ? 'bg-[#333] text-gray-500 cursor-not-allowed'
                : 'bg-white text-black hover:bg-gray-200'
            }`}
          >
            Следующий
          </button>
        ) : (
          <button
            onClick={handleNext}
            disabled={selectedAnswers[currentQ.id] === undefined}
            className={`px-6 py-3 font-medium rounded-lg transition-colors duration-200 ${
              selectedAnswers[currentQ.id] === undefined
                ? 'bg-[#333] text-gray-500 cursor-not-allowed'
                : 'bg-white text-black hover:bg-gray-200'
            }`}
          >
            Завершить тест
          </button>
        )}
      </div>
    </div>
  );
};

export default AIQuiz;
