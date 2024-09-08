import './worldMap.css';
import { useQuery } from 'react-query';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Trash } from '@phosphor-icons/react';
import { Icon } from 'leaflet';

type Props = {};

function WorldMap({}: Props) {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["countries"],
    queryFn: async () => {
      const response = await fetch("https://disease.sh/v3/covid-19/countries");
      return await response.json();
    },
    refetchOnWindowFocus: false,
  });

  if (isLoading || isError || !data) return <></>;

  return (
      <MapContainer center={[20, 0]} zoom={2} scrollWheelZoom={true} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {data.map((country: any) => (
          <Marker
            icon={
             new Icon({
               iconUrl: './images/map-marker.webp',
               iconSize : [25,25],
            })}
            key={country.countryInfo._id}
            position={[country.countryInfo.lat, country.countryInfo.long]}
          >
            <Popup>
              <div>
                <h3>{country.country}</h3>
                <p>Cases: {country.cases}</p>
                <p>Deaths: {country.deaths}</p>
                <p>Recovered: {country.recovered}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
  );
}

export default WorldMap;
