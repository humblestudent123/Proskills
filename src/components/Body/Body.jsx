import './Body.css';

export default function Body() {
  return (
<div className="body-container">
  <div className="content-section">
    {/* Текст */}
    <div className="possibility">
      <p className="p1">Возможность быстрого роста</p>
      <h1 className="h1">
        Основы нейросетей<br />
        вводный курс
      </h1>

      {/* Список */}
      <div className="list">
        <ul>
          <li>Погрузитесь в мир передовых решений на базе<br />нейросетей</li>
          <li>Развивайте компетенции в области нейронных сетей и искусственного интеллекта</li>
        </ul>
      </div>

      {/* Кнопка */}
      <div className="button-container">
        <a href="#" className="btn-start">Начать</a>
      </div>
    </div>

    {/* Фото справа */}
    <div className="img-section">
      <img src="../ai-logo.png" alt="Логотип ИИ" />
    </div>
  </div>
</div>

  );
}
