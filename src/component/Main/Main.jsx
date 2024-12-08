import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context';

function Main() {
    
  const {
    prevPrompt,
    setPrevPrompt,
    onSent,
    input,
    setInput,
    prompt,
    setPromt,
    loading,
    setLoading,
    showresult,
    setResultData,
    resultData,
    recentPrompts,
    setRescentPromots,
    setShowresult
  } = useContext(Context);



  return (
    <div className='main'>
        <div className='nav'>
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>

        <div className='main-container'>

          {!showresult?<>
            <div className="greet">
            <p><span>Hello,Dev</span></p>
            <p>How can I help today</p>
          </div>

          <div className="cards">
            <div className="card">
              <p>
                suggest beautiful places to see on an upcoming road trip
              </p>
              <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
              <p>
               Briefly summarize this concept: urban planning
              </p>
              <img src={assets.code_icon} alt="" />
            </div>
            <div className="card">
              <p>
                Brainstrom team bonding activites for our work retreat
              </p>
              <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
              <p>
                Improve the readabilty of the fillowing code
              </p>
              <img src={assets.code_icon} alt="" />
              
            </div>
          </div>
          </>
          :
          <div className='result'>
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompts}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading? <div className='loader'>
                  <hr/>
                  <hr />
                  <hr/>
              </div>:<p dangerouslySetInnerHTML={{__html:resultData}}></p>}
              
            </div>
          </div>

          }
          {/* <div className="greet">
            <p><span>Hello,Dev</span></p>
            <p>How can I help today</p>
          </div>

          <div className="cards">
            <div className="card">
              <p>
                suggest beautiful places to see on an upcoming road trip
              </p>
              <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
              <p>
               Briefly summarize this concept: urban planning
              </p>
              <img src={assets.code_icon} alt="" />
            </div>
            <div className="card">
              <p>
                Brainstrom team bonding activites for our work retreat
              </p>
              <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
              <p>
                Improve the readabilty of the fillowing code
              </p>
              <img src={assets.code_icon} alt="" />
            </div>
          </div> */}
          <div className="main-bottom">
            <div className="search-box">
              <input onChange={(e)=>setInput(e.target.value)}  value = {input} type="text"  placeholder='Enter a prompt here'/>
              <div>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                {input !== ""? <img onClick = {()=>onSent(input)} src={assets.send_icon} alt="" />:null}
               
              </div>
             
            </div>
            <p className='bottom-info'>
                Gemini may display inaccurate info, including about peapole,so double-check
              </p>
          </div>
        </div>
      
    </div>
  )
}

export default Main
