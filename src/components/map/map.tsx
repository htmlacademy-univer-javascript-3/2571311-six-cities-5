import { useRef, useEffect } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import useMap from '../../hooks/useMap'; // Для управления картой
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import 'leaflet/dist/leaflet.css';
import { City, Point } from '../../types/types';

type MapProps = {
    city: City; // Центр города
    points: Point[]; // Массив всех мест
    selectedPoint?: Point; // Выбранная точка
  };

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map(props: MapProps): JSX.Element {
  const { city, points, selectedPoint } = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);

      points.forEach((point) => {
        const marker = new Marker({
          lat: point.lat,
          lng: point.lng,
        });

        marker
          .setIcon(
            selectedPoint !== undefined && point.title === selectedPoint.title
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, selectedPoint]);

  return <div style={{ height: '500px' }} ref={mapRef}></div>;
}

export default Map;
