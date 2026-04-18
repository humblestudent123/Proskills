import './second-page.css';

export default function Page2() {
  return (
    <div className="learn-container">

      {/* HEADER */}
      <header className="learn-header">
        <p className="badge">Модуль 1</p>
        <h1>Введение в искусственный интеллект</h1>
        <p className="subtitle">
          Пойми базу, прежде чем переходить к практике
        </p>
      </header>

      {/* THEORY BLOCK */}
      <section className="theory">

        <div className="card">
          <h2>Что такое ИИ?</h2>
          <p>
            Искусственный интеллект — это система, которая имитирует
            человеческое мышление: анализирует данные, делает выводы
            и принимает решения.
          </p>
        </div>

        <div className="card">
          <h2>Как работает нейросеть?</h2>
          <p>
            Нейросеть обучается на большом количестве данных,
            находя закономерности и улучшая свои ответы со временем.
          </p>
        </div>

        <div className="card">
          <h2>Где используется ИИ?</h2>
          <ul>
            <li>Чат-боты (ChatGPT)</li>
            <li>Рекомендации (YouTube, TikTok)</li>
            <li>Генерация изображений</li>
            <li>Анализ данных</li>
          </ul>
        </div>

      </section>

      {/* SUMMARY */}
      <section className="summary">
        <h2>Главное из урока</h2>
        <p>
          ИИ = система, которая учится на данных.
          Чем больше данных — тем “умнее” модель.
        </p>
      </section>

      {/* ACTION */}
      <div className="actions">
        <button className="next-btn">
          Перейти к практике →
        </button>
      </div>

    </div>
  );
}