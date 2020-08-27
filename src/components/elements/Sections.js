import React from 'react';
import { modelsData } from '../../mock/data';


const content = modelsData.map(item =>
  <section id={item.id} className="section" style={{backgroundImage: `url(${item.img})`}}>
    <div className="section__info">
      <h1>{item.title}</h1>
      <label>{item.subtitle} <a href="#">{item.link}</a></label>
    </div>
    <div className="section__buttons">
      <button className="section__buttons--dark">{item.button1}</button>
      <button className="section__buttons--light">{item.button2}</button>
      </div>
  </section>
);

function Section() {
  return (
    <div>
      { content }
    </div>
  )
}

export default Section
