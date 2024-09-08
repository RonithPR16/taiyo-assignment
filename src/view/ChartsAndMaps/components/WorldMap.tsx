import React from 'react'
import { useQuery } from 'react-query';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
type Props = {}

function WorldMap({ }: Props) {
     const { isLoading, isError, data } = useQuery({
    queryKey: ["countries"],
    queryFn: async () => {
      const response = await fetch(
        "https://disease.sh/v3/covid-19/countries",
      );
      return await response.json();
    },
    refetchOnWindowFocus:false
     });
    
  if (isLoading || isError || !data) return <></>;
  return (
      <div className='h-[80vh]'>
          <MapContainer center={[51.505, -0.09]}  zoom={2}  scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />

</MapContainer>
    </div>
  )
}

export default WorldMap