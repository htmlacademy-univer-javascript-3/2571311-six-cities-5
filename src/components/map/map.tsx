import { useRef, useEffect } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import useMap from './useMap'; // Для управления картой
import { TCity, TPoint} from '../../utils/types/types';
import { URL_MARKER } from '../../utils/const/const';

type TMapProps = {
  city: TCity; // Центр города
  places: TPoint[]; // Массив всех мест
  selectedPoint: TPoint | undefined; // Выбранная точка
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
function Map(props: TMapProps): JSX.Element {
  const { city, places, selectedPoint } = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      places.forEach((point) => {
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude,
        });

        marker
          .setIcon(selectedPoint !== undefined &&
          point.latitude === selectedPoint.latitude &&
          point.longitude === selectedPoint?.longitude
            ? currentCustomIcon
            : defaultCustomIcon
          )
          .addTo(markerLayer);
      });
      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, places, selectedPoint]);

  return (
    <section className="cities__map map" style={{ background: 'none' }}>
      <div style={{ height: '100%' }} ref={mapRef}></div>
    </section>
  );
}

export default Map;
