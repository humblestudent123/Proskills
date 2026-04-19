import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Sidebar({ scrollToSection, ref1, ref2, ref3 }) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="sidebar">

      <Link to="/test" className="next-btn">
        Начать
      </Link>

      <button className="nav" onClick={() => setIsOpen(true)}>
        <img src="../list-ico-site-white.ico" alt="" />
        <span>Навигация по теме</span>
      </button>

      <button onClick={() => scrollToSection(ref1)}>Что такое ИИ</button>
      <button onClick={() => scrollToSection(ref2)}>Как работает нейросеть</button>
      <button onClick={() => scrollToSection(ref3)}>Где используется</button>

      {/* МОДАЛКА */}
      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>

            <h2>Выбор раздела</h2>

            <button onClick={() => {
              scrollToSection(ref1);
              setIsOpen(false);
            }}>
              Теория
            </button>

            <Link to="/test" onClick={() => setIsOpen(false)}>
              Тест
            </Link>

          </div>
        </div>
      )}

    </aside>
  );
}