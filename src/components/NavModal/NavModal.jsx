import { useNavigate } from 'react-router-dom';
import './NavModal.css';

export default function NavModal({ isOpen, setIsOpen, topics }) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleClose = () => setIsOpen(false);

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">Темы курса</h2>
        <ul className="topics-list">
          {topics.map((topic) => (
            <li key={topic.id} className="topic-item">
              <button
                className="topic-button"
                onClick={() => {
                  navigate(topic.path);
                  handleClose();
                }}
              >
                {topic.title}
              </button>
            </li>
          ))}
        </ul>
        <button className="close-modal-btn" onClick={handleClose}>
          Закрыть
        </button>
      </div>
    </div>
  );
}