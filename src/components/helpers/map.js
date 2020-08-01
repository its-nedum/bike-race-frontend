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
            lat: 40.06,
            lng: -105.26,
        },
        rider4: {
            lat: 40.03,
            lng: -105.23,
        },
        rider5: {
            lat: 40.04,
            lng: -105.23,
        },
        rider6: {
            lat: 39.96,
            lng: -105.22,
        },
        rider7: {
            lat: 39.98,
            lng: -105.21,
        },
        rider8: {
            lat: 40.00,
            lng: -105.23,
        },
        rider9: {
            lat: 40.02,
            lng: -105.26,
        },
        rider10: {
            lat: 40.02,
            lng: -105.30,
        },
        rider11: {
            lat: 40.01,
            lng: -105.20,
        },
        rider12: {
            lat: 39.98,
            lng: -105.24,
        },
        rider13: {
            lat: 39.99,
            lng: -105.25,
        },
        rider14: {
            lat: 40.01,
            lng: -105.29,
        },
        rider15: {
            lat: 39.97,
            lng: -105.27,
        },
        rider16: {
            lat: 39.97,
            lng: -105.33,
        },
        rider17: {
            lat: 40.00,
            lng: -105.29,
        },
        rider18: {
            lat: 40.05,
            lng: -105.30,
        },
        rider19: {
            lat: 39.99,
            lng: -105.31,
        },
        rider20: {
            lat: 40.01,
            lng: -105.32,
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
        const positionRider3 = [this.state.rider3.lat, this.state.rider3.lng]
        const positionRider4 = [this.state.rider4.lat, this.state.rider4.lng]
        const positionRider5 = [this.state.rider5.lat, this.state.rider5.lng]
        const positionRider6 = [this.state.rider6.lat, this.state.rider6.lng]
        const positionRider7 = [this.state.rider7.lat, this.state.rider7.lng]
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
