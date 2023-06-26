import React from 'react';
import Script from 'next/script';
import { Box, Flex, Stack, Wrap } from '@chakra-ui/react';
import { Toolbar } from './Toolbar';
import { BottomBar } from './BottomBar';
import { fabric } from 'fabric';
import { shallow, useEditorUiStore, useFabricStore } from '@/stores';
import { useDelay } from '@/hooks';

export function NoodeEditor() {
  const { tab } = useEditorUiStore(
    (state) => ({
      tab: state.tab,
    }),
    shallow,
  );
  const { canvas, setCanvas } = useFabricStore(
    (state) => ({ canvas: state.canvas, setCanvas: state.setCanvas }),
    shallow,
  );

  const containerRef = React.useRef<HTMLDivElement>(null);
  const delay500 = useDelay(500);

  React.useLayoutEffect(() => {
    if (containerRef.current && delay500) {
      const _canvas = new fabric.Canvas('canvas');
      setCanvas(_canvas);
      console.log('ssss', containerRef.current.offsetWidth);
      _canvas.setWidth(containerRef.current.offsetWidth);
      _canvas.setHeight(containerRef.current.offsetHeight);
      _canvas.add(
        new fabric.Text('very tips, much thanks 🐕\nDLgEWDm7k12iPxMjpxteucPNH5qpFQdTqS', {
          left: 30,
          top: containerRef.current.offsetHeight - 50,
          fontFamily: 'arial black',
          fill: '#000000',
          fontSize: 15,
        }),
      );
      var center = _canvas.getCenter();
      _canvas.setBackgroundImage(
        'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1686670691/noticon/x7pwcoyu1tvbxvc5ps9n.gif',
        _canvas.renderAll.bind(_canvas),
        {
          scaleX: 1.2,
          scaleY: 1.2,
          // width: 600,
          // height: 600,
          top: center.top,
          left: center.left,
          originX: 'center',
          originY: 'center',
        },
      );
      fabric.Object.prototype.transparentCorners = true;
      fabric.Object.prototype.cornerColor = 'blue';
      fabric.Object.prototype.cornerStyle = 'circle';
      return () => {
        _canvas.dispose();
      };
    }
  }, [delay500]);

  React.useEffect(() => {
    if (!canvas || !containerRef.current) {
      return;
    }
    console.log('canvas', canvas);
    canvas.setWidth(containerRef.current.offsetWidth);
    canvas.setHeight(containerRef.current.offsetHeight);
    canvas.renderAll();
  }, [tab, canvas]);

  return (
    <Stack width="100%" height="100%" flex="1" overflow="hidden">
      <Toolbar />
      <Box flex="1" ref={containerRef}>
        <canvas id="canvas"></canvas>
      </Box>
      <BottomBar />
    </Stack>
  );
}
