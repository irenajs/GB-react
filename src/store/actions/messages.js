import { AUTHORS } from '../../Components/contacts/contacts'

export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE'


export function addMessage ( { chatId, message }) {
    return {
        type: ADD_MESSAGE,
        payload: {
            chatId,
            message,
        }
            
        
    }
}
  
export const sendMessageToBot = (chatId, message) => {
  return (dispatch, getState) => {
      dispatch(addMessage(chatId, message))

      let timer = setTimeout(() => {
          dispatch(
              addMessage(chatId, {
                  id: `message${Date.now()}`,
                  author: AUTHORS.BOT,
                  text: "U know nothing, John Snow",
              })
          )

          clearTimeout(timer)
      }, 1500)
  }
}

