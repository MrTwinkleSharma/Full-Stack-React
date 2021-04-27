import React from 'react';
import Input from '../../shared/Components/FormElements/Input/Input.js'
import './NewPlace.css'

function NewPlace (props)
{

    return <>
    <form className='place-form'>
        <Input element = 'input' id={`1`} type='text' label='Title' validation={[]} errorText='Please Enter a Valid Title'/>
    </form>
    </>
}

export default NewPlace;