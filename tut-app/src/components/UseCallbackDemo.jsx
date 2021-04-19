import React, { useCallback, useState} from 'react';
import Button from './Button';
import Salary from './Salary';
import Title from './Title';
import Age from './Age';

function UseCallbackDemo(){
       
        const[age,setAge] = useState(25);
        const [salary, setSalary] = useState(50000);

        const incrementAge = () => {
                setAge(age+1);
        }

        const incrementSalary = () => {
                setSalary(salary+1000);
        }

        return <>
        <Title userTitle="useCallback Hook Demo"/>
        <Age age={age} />
        <Button event={incrementAge} stateVar="age"/>
        <Salary salary={salary} />
        <Button event={incrementSalary} stateVar="salary"/>      
        
        </>
        
}

export default UseCallbackDemo;
