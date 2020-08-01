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
        const positionRider8 = [this.state.rider8.lat, this.state.rider8.lng]
        const positionRider9 = [this.state.rider9.lat, this.state.rider9.lng]
        const positionRider10 = [this.state.rider10.lat, this.state.rider10.lng]
        const positionRider11 = [this.state.rider11.lat, this.state.rider11.lng]
        const positionRider12 = [this.state.rider12.lat, this.state.rider12.lng]
        const positionRider13 = [this.state.rider13.lat, this.state.rider13.lng]
        const positionRider14 = [this.state.rider14.lat, this.state.rider14.lng]
        const positionRider15 = [this.state.rider15.lat, this.state.rider15.lng]
        const positionRider16 = [this.state.rider16.lat, this.state.rider16.lng]
        const positionRider17 = [this.state.rider17.lat, this.state.rider17.lng]
        const positionRider18 = [this.state.rider18.lat, this.state.rider18.lng]
        const positionRider19 = [this.state.rider19.lat, this.state.rider19.lng]
        const positionRider20 = [this.state.rider20.lat, this.state.rider20.lng]


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
            <Marker position={positionRider3} icon={this.riderIcon}>
            <Popup>
                Howard Thompson
            </Popup> 
            </Marker>
            <Marker position={positionRider4} icon={this.riderIcon}>
            <Popup>
                Maggie Lantz
            </Popup> 
            </Marker>
            <Marker position={positionRider5} icon={this.riderIcon}>
            <Popup>
                Lawrence Duran
            </Popup> 
            </Marker>
            <Marker position={positionRider6} icon={this.riderIcon}>
            <Popup>
                Irene Molina
            </Popup> 
            </Marker>
            <Marker position={positionRider7} icon={this.riderIcon}>
            <Popup>
                Nancy Garner
            </Popup> 
            </Marker>
            <Marker position={positionRider8} icon={this.riderIcon}>
            <Popup>
                Tara Taylor
            </Popup> 
            </Marker>
            <Marker position={positionRider9} icon={this.riderIcon}>
            <Popup>
                Alejandro Smith
            </Popup> 
            </Marker>
            <Marker position={positionRider10} icon={this.riderIcon}>
            <Popup>
                Tricia Renshaw
            </Popup> 
            </Marker>
            <Marker position={positionRider11} icon={this.riderIcon}>
            <Popup>
                Travis Cook
            </Popup> 
            </Marker>
            <Marker position={positionRider12} icon={this.riderIcon}>
            <Popup>
                Joan Brooks
            </Popup> 
            </Marker>
            <Marker position={positionRider13} icon={this.riderIcon}>
            <Popup>
                Joseph Rodgers
            </Popup> 
            </Marker>
            <Marker position={positionRider14} icon={this.riderIcon}>
            <Popup>
                Matthew Gregson
            </Popup> 
            </Marker>
            <Marker position={positionRider15} icon={this.riderIcon}>
            <Popup>
                Katie Dunlap
            </Popup> 
            </Marker>
            <Marker position={positionRider16} icon={this.riderIcon}>
            <Popup>
                Leo Howard
            </Popup> 
            </Marker>
        </Map>
    )
}
}
export default Maps
