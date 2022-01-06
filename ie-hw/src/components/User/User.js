import React from 'react'
import PropTypes from 'prop-types';
import style from './User.module.css';

function User({ name, phone, email, website }) {
  console.log("hello");
  return (
    // <div className={style.wrapper}>
    //     <div className={style.left}>
    //         <h4 >{name}</h4>
    //     </div>
    //     <div class="right">
    //         <div class="info">
    //             <h3>Information</h3>
    //             <div class="info_data">
    //                 <div class="data">
    //                     <h4>Email</h4>
    //                     <p>{email}</p>
    //                 </div>
    //                 <div class="data">
    //                 <h4>Phone</h4>
    //                     <p>{phone}</p>
    //                 </div>
    //                 <div class="data">
    //                     <h4>Phone</h4>
    //                     <p>{phone}</p>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    <div className={style.container}>
      <div className={style.card}>
        <p className={style.card__name}>{name}</p>
        <div className={style.grid_container}>
          <div className={style.grid_child_posts}>
          <p className={style.card__name}>Phone No.</p>{phone}
          <p className={style.card__name}>Email Address</p>{email}
          <p className={style.card__name}>Web Address</p>{website}
          </div>
        </div>
      </div>
      <br></br>
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