import './App.css';
import React from 'react'
import Message from './Message'
import TextField from '@material-ui/core/TextField'
import usePrevious from './Hooks/usePrevious'
import Chats from './ChatList/Chats'
//mport ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';


const AUTHORS  = {
  User: 'User',
  BOT: 'BOT'
}

function App() {
  const [messageList, setMessageList] = React.useState([])
    const [inputValue, setInputValue] = React.useState('')

    const timer = React.useRef(null)

    const prevMessageList = usePrevious(messageList)

    React.useEffect(() => {
        if (prevMessageList?.length < messageList.length &&
            messageList[messageList.length - 1].author !== AUTHORS.BOT
        ) {
            timer.current = setTimeout(
                () =>
                    setMessageList((currentMessageList) => [
                        ...currentMessageList,
                        { author: AUTHORS.BOT, text: 'Hello, User' },
                    ]),
                1500
            )
        }
    }, [messageList, prevMessageList])

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

        setMessageList((currentMessageList) => [
            ...currentMessageList,
            { author: AUTHORS.User, text: inputValue },
        ])
        setInputValue('')
    }

    return (
        <div className="App-container">
             <div>
                <Chats/>
            </div>
            <section className='Message-box' >
            <div className="bordered">
                {messageList.map((message, index) => (
                    <Message
                        key={index}
                        text={message.text}
                        author={message.author}
                    />
                ))}
            </div>

            <form className="message-form" onSubmit={handleMessageSubmit}>
                <TextField
                    fullWidth
                    required
                    autoFocus
                    className="text-field"
                    variant="outlined"
                    label="your message here"
                    placeholder="Type your message"
                    value={inputValue}
                    onChange={handleMessageChange}
                />
                <button className='send'>Send</button>
            </form>
            </section>
           
           
        </div>
    )
}


export default App;