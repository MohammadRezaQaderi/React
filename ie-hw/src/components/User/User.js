import React from 'react'
import PropTypes from 'prop-types';


function User({name , phone  , email , website}) {
    console.log("hello");
    return (
        <div>
            <div>{name}{phone}{email}</div>
            <div>{website}</div>
        </div>
    )
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
}

User.defaultProps = {
    name: "MuhmadrezA Qaderi",
    phone: "09216272502",
    email: "mrq112775@gmail.com",
    website: "mgh27.ir"
}

export default User;