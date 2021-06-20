//3rd Party Modules
import React from 'react';

//Local Modules
import UserList from '../Components/UserList';

//Image
import myImage from './Twinkle.jpg'

const ITEMS = [{
    id:0,
    places:3,
    image:myImage,
    name:"Twinkle Sharma"
}
]

function Users (){
    return <>
    <UserList items={ITEMS}></UserList>
    </>
}
export default Users;