import React from 'react';
import Card from '../../shared/Components/UIElements/Card';
import PlaceItem from './PlaceItem'
import './PlaceList.css'

function PlaceList (props){

    return <>
    {
        props.places.length ?
        <ul className='place-list'>
            {
                props.places.map(place =>  <PlaceItem 
                    key={place.id} 
                    id={place.id} 
                    title={place.title}
                    description={place.description}
                    address={place.address}
                    creatorId={place.creator}
                    coordinates={place.location}
                    image={place.imageUrl}
                    />)
            }
        </ul>
        :
        <div className='place-list center'>
            <Card>
            <h2>No Places found, Maybe Create One?</h2>
            <button>Add Place</button>
            </Card>
        </div>
    }
    </>
}
export default PlaceList;