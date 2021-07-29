import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const Input = (props) => {
    const { onSubmit } = props
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
                label='your message here'
                placeholder='Type your message'
                value={inputValue}
                onChange={handleChange}
                innerRef={inputRef}
            />
            <Button type='submit' variant='outlined' tabIndex={-1} className='send'>
                Send
            </Button>
        </form>
    )
}

export default Input;