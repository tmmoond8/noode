import React from 'react';
import { useDelay } from '@/hooks';
import { fabric } from 'fabric';
import { shallow, useDispatch, useEditorUiStore, useFabricStore } from '@/stores';
import { useTheme } from '@/styles/chakraTheme';

export const useInitializeCanvas = () => {
  const delay500 = useDelay(500);
  const { colors } = useTheme();
  const { dispatch, actions } = useDispatch();

  const { canvasSize } = useEditorUiStore(
    (state) => ({
      canvasSize: state.canvasSize,
    }),
    shallow,
  );

  React.useEffect(() => {
    if (delay500) {
      const _canvas = new fabric.Canvas('canvas', {
        width: canvasSize.width,
        height: canvasSize.height,
        backgroundColor: colors.gray[600],
        renderOnAddRemove: true,
      });
      dispatch(actions.ffabric.setCanvas(_canvas));
      // setCanvas(_canvas);

      fabric.Object.prototype.transparentCorners = true;
      fabric.Object.prototype.cornerColor = 'blue';
      fabric.Object.prototype.cornerStyle = 'circle';

      return () => {
        if (process.env.NODE_ENV !== 'development') {
          _canvas.dispose();
        }
      };
    }
  }, [delay500]);
};
