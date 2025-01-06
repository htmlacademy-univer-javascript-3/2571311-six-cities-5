import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { fetchFavoriteOffer, getGlobalOffers, validateUser } from '../../store/action';

function useAppInit() {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(
    (state) => state.userSlice.authorizationStatus
  );
  useEffect(() => {
    dispatch(getGlobalOffers());
    dispatch(validateUser());
    dispatch(fetchFavoriteOffer());
  }, [dispatch, authorizationStatus]);
}

export default useAppInit;
