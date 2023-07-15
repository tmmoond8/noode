import React from 'react';
import { shallow, useEditorUiStore, useFabricStore } from '@/stores';
import { IEvent } from 'fabric/fabric-impl';
import { ControlPanelData } from '@/types/editor';

export const useSelectionEvent = () => {
  const { canvas, setSelectedObjects } = useFabricStore(
    (state) => ({
      canvas: state.canvas,
      setSelectedObjects: state.setSelectedObjects,
    }),
    shallow,
  );
  const { setControlPanelData } = useEditorUiStore(
    (state) => ({
      setControlPanelData: state.setControlPanelData,
    }),
    shallow,
  );

  React.useEffect(() => {
    if (!canvas) {
      return;
    }

    const handleCreateSelection = (selectionEvent: IEvent<Event>) => {
      if (!selectionEvent?.selected) {
        console.warn('selection:created null');
        return;
      }
      const selected = selectionEvent.selected;
      setSelectedObjects(selected);
    };

    const handleUpdateSelection = (selectionEvent: IEvent<Event>) => {
      console.info('selection:update', selectionEvent);
      if (!selectionEvent?.selected) {
        console.warn('selection:update null');
        return;
      }
      const selected = selectionEvent.selected;
      setSelectedObjects(selected);
    };

    const handleClearSelection = (selectionEvent: IEvent<Event>) => {
      console.info('selection:cleared', selectionEvent);
      setSelectedObjects([]);
      setControlPanelData(null);
    };

    canvas.on('selection:created', handleCreateSelection);
    canvas.on('selection:updated', handleUpdateSelection);
    canvas.on('selection:cleared', handleClearSelection);

    return () => {
      if (canvas) {
        canvas.off('selection:created', handleCreateSelection);
        canvas.off('selection:updated', handleUpdateSelection);
        canvas.off('selection:cleared', handleClearSelection);
      }
    };
  }, [canvas]);
};
