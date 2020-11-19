const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    messages: [
        { id: 1, message: 'hi' },
        { id: 2, message: 'hell' },
        { id: 3, message: 'masha' }
    ],
    dialogs: [
        { id: 1, name: 'ivan' },
        { id: 2, name: 'tolik' },
        { id: 3, name: 'masha' }
    ],
    newMessageBody: 'awdw'
}
const dialogsReducer = (state = initialState, action) => {

    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageBody = action.body;
    }
    else if (action.type === SEND_MESSAGE) {


        let body = state.newMessageBody;
        state.newMessageBody = '';
        state.messages.push({ id: 3, message: body });
    }
    return state;
}

export const updateNewMessageActionCreater = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: text
    }
}
export const sendMessageActionCreater = () => {
    return {
        type: SEND_MESSAGE

    }
}

export default dialogsReducer