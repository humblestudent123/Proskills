import './Head.css';
import '../Body/Body.css'
import Body from '../Body/Body.jsx';

function head() {
  return (
    <div className="App">
        

<div className="head-line">
  <div className="header__logo">
    <img src="../logo-ProSkills.png" alt="логотип" />
  </div>
  <ul className="header__nav">
    <li><a href="">Проекты студентов</a></li>
    <li><a href="">Отзывы</a></li>
    <li><a href="">О нас</a></li>
  </ul>
</div>
        
    <Body />
        
    </div>
  );
}

export default head;
