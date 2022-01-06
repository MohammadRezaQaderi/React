import React, {useEffect,useState} from 'react';
import User from '../User/User';
import axios from 'axios';

function UserList() {
    const [data, setData] = useState([]);
    const [name, setName] = useState([]);
    const [phone, setPhone] = useState([]);
    const [loding, setLoding] = useState(false);
    useEffect(async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users",);
        setLoding(true);
        setData(response.data); 
    },[]);
    // render() { 
        return (
            <div>
            {loding ? data.map((data) =>(<User key={data.id} name ={data.name} phone={data.phone} email={data.email} website={data.website}/>)) : <div> <h1>LOADING DATA</h1><img src="loding.svg" alt="Loading"/> </div> }
            </div>
        )
    // }
}

export default UserList;