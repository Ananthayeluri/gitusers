import React, {useEffect, useState} from 'react';



const UserArgument=()=>{
    const [users, setUsers] = useState([]);
    const url = "https://api.github.com/users";

const GetUsers=async()=>{
const response = await fetch(url);
const users =await response.json();
setUsers(users);
console.log(users);
};

useEffect(()=>{
GetUsers();
},[]);

return(
 <>  
 <h1 className="title">Github Users</h1> 
 <ul className="users">
{users.map((user)=>{
    const {id,login,avatar_url,html_url}=user
return <li className="userid" key={id}><img src={avatar_url} alt={login}/><div className="matter"><h4>{login}</h4>
<a href={html_url}>profile</a></div></li>
})};

</ul>

</>
)

};











export default UserArgument;