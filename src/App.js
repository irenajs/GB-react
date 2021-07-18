import './App.css';
import React from 'react'
import Message from './Message';


const Users  = {
  USER: 'USER',
  BOT: 'BOT'
}

function App() {
  const [messageList, setMessageList] = React.useState([ ])
  const [inputValue, setInputValue] = React.useState('')
  const timer = React.useRef(null)
 
  
  

  React.useEffect (() => {
    if (messageList.length && messageList[messageList.lenght - 1].author !== Users.BOT){
      timer.current = setTimeout(() => 
       
        setMessageList ((currentMessageList) => 
        [...currentMessageList,
        { author: Users.BOT, text: 'Hello' },
        ]),
       1500)
    }
  }, [messageList])
  
  React.useEffect(() => {
    return () => {
        clearTimeout(timer.current)
    }
}, [])

  const handleMessageChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleMessageSubmit = (e) => {
    e.preventDefault()
    
    setMessageList((currentMessageList) => 
      [...currentMessageList, { author: Users.User, text: inputValue },
      ])
      setInputValue('')
  }

  return (
    <div className = 'App-container'>
      <div className= 'Message_list'>
      {messageList.map((message,index) => (
      <Message 
      key={index} 
      text={message.text} 
      author={message.user} />
      ))}
       </div>
      <form className= 'message-form' onSubmit={handleMessageSubmit} onChange={(e) => console.log(e)} >
        <input className='border' placeholder='Type your message' value= {inputValue}
        onChange={handleMessageChange}/>
        <button className = 'send'>Send</button>
      </form>    
    </div>
  )
}


export default App;