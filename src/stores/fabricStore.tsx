import { create } from 'zustand';
import type { fabric } from 'fabric';

export interface FabricStore {
  loadStatus: 'idle' | 'fetching' | 'loaded' | 'destroyed';
  fabric: any;
  getFabric: () => any;
}

export const useFabricStore = create<FabricStore>((set, get) => ({
  fabric: null,
  loadStatus: 'idle',
  getFabric: (): any => {
    try {
      const { loadStatus } = get();
      if (loadStatus !== 'loaded') {
        throw Error('fabric is not loaded');
      }
    } catch (error) {
      console.error('error');
    }
  },
}));
