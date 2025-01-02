import { TPlaceCardEntity } from '../placeCard.typings/placeCard.typings';
import MainPage from '../../../pages/mainPage/mainPage';

type TAppProps = {
    places: TPlaceCardEntity[];
};

function App({ places }: TAppProps): JSX.Element {
  return <MainPage places={places} />;
}

export default App;
