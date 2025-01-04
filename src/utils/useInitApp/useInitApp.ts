import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { getGlobalOffers, validateUser } from '../../store/action';

function useAppInit() {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(
    (state) => state.userSlice.authorizationStatus
  );
  useEffect(() => {
    if (authorizationStatus) {
      dispatch(validateUser());
    }
    dispatch(getGlobalOffers());
  }, [dispatch, authorizationStatus]);
}

export default useAppInit;
