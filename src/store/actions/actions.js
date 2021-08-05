export const CHANGE_NAME = 'PROFILE::CHANGE_NAME'
export const CHANGE_IS_ONLINE = 'PROFILE::CHANGE_IS_ONLINE'


export const changeName = (newName) => ({
    type: CHANGE_NAME,
    payload: {
        newName,
    },  
})

export const changeNameWithThunk = (name) => {
    return (dispatch, getState) => {
        console.log(name)

        setTimeout(() => {
            dispatch(changeName(name))
        }, 1000)
    }
}


export const changeIsOnline = (isOnline) => ({
    type: CHANGE_IS_ONLINE,
    payload: {
        isOnline,
    },
})

export const changeIsOnlineWithThunk = (isOnline) => {
    return (dispatch, getState) => {
        console.log(getState())

        setTimeout(() => {
            dispatch(changeIsOnline(isOnline))
        }, 1000)
    }
}












