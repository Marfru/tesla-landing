import React from 'react';
import ReactPageScroller from 'react-page-scroller';
import { modelsData } from '../../mock/data';

const content = modelsData.map(item =>
  <section className="section" style={{backgroundImage: `url(${item.img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
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
    <ReactPageScroller>
      { content }
    </ReactPageScroller>
  )
}

export default Section
