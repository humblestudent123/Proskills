import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Page2/second-page.css";
import NavModal from "../NavModal/NavModal";

export default function PromptsPage() {
  const [isOpen, setIsOpen] = useState(false);

  const topics = [
    { id: 1, title: "1 - Начало работы с ИИ", path: "/intro" },
    { id: 2, title: "2 - Установка и поиск моделей", path: "/models" },
    { id: 3, title: "3 - Корректные запросы", path: "/prompts" }
  ];

  return (
    <div className="learn-container">
      <header className="learn-header">
        <h1>Корректные запросы</h1>
        <p className="subtitle">
          Как формулировать запросы к ИИ, чтобы получать точные и полезные
          результаты
        </p>
      </header>

      <section className="theory">
        <div className="card">
          <h2>Что такое корректный запрос (Prompt)</h2>
          <p>
            Prompt - это текст, который мы передаем модели ИИ для получения
            ответа или генерации контента. От того, как сформулирован запрос,
            напрямую зависит качество результата.
          </p>
        </div>

        <div className="card">
          <h2>Принципы эффективного запроса</h2>
          <ul>
            <li>
              <strong>Конкретность:</strong> чем точнее задача, тем полезнее
              ответ.
            </li>
            <li>
              <strong>Контекст:</strong> добавляйте важные детали и ограничения.
            </li>
            <li>
              <strong>Формат ответа:</strong> указывайте, что нужно получить:
              список, таблицу, текст, шаги.
            </li>
            <li>
              <strong>Примеры:</strong> показывайте желаемый стиль или структуру
              ответа.
            </li>
            <li>
              <strong>Пошаговость:</strong> разбивайте сложную задачу на этапы.
            </li>
          </ul>
        </div>

        <div className="card">
          <h2>Примеры хороших запросов</h2>
          <ul>
            <li>
              <strong>Объяснение темы:</strong> "Объясни основы искусственного
              интеллекта простыми словами для школьника."
            </li>
            <li>
              <strong>Список:</strong> "Составь список из 5 книг по Python для
              начинающих."
            </li>
            <li>
              <strong>Краткий обзор:</strong> "Напиши обзор фильма
              'Интерстеллар' в 3 абзацах."
            </li>
            <li>
              <strong>Структурирование:</strong> "Представь результат в таблице
              с колонками: Название, Автор, Год."
            </li>
          </ul>
        </div>

        <div className="card">
          <h2>Частые ошибки</h2>
          <ul>
            <li>Слишком общий запрос без цели.</li>
            <li>Недостаточно контекста.</li>
            <li>Несколько разных задач в одном сообщении.</li>
            <li>Не указан формат, в котором нужен результат.</li>
          </ul>
        </div>

        <div className="card">
          <h2>Как улучшать промпты</h2>
          <ul>
            <li>Уточняйте запрос после первого ответа модели.</li>
            <li>Просите ответ в конкретном стиле и объеме.</li>
            <li>Добавляйте ограничения и критерии качества.</li>
            <li>Сохраняйте удачные шаблоны и переиспользуйте их.</li>
          </ul>
        </div>

        <div className="card">
          <h2>Заключение</h2>
          <p>
            Умение писать корректные запросы - ключевой навык работы с ИИ. Чем
            яснее постановка задачи, тем полезнее и стабильнее результат.
          </p>
        </div>
      </section>

      <aside className="sidebar right">
        <Link to="/prompts-test" className="next-btn">
          Начать тест
        </Link>

        <button className="nav" onClick={() => setIsOpen(true)}>
          <img src="../list-ico-site-white.ico" alt="Навигация" />
          <span>Навигация по темам</span>
        </button>
      </aside>

      <NavModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        scrollToSection={() => {}}
        topics={topics}
      />
    </div>
  );
}
