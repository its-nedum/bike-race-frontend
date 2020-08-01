import React from 'react'
import L from 'leaflet'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import riderImage from '../../images/riders.png'

class Maps extends React.Component {
    state = {
        rider1: {
            lat: 40.00,
            lng: -105.35,
        },
        rider2: {
            lat: 39.95,
            lng: -105.24,
        },
        rider3: {
            lat: 39.95,
            lng: -105.24,
        },
        zoom: 13,
    }
    
    riderIcon = L.icon({
        iconUrl: riderImage,
        iconSize:[38,95],
        iconAnchor:[22,94],
        popupAnchor:[-3,-76]
    })

    render(){
        const positionRider1 = [this.state.rider1.lat, this.state.rider1.lng]
        const positionRider2 = [this.state.rider2.lat, this.state.rider2.lng]
    return (
        <Map className="map" center={positionRider1} zoom={this.state.zoom}>
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={positionRider1} icon={this.riderIcon}>
            <Popup>
                Dustin Green
            </Popup>
            </Marker>
            <Marker position={positionRider2} icon={this.riderIcon}>
            <Popup>
                Jason Finn
            </Popup> 
            </Marker>
        </Map>
    )
}
}
export default Maps
