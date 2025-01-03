import { useRef, useEffect } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import useMap from '../../store/hooks/useMap'; // Для управления картой
import { TCity, TPlaceCard} from '../../utils/types/types';
import { URL_MARKER } from '../../utils/const/const';

type MapProps = {
  city: TCity; // Центр города
  places: TPlaceCard[]; // Массив всех мест
  selectedPlace?: TPlaceCard; // Выбранная точка
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map(props: MapProps): JSX.Element {
  const { city, places, selectedPlace } = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      places.forEach((place: TPlaceCard) => {
        const marker = new Marker({
          lat: place.location.latitude,
          lng: place.location.longitude,
        });

        marker
          .setIcon(
            selectedPlace !== undefined && place.name === selectedPlace.name
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, places, selectedPlace]);

  return <div style={{ height: '500px' }} ref={mapRef}></div>;
}

export default Map;
