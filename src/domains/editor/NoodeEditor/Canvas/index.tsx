import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { shallow, useFabricStore } from '@/stores';
import { WhiteBoard } from './WhiteBoard';
import { Textbox, FabricObject } from '@/domains/editor/NoodeEditor/Canvas/Element';
import { useInitFabric } from '@/hooks/fabric/useInitFabric';

export function Canvas() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { canvas, textMap, objectMap, whiteboard } = useFabricStore(
    (state) => ({
      whiteboard: state.whiteboard,
      canvas: state.canvas,
      setCanvas: state.setCanvas,
      textMap: state.textMap,
      objectMap: state.objectMap,
    }),
    shallow,
  );

  useInitFabric(containerRef);

  return (
    <Box className="editor-container" flex="1" ref={containerRef}>
      <canvas id="canvas" />
      <WhiteBoard options={whiteboard} />
      {Object.entries(textMap).map(
        ([uuid, options]) => canvas && <Textbox uuid={uuid} options={options} canvas={canvas} key={uuid} />,
      )}
      {Object.entries(objectMap).map(
        ([uuid, options]) => canvas && <FabricObject uuid={uuid} options={options} canvas={canvas} key={uuid} />,
      )}
    </Box>
  );
}
