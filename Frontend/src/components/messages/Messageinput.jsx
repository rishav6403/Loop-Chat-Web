import React from 'react'
import { LuSend } from "react-icons/lu";

const Messageinput = () => {
  return<>
    <form className='px-4 py-3 w-100'>
      <div className='d-flex align-items-center position-relative'>
      <input type="text" className='w-100 flex-1 fw-semibold bg-secondary-subtle text-dark border-1 border-secondary-subtle rounded-3 align-items-center rounded-pill' placeholder='Send a message' id='mssginput' /> 
      <button type='submit' className='btn position-absolute' id='sendMessageButton'><LuSend/></button>
      </div>
    </form>
  
  </>
}
export default Messageinput;