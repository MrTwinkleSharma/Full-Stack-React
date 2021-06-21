//3rd Party Modules
import React, { useContext, useState } from 'react';

//Local Modules
import Card from '../../shared/Components/UIElements/Card';
import Button from '../../shared/Components/FormElements/Button/Button.js'
import Modal from '../../shared/Components/UIElements/Modal';
import Map from '../../shared/Components/UIElements/Map';
import AuthContext from '../../shared/Context/auth-context';

//CSS Files
import './PlaceItem.css'


function PlaceItem (props){
    const [showMap, setShowMap] = useState(false);
    const auth = useContext(AuthContext); 
    const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(false);
    
    const openMapModal = () => setShowMap(true);
    const closeMapModal = () => setShowMap(false);

    const showDeleteConfirmationModal = () => setDeleteConfirmationModal(true);
    const closeDeleteConfirmationModal = () => setDeleteConfirmationModal(false);

    const confirmedDeleteHandler = () => {
        setDeleteConfirmationModal(false);
    };
    
    
    return <>
    <Modal 
        show={showMap} 
        onCancel={closeMapModal}
        header={props.address}
        footer={<Button onClick={closeMapModal}>CLOSE</Button>}
        contentClass='place-item__modal-content'
        footerClass='place-item__modal-actions'
    >
    <div className='map-container'>
        <Map center={props.coordinates} zoom="16"/>
    </div>
    </Modal>
    <Modal 
        show={deleteConfirmationModal} 
        onCancel={closeDeleteConfirmationModal}
        header="Are You Sure?"
        footer={
        <>
        <Button inverse onClick={closeDeleteConfirmationModal}>CANCEL</Button>
        <Button danger onClick={confirmedDeleteHandler}>DELETE</Button>
        </>
        }
        contentClass='place-item__modal-content'
        footerClass='place-item__modal-actions'
    >
        Do you want to proceed and delete? Please note that it can't be undone thereafter. 
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
            {auth.isLoggedIn && 
            <Button to={``}>EDIT</Button>
            }{auth.isLoggedIn && 
            <Button danger onClick={showDeleteConfirmationModal}>DELETE</Button>
            }
        </div>
    </Card>
    </li>
    </>
}
export default PlaceItem;