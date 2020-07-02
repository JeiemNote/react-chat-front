import React from 'react';
import './App.css';
import main from './img/avatars/main.jpg'
import user1 from './img/avatars/user1.jpg'
import user2 from './img/avatars/user2.jpg'
import user3 from './img/avatars/user3.jpg'
import user4 from './img/avatars/user4.jpg'
import user5 from './img/avatars/user5.jpg'
import user6 from './img/avatars/user6.jpg'
import user7 from './img/avatars/user7.jpg'
import user8 from './img/avatars/user8.jpg'
import user9 from './img/avatars/user9.jpg'
import profile from './img/icons/profile.png'
import profilePlus from './img/icons/plus.png'
import UserMenu from './img/icons/menu.png'
import UserCall from './img/icons/phone.png'
import UserVideoCall from './img/icons/camera.png'
import send from './img/icons/send.png'

function App() {
    return (
        <div className="App">
            <div className="LeftSideBar">
                <div className="ProfileBar">
                    <div className="ProfileAvatar">
                        <img src={main} alt=""/>
                    </div>
                    <div className="Profile">
                        <div className="ProfileName">JeiemNote</div>
                        <div className="ProfileStatus">Online</div>
                    </div>
                    <div className="ProfileButtons">
                        <button className="ProfileEdit" ><img src={profile} alt=""/></button>
                        <button className="ProfilePlus"><img src={profilePlus} alt=""/></button>
                    </div>

                </div>
                <div className="UsersDialogs">
                    <div className="ChatsSearch">
                        <input placeholder="Search"/>
                    </div>
                </div>
                {/*// Поле с диалогами!*/}
                <div className="UsersItem">
                    <div className="FriendUser active">
                        <div className="FriendAvatar">
                            <img src={user1} alt=""/>
                        </div>
                        <div className="FriendBar">
                            <div className="FriendName">Katherine</div>
                            <div className="FriendLastMessage">It's awesome!</div>
                        </div>

                    </div>
                    <div className="FriendUser">
                        <div className="FriendAvatar">
                            <img src={user2} alt=""/>
                        </div>
                        <div className="FriendBar">
                            <div className="FriendName">Alina</div>
                            <div className="FriendLastMessage">That will suit me.</div>
                        </div>
                    </div>
                    <div className="FriendUser">
                        <div className="FriendAvatar">
                            <img src={user3} alt=""/>
                        </div>
                        <div className="FriendBar">
                            <div className="FriendName">Michail</div>
                            <div className="FriendLastMessage">Good, deploy fast!</div>
                        </div>
                    </div>
                    <div className="FriendUser">
                        <div className="FriendAvatar">
                            <img src={user4} alt=""/>
                        </div>
                        <div className="FriendBar">
                            <div className="FriendName">John</div>
                            <div className="FriendLastMessage">Check gitHub, link:</div>
                        </div>
                    </div>
                    <div className="FriendUser">
                        <div className="FriendAvatar">
                            <img src={user5} alt=""/>
                        </div>
                        <div className="FriendBar">
                            <div className="FriendName">James</div>
                            <div className="FriendLastMessage">Let's go in camp?</div>
                        </div>
                    </div>
                    <div className="FriendUser">
                        <div className="FriendAvatar">
                            <img src={user6} alt=""/>
                        </div>
                        <div className="FriendBar">
                            <div className="FriendName">Jasmine</div>
                            <div className="FriendLastMessage">I'm find what are you searching!</div>
                        </div>
                    </div>
                    <div className="FriendUser">
                        <div className="FriendAvatar">
                            <img src={user7} alt=""/>
                        </div>
                        <div className="FriendBar">
                            <div className="FriendName">Janet</div>
                            <div className="FriendLastMessage">Fine</div>
                        </div>
                    </div>
                    <div className="FriendUser">
                        <div className="FriendAvatar">
                            <img src={user8} alt=""/>
                        </div>
                        <div className="FriendBar">
                            <div className="FriendName">Philip</div>
                            <div className="FriendLastMessage">I think no</div>
                        </div>
                    </div>
                    <div className="FriendUser">
                        <div className="FriendAvatar">
                            <img src={user9} alt=""/>
                        </div>
                        <div className="FriendBar">
                            <div className="FriendName">Konstantine</div>
                            <div className="FriendLastMessage">Well i'm fine</div>
                        </div>
                    </div>
                </div>
                {/*// Поле с диалогами!*/}
            </div>

            <div className="DialogsWindow">
                <div className="UserNameBar">
                    <div className="UserNameAvatar">
                        <img src={user1} alt=""/>
                    </div>
                    <div className="User">
                        <div className="UserName">Katherine</div>
                        <div className="UserNameStatus">Online</div>
                    </div>
                    <div className="UsersButtons">
                        <button className="UserCall"><img src={UserCall} alt=""/></button>
                        <button className="UserVideoCall"><img src={UserVideoCall} alt=""/></button>
                        <button className="UserMenu"><img src={UserMenu} alt=""/></button>
                    </div>

                </div>
                <div className="DialogWrapper">
                    <div className="MessageForMe">
                        <div className="InfoForMe">
                            <div className="MessageAvatar"></div>
                            <div >
                                <div className="MessageUserName">Katherine</div>
                                <div className="MessageTime">00:35</div>
                            </div>
                        </div>
                        <div className="MessageBody">It's awesome</div>
                    </div>
                    <div className="MyMessage">
                        <div className="InfoForUser">
                            <div className="MyMessageAvatar"></div>
                            <div >
                                <div className="MyMessageUserName">JeiemNote</div>
                                <div className="MyMessageTime">00:36</div>
                            </div>
                        </div>
                        <div className="MyMessageBody">I still have a long way to go</div>
                    </div>
                    <div className="MessageForMe">
                        <div className="InfoForMe">
                            <div className="MessageAvatar"></div>
                            <div >
                                <div className="MessageUserName">Katherine</div>
                                <div className="MessageTime">00:35</div>
                            </div>
                        </div>
                        <div className="MessageBody">It's awesome</div>
                    </div>
                    <div className="MyMessage">
                        <div className="InfoForUser">
                            <div className="MyMessageAvatar"></div>
                            <div >
                                <div className="MyMessageUserName">JeiemNote</div>
                                <div className="MyMessageTime">00:36</div>
                            </div>
                        </div>
                        <div className="MyMessageBody">I still have a long way to go</div>
                    </div>
                    <div className="MessageForMe">
                        <div className="InfoForMe">
                            <div className="MessageAvatar"></div>
                            <div >
                                <div className="MessageUserName">Katherine</div>
                                <div className="MessageTime">00:35</div>
                            </div>
                        </div>
                        <div className="MessageBody">It's awesome</div>
                    </div>
                    <div className="MyMessage">
                        <div className="InfoForUser">
                            <div className="MyMessageAvatar"></div>
                            <div >
                                <div className="MyMessageUserName">JeiemNote</div>
                                <div className="MyMessageTime">00:36</div>
                            </div>
                        </div>
                        <div className="MyMessageBody">I still have a long way to go</div>
                    </div>
                    <div className="MessageForMe">
                        <div className="InfoForMe">
                            <div className="MessageAvatar"></div>
                            <div >
                                <div className="MessageUserName">Katherine</div>
                                <div className="MessageTime">00:35</div>
                            </div>
                        </div>
                        <div className="MessageBody">It's awesome</div>
                    </div>
                    <div className="MyMessage">
                        <div className="InfoForUser">
                            <div className="MyMessageAvatar"></div>
                            <div >
                                <div className="MyMessageUserName">JeiemNote</div>
                                <div className="MyMessageTime">00:36</div>
                            </div>
                        </div>
                        <div className="MyMessageBody">I still have a long way to go</div>
                    </div>
                    <div className="MessageForMe">
                        <div className="InfoForMe">
                            <div className="MessageAvatar"></div>
                            <div >
                                <div className="MessageUserName">Katherine</div>
                                <div className="MessageTime">00:35</div>
                            </div>
                        </div>
                        <div className="MessageBody">It's awesome</div>
                    </div>
                    <div className="MyMessage">
                        <div className="InfoForUser">
                            <div className="MyMessageAvatar"></div>
                            <div >
                                <div className="MyMessageUserName">JeiemNote</div>
                                <div className="MyMessageTime">00:36</div>
                            </div>
                        </div>
                        <div className="MyMessageBody">I still have a long way to go</div>
                    </div>







                </div>
                <div className="SendPlace">
                    <input type="text" placeholder="Say something"/>
                    <button className="Send"><img src={send} alt=""/></button>
                </div>
            </div>
        </div>
    );
}

export default App;

// <div className="UserNameAvatar"></div>
// <div className="User">
//     <div className="UserName">Katherine</div>
//     <div className="UserNameStatus">Write</div>
// </div>

