import React, { useEffect, useRef, useState } from 'react'
import ReactFullpage from '@fullpage/react-fullpage';
import { portfolio } from './Data';
import './css/Main.scss';


//portfolio배열에서 title을 빼서 배열을 만들어 쓰겠다.
const AC = portfolio.map(it => it = it.title);

const Cover = ({ on, setOn }) => {
  const cover = useRef(null)
  const wheelStop = e => {
      e.stopPropagation();
  }
  useEffect(() => {
      cover.current.addEventListener('wheel', wheelStop);
      return () => {
          cover.current.removeEventListener('wheel', wheelStop);
      }
  }, [])
  return (
      <div className={`Cover ${on ? "on" : ""}`} ref={cover}>
          <ul>
              {
                  portfolio.map((it, idx) => {
                      return (
                          <li key={idx} onClick={() => setOn(!on)}>
                              <a href={`#${it.title}`}>{it.title}</a>
                          </li>
                      )
                  })
              }
          </ul>
      </div>
  )
}

const App = () => {
  const [num, setNum] = useState(1);
  const [on, setOn] = useState(false)
  return (
    <div className='PF'>
      <Cover on={on} setOn={setOn} />
      <button className={`btn ${on ? "on" : ""}`} onClick={() => setOn(!on)}>
          <span>cover open</span>
      </button>
      <div className='num'>{portfolio[num - 1]?.title}</div>
    <nav className='gnb'>
        <ul>
            {
                portfolio.map((it, idx) => {
                    return (
                        <li key={idx} className={it.id === num ? "on" : ""}>
                            <a href={`#${it.title}`}>{it.title}</a>
                        </li>
                    )
                })
            }
        </ul>
    </nav>
    <ReactFullpage
        //fullpage options
        licenseKey={'YOUR_KEY_HERE'}
        scrollingSpeed={1000} /* Options here */
        anchors={['cover', ...AC, 'footer']}
        afterLoad={(o, d) => setNum(d.index)}

        render={({ state, fullpageApi }) => {
            return (
                <ReactFullpage.Wrapper>
                    <div className="section">
                        <div className='case'>HOME </div>
                    </div>
                    {
                        portfolio.map((it, idx) => {
                            return (
                                <div className="section">
                                    <div className='case'>
                                        <div className="inner">
                                            <div className='left'>
                                              <div className='title_area'>
                                                <h1 className='tit'>{it.title}</h1>
                                                <ul className='tit_list'>
                                                  <li>{it.skill}</li>
                                                  <li>{it.type}</li>
                                                  <li>{it.date}</li>
                                                </ul>
                                              </div>
                                              <ul className="desc">
                                                  <li>
                                                    <h2>Intro</h2>
                                                    <p>{it.info}</p>
                                                  </li>
                                                  <li>
                                                    <h2>Tools</h2>
                                                    <p>{it.tool}</p>
                                                  </li>
                                                  <li>
                                                    <h2>Contribution</h2>
                                                    <p>{it.prct}</p>
                                                  </li>
                                              </ul>
                                              <div className='button'>
                                                <li> 
                                                  {/* 버튼 어떻게 만들어야 했더라 찾기!!!!!! */}
                                                  <a href={it.link} target='_blank'><button>View</button></a>
                                                  <a href={it.link} target='_blank'><button>Code</button></a>
                                                </li>
                                              </div>
                                            </div>
                                            <div className='right'>
                                              <div className="photo">
                                                  <img src={it.src} alt={it.title} />
                                              </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                              )
                        })
                    }
                    <div className="section">
                        <div className='case'>
                          
                        </div>
                    </div>
                </ReactFullpage.Wrapper>
            );
        }}
    />
  </div>
  )
}

export default App