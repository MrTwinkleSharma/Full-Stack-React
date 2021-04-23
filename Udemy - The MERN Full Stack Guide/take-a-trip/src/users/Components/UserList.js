import React from 'react';
import UserItem from './UserItem';
import './UserList.css';

function UserList (props){

    return <>
    {
        props.items.length ?    
        <ul className='users-list'>
            {
                props.items.map(user=> 
                
                    <UserItem 
                    key={user.id}
                    id={user.id}
                    places={user.places}
                    image={user.image}
                    name={user.name}
                    />
                )
            }
        </ul>
        :
        <div className='center'><h2>No Items are Uploaded Yet!</h2></div>
    }

    </>
}
export default UserList;