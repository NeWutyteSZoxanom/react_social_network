import React from 'react'
import MyPost from './MyPost/MyPost'
import ProfileInfo from './MyPost/ProfileInfo/ProfileInfo'

const Profile = (prop) => {
    
    return (
        <div >
            <div>
                <img className="ss"  src="https://cdn24.img.ria.ru/images/07e4/07/0d/1574265312_0:0:3070:2048_600x0_80_0_0_ff30becbae216becd70dfad55b9c4c6a.jpg"></img>
            </div>
            <ProfileInfo/>
            <MyPost po={prop.profilePage} 
            newPostText={prop.profilePage.newPostText} 
           
            dispatch={prop.dispatch}/>
        </div>
    )
}

export default Profile
