import { useRef, useEffect, useMemo } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import useMap from './useMap';
import { TCity, TPoint} from '../../utils/types/types';
import { useAppSelector } from '../../store/hooks/hooks';
import offersToPoints from '../../utils/offersToPoints/offersToPoints';

type TMapProps = {
  city: TCity;
  points: TPoint[];
};

const defaultCustomIcon = new Icon({
  iconUrl: 'img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

const currentCustomIcon = new Icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

function Map(props: TMapProps): JSX.Element {
  const { city, points } = props;

  const activeOffer = useAppSelector((state) => state.offersSlice.activeOffer);
  const selectedPoint = useMemo(() => {
    if (activeOffer) {
      return offersToPoints([activeOffer])[0];
    }
  }, [activeOffer]);

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
            selectedPoint !== undefined &&
              point.lat === selectedPoint.lat &&
              point.lng === selectedPoint.lng
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

  return <div style={{ height: '100%' }} ref={mapRef}></div>;
}

export default Map;
