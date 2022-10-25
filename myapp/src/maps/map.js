import './map.css'
import React from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const position = {
  lat: -22.8808387,
  lng: -43.4217293
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCYpVhhIq9TEb2fo4pfNVYtvSNMzYrqh1c"
  })

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={{width:'100%',height:'100%'}}
        center={position}
        zoom={16}
      >

      <Marker position={position} options={{
        label: {
          text:'Estamos Aqui',
          className:'mapLabel'
        },
      }}/>
        
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)