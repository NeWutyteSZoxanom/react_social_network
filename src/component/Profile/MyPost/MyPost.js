import React from 'react'
import Post from './Post/MyPost'
import { addPostActionCreater, updateNewPostTextActionCreater } from './../../redux/profile-reducer'

const MyPost = (props) => {

    let postsElement = props.po.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />)

    let newPostElements = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreater());
    }

    let onPostChange = () => {
        let text = newPostElements.current.value;
        let action = updateNewPostTextActionCreater(text);
        props.dispatch(action);
    }

    return (
        <div >
            <div>
                <textarea onChange={onPostChange} ref={newPostElements} value={props.newPostText}></textarea>
                <button onClick={addPost}>addpost</button>
            </div>

            <div>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPost
