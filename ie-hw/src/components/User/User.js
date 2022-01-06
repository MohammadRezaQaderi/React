import React from 'react'

function User({name = 'noName' , phone = '09216272502' , id}) {
    console.log(name, phone);
    return (
        <div>
            {name}{phone}
        </div>
    )
}

export default User;