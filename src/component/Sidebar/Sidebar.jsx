import React, { useContext } from 'react'
import './Sidebar.css'
import {assets} from '../../assets/assets'
import { useState } from 'react'
import { Context } from '../../context/Context'

function Sidebar() {

  const [extended,setEdtended] = useState(false)
 const{ onSent,prevPrompt,setRescentPromots,newChat } = useContext(Context)

 const loadPrompt = async (prompt)=>{
    setRescentPromots(prompt)
      await onSent(prompt);
 }
  return (
    <div className='sidebar'>
       <div className="top">
            <img  className="menu" onClick={((e)=>setEdtended(!extended))} src={assets.menu_icon} alt="" />
            <div onClick={((e)=>{newChat()})} className="new-chat">
                <img  src={assets.plus_icon} alt="" />
                {extended?<p>New chat</p>:null}
            </div>
            {extended?
            <div className="recent">
              <p className="recent-title">Recent</p>
              {prevPrompt.map((item)=>{
                return(
                  <div onClick={()=>loadPrompt(item)} className="recent-entry">
                  <img src={assets.message_icon} alt="" />
                  <p>{item.slice(0,18)}...</p>
                </div>
                )
              })}
             
            </div>
            :null}
            {/* <div className="recent">
              <p className="recent-title">Recent</p>
              <div className="recent-entry">
                <img src={assets.message_icon} alt="" />
                <p>What is react...</p>
              </div>
            </div> */}
       </div>


       <div className="bottom">
            <div className="bottom-item recent-entry">
              <img src={assets.question_icon} alt="" />
             {extended?<p>Help</p>:null}
            </div>
            <div className="bottom-item recent-entry">
              <img src={assets.history_icon} alt="" />
              {extended?<p>Activity</p>:null}
            </div>
            <div className="bottom-item recent-entry">
              <img src={assets.setting_icon} alt="" />
              {extended?<p>Settings</p>:null}
            </div>
       </div>

    </div>
  )
}

export default Sidebar
