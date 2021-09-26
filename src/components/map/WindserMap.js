import React from 'react'
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import useswr from 'swr';

const fetcher = (...args) => fetch(...args).then(response => response.json())

const WindserMap = () => {
    const url = "https://opendata.citywindsor.ca/api/traffic"
    const {data,error} = useSwr(url, {fetcher})
    const traffic = data && !error? data.slice(0,100):[]  
    return (
        <MapContainer
        center={[37.043594,-95.658791]}
        zoom={12}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {Qty.map(qty => <Marker key={data.IntersectionId} vehicle={data.Traffic.VehicleType} />)}

      </MapContainer>
    )
}

export default WindserMap;
