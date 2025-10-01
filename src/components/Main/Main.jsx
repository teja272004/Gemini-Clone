import React from 'react'
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from '../../context/context';
import { useContext } from "react";
const Main = () => {
  const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context);
  return (
    <div className='main'>
      <div className='nav'>
        <p>Gemini</p>
        <img src={assets.user_icon} alt="User Icon" />

      </div>
      <div className='main-container'>
        {!showResult?<>
        <div className='greet'>
            <p><span>Hello,Dev.</span></p>
            <p>How can I help you today?</p>

        </div>
        <div className='cards'>
            <div className='card'>
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="" />
            </div>
            <div className='card'>
                <p>Briefly summarize this component: urban planning</p>
                <img src={assets.bulb_icon} alt="" />
            </div>
            <div className='card'>
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="" />
            </div>
            <div className='card'>
                <p>Improve the readibility of the following code</p>
                <img src={assets.code_icon} alt="" />
            </div>
        </div>
        </>:
        <div className = "result">
          
          </div>}
        
        <div className='main-bottom'>
            <div className='search-box'>
                <input onChange = {(e)=>setInput(e.target.value)} value = {input} type="text" placeholder='Enter a prompt here'/>
                <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
                </div>
            </div>
            <p className='bottom-info'>Gemini is a powerful tool for developers. It may make mistakes, but it's constantly learning and improving.</p>
        </div>
      </div>
    </div>
  )
}

export default Main;
