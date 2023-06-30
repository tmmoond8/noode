import React from 'react';
import { Box } from '@chakra-ui/react';
import { shallow, useFabricStore } from '@/stores';
import { WhiteBoard } from './WhiteBoard';
import { Textbox, FabricObject } from '@/domains/editor/NoodeEditor/Canvas/Element';
import { useInitFabric, useResizeCanvas } from '@/hooks/fabric';

export function Canvas() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { canvas, textMap, objectMap } = useFabricStore(
    (state) => ({
      canvas: state.canvas,
      setCanvas: state.setCanvas,
      textMap: state.textMap,
      objectMap: state.objectMap,
    }),
    shallow,
  );

  useResizeCanvas({ canvas, containerRef });
  useInitFabric(containerRef);

  return (
    <Box className="editor-container" flex="1" ref={containerRef}>
      <canvas id="canvas" />
      <WhiteBoard />
      {Object.entries(textMap).map(
        ([uuid, options]) => canvas && <Textbox uuid={uuid} options={options} canvas={canvas} key={uuid} />,
      )}
      {Object.entries(objectMap).map(
        ([uuid, options]) => canvas && <FabricObject uuid={uuid} options={options} canvas={canvas} key={uuid} />,
      )}
    </Box>
  );
}
