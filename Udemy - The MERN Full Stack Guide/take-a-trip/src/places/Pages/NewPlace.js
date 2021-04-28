import React from 'react';
import Input from '../../shared/Components/FormElements/Input/Input.js'
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators.js'

import './NewPlace.css'

function NewPlace(props) {

    return <>
        <form className='place-form'>
            <Input element='input' id='title' type='text' label='Title' validators={[VALIDATOR_REQUIRE()]} errorText='Please Enter a Valid Title' />
            <Input element='textarea' id='description' type='text' label='Description' validators={[VALIDATOR_MINLENGTH(5)]} errorText='Please Enter a Valid Description' />
        </form>
    </>
}

export default NewPlace;