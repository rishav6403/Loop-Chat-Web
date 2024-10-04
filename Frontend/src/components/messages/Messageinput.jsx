import React, { useState } from 'react'
import { LuSend } from "react-icons/lu";
import useSendMessage from '../../hooks/useSendMessage';
import Loader from '../loader/Loader';

const Messageinput = () => {
const[message, setMessage] = useState("")
const{loading, sendMessage} = useSendMessage();

const handleSubmit = async(e)=>{
 e.preventDefault();
 if(!message) return;
 await sendMessage(message);
 setMessage("")
}

  return<>
    <form className='px-4 py-3 w-100' onSubmit={handleSubmit} id='messageInputForm'>
      <div className='d-flex align-items-center position-relative bg-secondary-subtle text-dark border-1 border-secondary-subtle align-items-center rounded-pill'>
      <input type="text" className='fw-semibold text-dark' placeholder='Send a message' id='mssginput'
       value={message}
       onChange={(e)=>setMessage(e.target.value)} /> 
      <button type='submit' className='btn position-absolute' id='sendMessageButton'>
        {loading ?<Loader/> : <LuSend/>}
        </button>
      </div>
    </form>
  
  </>
}
export default Messageinput;