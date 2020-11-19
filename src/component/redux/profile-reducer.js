const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const ADD_POST = 'ADD_POST';

let initialState = {
    posts: [
        { id: 1, message: 'hi', likesCount: '12' },
        { id: 2, message: 'hell', likesCount: '13332' },
        { id: 3, message: 'hidd', likesCount: '132' }
    ],
    newPostText: 'new post'
}
export const profileReducer = (state = initialState, action) => {
    if (action.type === ADD_POST) {
        let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: "12"
        };

        state.posts.push(newPost);
        state.newPostText = '';
        }
    else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newText;
    }
   
    return state;
}

export const addPostActionCreater = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreater = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}


export default profileReducer