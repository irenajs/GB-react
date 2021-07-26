import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const Input = (props) => {
    const { onSubmit } = props

    const [inputValue, setInputValue] = React.useState('')

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (onSubmit) {
            onSubmit(inputValue)
            setInputValue('')
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
            />
            <Button type='send' variant='outlined' className='send'>
                Send
            </Button>
        </form>
    )
}

export default Input;