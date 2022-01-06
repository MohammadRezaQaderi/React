import React, {useEffect,useState} from 'react';
import  ReactDOM from 'react-dom';
import User from '../User/User';
import axios from 'axios';
function UserList() {
    const [data, setData] = useState([]);
    const [loding, setLoding] = useState(false);
    useEffect(async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users",);
        setLoding(true);
        setData(response.data); 
    },[]);
    return (
        <div>
        {loding ? data.map(({name, phone ,id}) =>{
            console.log(name, phone);
            ReactDOM.render(<User  name ={name} phone={phone} id={id}></User>)   
        }) : 'ie-hw\public\loding.svg' }
        </div>
    )
}

export default UserList;