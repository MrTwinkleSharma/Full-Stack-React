import React, { useState } from 'react';
import './PlaceItem.css'

import Card from '../../shared/Components/UIElements/Card';
import Button from '../../shared/Components/FormElements/Button/Button.js'
import Modal from '../../shared/Components/UIElements/Modal';


function PlaceItem (props){

    const [showMap, setShowMap] = useState(false);
    
    const openMapModal = () => setShowMap(true);
    const closeMapModal = () => setShowMap(false);

    return <>
    <Modal 
        show={showMap} 
        onCancel={closeMapModal}
        header={props.address}
        footer={<Button onClick={closeMapModal}>CLOSE</Button>}
        contentClass='place-item__modal-content'
        footerClass='place-item__modal-actions'
    >
    <div className='map-container'></div>
    </Modal>
    <li className='place-item'> 
    <Card className='place-item__content'> 
        <div className='place-item__image'>
            <img src={props.image} alt={props.title}/>
        </div>
        <div className='place-item__info'>
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
        </div>
        <div className='place-item__actions'>
            <Button inverse onClick={openMapModal}>VIEW ON MAP </Button>
            <Button to={``}>EDIT</Button>
            <Button danger>DELETE</Button>
        </div>
    </Card>
    </li>
    </>
}
export default PlaceItem;