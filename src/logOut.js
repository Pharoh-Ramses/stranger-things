import React from "react";

const LogOutButton =() => {
    
    const logOut = () => {
        // event.PreventDefault();
        localStorage.removeItem('token');
    }

    return (
        <div>
            <button onClick={logOut}>Log Out</button>
        </div>
    )


}

export default LogOutButton;