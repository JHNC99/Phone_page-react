
import { useState } from 'react';
import './App.css';
import 'animate.css';
import Box from './components/Box';
import Header from './components/Header';
import ShowArea from './components/ShowArea';
function App() {
  const [show, setShow] = useState(false);
  const [dark, setDark] = useState(false);
  console.log(dark);
  return (
    <main>

      <div className={
        show ? "big-wrapper active light" : `big-wrapper light`
      }>
        <Box />
        <img src="./img/shape.png" alt="" className="shape" />
        <Header show={{ show, setShow }} />

        <ShowArea />
        <div className="bottom-area">
          <div className="container">
            <button className="toggle-btn" onClick={() => setDark(!dark)}>
              <i className="far fa-moon"></i>
              <i className="far fa-sun"></i>
            </button>
          </div>
        </div>

        <div data-aos="fade-up">
          <img src="./img/person.png" alt="" />
        </div>
      </div>
    </main>
  );
}

export default App;
