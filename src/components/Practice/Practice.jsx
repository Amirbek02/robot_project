import React from 'react';

import './practice.scss';

export const Practice = () => {
  return (
    <div className="practice">
      <ul className="practice__menu">
        <li className="practice__item">
          <div className="img__container">
            {' '}
            <img className="practice__img" src="tincercad.jpg" alt="" />
          </div>
          <a
            className="practice__link"
            href="https://www.tinkercad.com/things/5ohTn4zO4TY-bodacious-bojo-snicket/editel?tenant=circuits ">
            Tincercar
          </a>
        </li>
        <li className="practice__item">
          <div className="img__container">
            <img className="practice__img" src="youtube.jpg" alt="" />
          </div>
          <a
            className="practice__link"
            href="https://www.youtube.com/watch?v=3cuOYAf7qFg&list=PLMBFNrdGISN-JNPccCLfETnaBYuStdFC8 ">
            Youtube
          </a>
        </li>
        <li className="practice__item">
          <div className="img__container">
            <img className="practice__img" src="arduino.jpg" alt="" />
          </div>
          <a className="practice__link practice__link2" href="https://www.arduino.cc/en/software">
            Arduino
          </a>
          <a className="practice__link" href="http://arduinodev.com/software/builder/ ">
            Arduino
          </a>
        </li>
      </ul>
    </div>
  );
};
