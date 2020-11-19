import React from 'react'

const Post = (props) => {
    return (
        <div >          
            <div>
                <div>
                    <img className="icon" src="data:image/png;base64,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"></img>
                    {props.message}.......
                    {props.likesCount}
                </div>
            </div>
        </div>
    )
}

export default Post
