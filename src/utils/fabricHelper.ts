import React from 'react';
import { useFabricStore, shallow } from '@/stores';

export const useFabric = () => {
  const { loadStatus, fabric } = useFabricStore(
    (state) => ({
      loadStatus: state.loadStatus,
      fabric: state.fabric,
    }),
    shallow,
  );

  React.useEffect(() => {
    if (loadStatus === 'idle') {
      // script 실행
    }
  }, [loadStatus]);

  return;
};
