import React from 'react'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { updateNewMessageActionCreater, sendMessageActionCreater } from './../redux/dialogs-reducer'



const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let MessagesElements = state.messages.map(me => <Message message={me.message} />);
    let DialogElements = state.dialogs.map(nameee => <DialogItem name={nameee.name} id={nameee.id} />);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () =>{
        props.store.dispatch(sendMessageActionCreater());
    }
    let onNewMessageChange = (e) =>{
        let body = e.target.value;
        props.store.dispatch(updateNewMessageActionCreater(body));
    }


    return (
        <div className="dialog_page" >
            <div className="left">
                {DialogElements}
            </div>
            <div className="right">
                {MessagesElements}
                <textarea onChange={onNewMessageChange} value={newMessageBody}></textarea>
                <button onClick={onSendMessageClick}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs
