export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE'

export function addMessage ( {message, chatId }) {
    return {
        type: ADD_MESSAGE,
        payload: {
            message,
            chatId
        }
    }
}
  


