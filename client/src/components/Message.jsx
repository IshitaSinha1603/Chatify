import React from "react";

const Message = () => {
    return (
        <div className="message owner">
            <div className="messageInfo">
                <img src="https://images.pexels.com/photos/18201340/pexels-photo-18201340/free-photo-of-redhead-woman-looking-up.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <spn>Just Now</spn>
            </div>
            <div className="messageContent">
                <p>Hello there</p>
                <img src="https://images.pexels.com/photos/18201340/pexels-photo-18201340/free-photo-of-redhead-woman-looking-up.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
        </div>
    )
}

export default Message;