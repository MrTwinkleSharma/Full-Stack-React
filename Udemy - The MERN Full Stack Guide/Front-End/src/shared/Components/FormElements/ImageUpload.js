//3rd Party Modules
import React, { useRef } from 'react';

//Local Modules
import Button from './Button/Button';

//CSS Files
import './ImageUpload.css';

const ImageUpload = props =>{
    const fileRef = useRef();

    const pickedImageHandler = event => {
        console.log(event.target);
    };

    const pickImageHandler = () =>{
        //This method exist on DOM Node and will open up that File Picker means 
        //it will click on that Element which is invisible through other element
        fileRef.current.click();
    }
    return<>
    <div className='form-control' >
        <input id={props.id}
        ref={fileRef}                   //To access this input element in DOM
        type='file' 
        accept='.jpg, .jpeg, .png' 
        style={{display:'none'}}        //Because we Don't want to see the default Choose File picker
        onChange={pickedImageHandler}   //To Preview image when there is certain changes happens on Input
        />
        <div className={`image-upload ${props.center && 'center'}`} >
            <div className='image-upload__preview'>
                <img src='' alt='preview'/>
            </div>
            <Button type='button' onClick={pickImageHandler} >Choose Image</Button>
        </div>
    </div>
    </>
}

export default ImageUpload;