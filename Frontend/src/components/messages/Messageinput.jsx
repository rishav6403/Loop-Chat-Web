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
    <form className='px-4 py-3 w-100' onSubmit={handleSubmit}>
      <div className='d-flex align-items-center position-relative'>
      <input type="text" className='w-100 flex-1 fw-semibold bg-secondary-subtle text-dark border-1 border-secondary-subtle rounded-3 align-items-center rounded-pill' placeholder='Send a message' id='mssginput'
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