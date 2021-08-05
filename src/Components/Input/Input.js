import React from 'react'
import TextField from '@material-ui/core/TextField'
import SendIcon from '@material-ui/icons/Send'
import IconButton from '@material-ui/core/IconButton'

const Input = (props) => {
    const {
        lable= 'Message',
        placeholder= 'Type your message',
        onSubmit
    } = props

   
    const inputRef = React.useRef(null)

    const [inputValue, setInputValue] = React.useState('')

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (onSubmit) {
            onSubmit(inputValue)
            setInputValue('')
            setTimeout(() => inputRef.current?.focus(), 200)
        }
    }

    return (
        <form className='message-form' onSubmit={handleSubmit}>
            <TextField
                fullWidth
                required
                autoFocus
                className
                variant='outlined'
                label={lable}
                placeholder={placeholder}
                value={inputValue}
                onChange={handleChange}
                innerRef={inputRef}
            />
            <IconButton 
            type='submit' 
            variant='contained' 
            tabIndex={-1} 
            className='send'>
             <SendIcon/>
             </IconButton>
        </form>
    )
}

export default Input;

