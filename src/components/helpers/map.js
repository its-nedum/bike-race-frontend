import React from 'react'
import L from 'leaflet'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import riderImage from '../../images/riders.png'

class Maps extends React.Component {
    state = {
        riderOne: {
            lat: 40.00,
            lng: -105.35,
        },
        riderTwo: {
            lat: 39.95,
            lng: -105.24,
        },
        zoom: 13,
    }
    
    riderOne = L.icon({
        iconUrl: riderImage,
        iconSize:[38,95],
        iconAnchor:[22,94],
        popupAnchor:[-3,-76]
    })

    riderTwo = L.icon({
        iconUrl: riderImage,
        iconSize:[38,95],
        iconAnchor:[22,94],
        popupAnchor:[-3,-76]
    })
    render(){
        const positionRiderOne = [this.state.riderOne.lat, this.state.riderOne.lng]
        const positionRiderTwo = [this.state.riderTwo.lat, this.state.riderTwo.lng]
    return (
        <Map className="map" center={positionRiderOne} zoom={this.state.zoom}>
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={positionRiderOne} icon={this.riderOne}>
            <Popup>
                Hickory Hills
            </Popup>
            </Marker>
            <Marker position={positionRiderTwo} icon={this.riderTwo}>
            <Popup>
                Huntington Beach
            </Popup> 
            </Marker>
        </Map>
    )
}
}
export default Maps
