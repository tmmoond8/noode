import React from 'react';
import { fabric } from 'fabric';
import { Box, Flex, Stack, Wrap } from '@chakra-ui/react';
import { shallow, useEditorUiStore, useFabricStore } from '@/stores';
import { useDelay } from '@/hooks';
import { WhiteBoard } from './WhiteBoard';
import { resizeCanvas } from '@/utils/canvas';
import { Text, FabricObject } from '@/domains/editor/NoodeEditor/Element';

export function Canvas() {
  const { tab, width, height, setEditorSize } = useEditorUiStore(
    (state) => ({
      tab: state.tab,
      width: state.width,
      height: state.height,
      setEditorSize: state.setEditorSize,
    }),
    shallow,
  );
  const { canvas, textMap, objectMap, setCanvas } = useFabricStore(
    (state) => ({
      canvas: state.canvas,
      setCanvas: state.setCanvas,
      textMap: state.textMap,
      objectMap: state.objectMap,
    }),
    shallow,
  );

  const containerRef = React.useRef<HTMLDivElement>(null);
  const delay500 = useDelay(500);

  useResizeCanvas({ canvas, containerRef });

  React.useEffect(() => {
    if (containerRef.current && delay500) {
      const { offsetHeight, offsetWidth } = containerRef.current;
      const _canvas = new fabric.Canvas('canvas', {
        width: offsetWidth,
        height: offsetHeight,
        backgroundColor: 'gray',
        renderOnAddRemove: true,
      });
      setCanvas(_canvas);

      fabric.Object.prototype.transparentCorners = true;
      fabric.Object.prototype.cornerColor = 'blue';
      fabric.Object.prototype.cornerStyle = 'circle';
      return () => {
        _canvas.dispose();
      };
    }
  }, [delay500]);

  return (
    <Box className="editor-container" flex="1" ref={containerRef}>
      <canvas id="canvas" />
      <WhiteBoard />
      {/* {Object.entries(textMap).map(
        ([uuid, options]) => canvas && <Text uuid={uuid} options={options} canvas={canvas} key={uuid} />,
      )} */}
      {Object.entries(objectMap).map(
        ([uuid, options]) => canvas && <FabricObject uuid={uuid} options={options} canvas={canvas} key={uuid} />,
      )}
    </Box>
  );
}

const useResizeCanvas = ({
  canvas,
  containerRef,
}: {
  canvas: Nullable<fabric.Canvas>;
  containerRef: React.RefObject<HTMLDivElement>;
}) => {
  const { tab } = useEditorUiStore(
    (state) => ({
      tab: state.tab,
    }),
    shallow,
  );
  React.useEffect(() => {
    const handleResize = () => {
      if (containerRef.current && canvas) {
        // console.log('size', containerRef.current.offsetHeight);
        resizeCanvas(canvas, containerRef.current.offsetWidth, containerRef.current.offsetHeight);
      }
    };
    handleResize();
    if (globalThis) {
      globalThis.addEventListener('resize', handleResize);
      return () => {
        globalThis.removeEventListener('resize', handleResize);
      };
    }
  }, [canvas]);

  React.useEffect(() => {
    if (!canvas || !containerRef.current) {
      return;
    }
    resizeCanvas(canvas, containerRef.current.offsetWidth, containerRef.current.offsetHeight);
  }, [tab, canvas]);
};
