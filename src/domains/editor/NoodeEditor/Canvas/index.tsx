import React from 'react';
import { Box } from '@chakra-ui/react';
import { shallow, useEditorUiStore, useFabricStore } from '@/stores';
import { WhiteBoard } from './WhiteBoard';
import { Textbox, FabricObject, SelectedObject } from '@/domains/editor/NoodeEditor/Canvas/Element';
import { useInitFabric } from '@/hooks/fabric/useInitFabric';
import { useTheme } from '@/styles/chakraTheme';

export function Canvas() {
  const { colors } = useTheme();
  const { canvasSize } = useEditorUiStore(
    (state) => ({
      canvasSize: state.canvasSize,
    }),
    shallow,
  );
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

  useInitFabric();

  return (
    <Box flex="1" bg={colors.gray[600]} overflow="hidden">
      <Box
        className="editor-container"
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="relative"
        flex="1"
        width={canvasSize.width}
        height={canvasSize.height}
        left={`calc((100% - ${canvasSize.width}${canvasSize.unit}) / 2)`}
        top={`calc((100% - ${canvasSize.height}${canvasSize.unit}) / 2)`}
      >
        <canvas id="canvas" />
        <WhiteBoard options={whiteboard} />
        {Object.entries(textMap).map(
          ([uuid, options]) => canvas && <Textbox uuid={uuid} options={options} canvas={canvas} key={uuid} />,
        )}
        {Object.entries(objectMap).map(
          ([uuid, options]) => canvas && <FabricObject uuid={uuid} options={options} canvas={canvas} key={uuid} />,
        )}
        <SelectedObject canvas={canvas} />
      </Box>
    </Box>
  );
}
