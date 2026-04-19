import { Link } from 'react-router-dom';
import './NavModal.css'



export default function NavModal({
  isOpen,
  setIsOpen,
  scrollToSection,
  refTheory
}) {
  if (!isOpen) return null;

  const handleClose = () => setIsOpen(false);

  return (
    <div className="modal-overlay" onClick={handleClose}>

      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >

        <p id='head'>1. Введение в искусственный интеллект </p>

        <div className="modal-actions">

          <button
            onClick={() => {
              scrollToSection(refTheory);
              handleClose();
            }}
          >
            Теория
          </button>

          <Link
            to="/test"
            className="modal-link"
            onClick={handleClose}
          >
            Тест
          </Link>

        </div>

      </div>

    </div>
  );
}