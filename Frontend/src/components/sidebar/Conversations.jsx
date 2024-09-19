import React from 'react'
import Conversation from './Conversation'

const Conversations = () => {
  return <>
    <div className='mt-3 flex flex-column overflow-auto scroll-container' style={{height:"58vh"}}>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
    </div>
    </>
}

export default Conversations