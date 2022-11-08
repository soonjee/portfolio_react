import React from 'react';
import {FullPage, Slide} from "https://cdn.skypack.dev/react-full-page@0.1.12";
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
    <FullPage
      controls controlsProps={{className: 'navbar'}}
    >
      <Slide className="Main_slide">
        <div className='page p01'>
          <div className='container'>
          <div ref={node} className="Menu">
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </div>
          </div>
        </div>
      </Slide>
      <Slide>
        <div className='page p02'>
        <div className='container'>
            
          </div>
        </div>
      </Slide>
      <Slide>
        <div className='page p03'>
        <h1>React 02</h1>
        </div>
      </Slide>
      <Slide>
        <div className='page p04'>
        <h1>React 03</h1>
        </div>
      </Slide>
    </FullPage>
  );
}

export default FullPages