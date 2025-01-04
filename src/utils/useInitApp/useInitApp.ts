import { useEffect } from 'react';
import { useAppDispatch } from '../../store/hooks/hooks';
import { getGlobalOffers } from '../../store/action';

function useAppInit() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getGlobalOffers());
  }, [dispatch]);
}

export default useAppInit;
