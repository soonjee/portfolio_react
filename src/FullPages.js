import React from 'react';
// import {FullPage, Slide} from "https://cdn.skypack.dev/react-full-page@0.1.12";
import ReactFullpage from '@fullpage/react-fullpage';
import Burger from "./Burger";
import Menu from "./Menu";
import './css/Fp.css';

const useOnClickOutside = (ref, handler) => {
  React.useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) return;
      handler(event);
    };
    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);

      
    };
  }, [ref, handler]);
};



const FullPages = () => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <FullPage controls controlsProps={{className: 'navbar'}}
    >
      {/* 고정 MENU */}
      <div ref={node} className="Menu">
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
      </div>
      {/* FullPage 시작 */}
      <div className='section'>
      <Slide>
        <div className='page p01'>
          <div className='container'>
          첫페이지야
          </div>
        </div>
      </Slide>
      <Slide>
        <div className='page p02'>
          <div className='container'>
            {/* 설명박스 */}
            <div className='intro_box'>
              <div className='tit_area'>
                  <h1 className='tit'>Project</h1>
                  <ul className='sub_list'>
                    <li>React</li>
                    <li>서해종합건설</li>
                    <li>2022. 09.21~10.31</li>
                  </ul>
              </div>
              <div className='des_wrap'>
                <ul className='des_list'>
                  <li>
                    <strong className='des_name'>Intro</strong>
                    <p className='des_scpt'>
                      It is a long established fact that a reader will be distracted by the readable content of a page
                      when looking at its layout
                    </p>  
                  </li>
                  <li>
                    <strong className='des_name'>Tools</strong>
                    <p className='des_scpt'>readable&#47;content&#47;page</p>  
                  </li>
                  <li>
                    <strong className='des_name'>Contribution</strong>
                    <p className='des_scpt'>100&#37;</p>  
                  </li>
                </ul>
              </div>
              
            </div>
          </div>
        </div>
      </Slide>
      <Slide>
        <div className='page p03'>
        <h1>03</h1>
        </div>
      </Slide></div>
      {/* <Slide>
        <div className='page p04'>
        <h1>추가할까말까</h1>
        </div>
      </Slide> */}
    </FullPage>
  );
}

export default FullPages