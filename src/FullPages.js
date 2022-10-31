import React from 'react';
import {FullPage,Slide} from "https://cdn.skypack.dev/react-full-page@0.1.12";
import './css/Fp.css';

export default class FullPageExample extends React.Component {
render() {
    return (
      <FullPage
      controls controlsProps={{className: 'navbar'}}
      anchors={["firstPage", "secondPage", "thirdPage"]}>
        <Slide className="Main_slide">
          <div className='page p01'>
            <h1 className='Main_tit'>PortFolio</h1>
          </div>
        </Slide>
        <Slide>
          <div className='page p02'>
            <h1> React 01 서해종합건설</h1>
          </div>
        </Slide>
        <Slide>
          <div className='page p03'>
            <h1>React 02-1 현대엘리베이터 react</h1>
          </div>
        </Slide>
        <Slide>
          <div className='page p04'>
            <h1>React 02-2 현대엘리베이터 js</h1>
          </div>
        </Slide>
        <Slide>
          <div className='page p05'>
            <h1>React 02-3 현대엘리베이터 jquery</h1>
          </div>
        </Slide>
        {/* <Slide>
          <div className='page p05'>
            <h1>HTML/CSS 01 네이버 회원가입폼</h1>
          </div>
        </Slide> */}
      </FullPage>
    );
  }
};