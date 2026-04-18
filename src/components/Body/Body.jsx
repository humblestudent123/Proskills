import { Link } from 'react-router-dom'; // Добавьте импорт Link
import './Body.css';

export default function Body() {
  return (
    <div className="body-container">
      {/* === Секция с текстом и фото === */}
      <div className="content-section">
        <div className="possibility">
          <p className="p1">Возможность быстрого роста</p>
          <h1 className="h1">
            Основы нейросетей<br />
            вводный курс
          </h1>

          <ul className="list">
            <li>Погрузитесь в мир передовых решений на базе нейросетей</li>
            <li>Развивайте компетенции в области нейронных сетей и искусственного интеллекта</li>
          </ul>

          <div className="button-container">
            <Link to="/page2" className="btn-start">Начать</Link>
          </div>
        </div>

        {/* Фото справа */}
        <div className="img-section">
          <img src="/ai-logo.png" alt="Логотип ИИ" />
        </div>
      </div>

      {/* === Блок с тремя карточками (в один ряд) === */}
      <div className="blocks-container">
        <div className="card block-1">
          <h2>5 топовых нейросети в одном курсе</h2>
          <p className="card-text">Codex, Gemini, ChatGPT, Z-image-turbo, Nano Banana</p>
        </div>

        <div className="card block-2">
          <h2>Промпты под ваши задачи</h2>
          <p className="card-text">Библиотека лучших шаблонов и генераторы для текста, данных, графики, видео и аудио</p>
        </div>

        <div className="card block-3">
          <h2>Абсолютно бесплатно!</h2>
          <p className="card-text">Да! Вы не ослышались, мы предоставляем полный доступ к курсам навсегда.</p>
        </div>
      </div>

      {/* === Секция с карточками про карьеру (в один ряд) === */}
      <div className="blocks-container2">
        <h2 id="career-title">Владение нейросетями ключ к эффективности</h2>

        <div className="cards-grid">
          <div className="black-block-1">
            <img src="/plus.png" alt="Иконка плюса" />
            <h3>Построить карьеру проще если умеещь работать с нейросетями!</h3>
            <p>
              Согласно исследованию «Русской школы управления», 
              52% компаний учитывают владение инструментами искусственного интеллекта при найме сотрудников.
            </p>
          </div>

          <div className="black-block-2">
            <div className="black-block-img">
              <img src="/plus.png" alt="Иконка плюса" />
            </div>
            <h3>ИИ востребован на рынке труда</h3>
            <p>
              Исследование IBM показывает, что компании, внедряющие ИИ, 
              обучают сотрудников новым цифровым навыкам в 6 раз быстрее
            </p>
          </div>

          <div className="black-block-3">
            <div className="black-block-img">
              <img src="/plus.png" alt="Иконка плюса" />
            </div>
            <h3>Работа с нейросетями — это компетенция, а не мгновенное решение</h3>
            <p>
              По данным IBM, компании делают ставку на сотрудников, способных комбинировать навыки работы с ИИ, 
              аналитическое мышление и понимание принципов работы алгоритмов
            </p>
          </div>
        </div>

        <div className="end-and-image">
          <div className="end">
            <h2>Используйте ИИ для эффективного решения прикладных задач</h2>
            <p>
              Освойте ИИ-инструменты на реальных кейсах и выполняйте задачи за минуты вместо часов. 
              Практика охватывает направления от концепт-арта до аналитики данных — дизайн, IT, маркетинг, бизнес и многое другое.
            </p>
          </div>

          <div className="img-section1">
            <img src="/Group-Skills.png" alt="Группа навыков ИИ" />
          </div>
        </div>
      </div>
    </div>
  );
}
