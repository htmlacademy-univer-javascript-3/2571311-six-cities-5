import FavoritesEmpty from './favoritesEmpty';
import Header from '../../src/components/header/header';
import  PlaceCard  from '../../src/components/placeCard/placeCard';
import { useAppSelector } from '../../src/store/hooks/hooks';


const FavoritesPage = (): JSX.Element => {
  const offers = useAppSelector((state) => state.userSlice.favoriteOffers);

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {offers.length > 0 ? (
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {offers.map((offer) => (
                  <PlaceCard key={offer.id} place={offer} type="Favorites" />
                ))}
              </ul>
            </section>
          ) : (
            <FavoritesEmpty />
          )}
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width="64"
            height="33"
          />
        </a>
      </footer>
    </div>
  );
};

export default FavoritesPage;
