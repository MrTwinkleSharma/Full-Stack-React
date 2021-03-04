import React, { Component } from 'react';
import Person from './Person';

const MyFriends = [
    {
        id: 0,
        name:"Arpit Jain",
        branch: "CSE",
        skill: "Django Developer"
    },
    {
        id: 1,
        name:"Ayush Shrivastava",
        branch: "IT",
        skill: "Android Developer"
    },
    {
        id: 2,
        name:"Akansha Saxena",
        branch: "CSE",
        skill: "REACT Developer"
    },

];
class Classcomponent extends Component{
    render()
    {   
        const MyMappedArray = MyFriends.map(person => <Person person={person}/> );
        return  <>{MyMappedArray}</>
    }
}

export default Classcomponent;