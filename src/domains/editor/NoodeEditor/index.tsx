import React from 'react';
import Script from 'next/script';
import { Box, Flex, Stack, Wrap } from '@chakra-ui/react';
import { Toolbar } from './Toolbar';
import { BottomBar } from './BottomBar';
import { fabric } from 'fabric';
import { useFabricStore } from '@/stores';
import { useDelay } from '@/hooks';

export function NoodeEditor() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const delay500 = useDelay(500);

  React.useLayoutEffect(() => {
    if (containerRef.current && delay500) {
      var canvas = new fabric.Canvas('canvas');
      canvas.setWidth(containerRef.current.offsetWidth);
      canvas.setHeight(containerRef.current.offsetHeight);
      canvas.add(
        new fabric.Text('very tips, much thanks 🐕\nDLgEWDm7k12iPxMjpxteucPNH5qpFQdTqS', {
          left: 30,
          top: containerRef.current.offsetHeight - 50,
          fontFamily: 'arial black',
          fill: '#000000',
          fontSize: 15,
        }),
      );
      var center = canvas.getCenter();
      canvas.setBackgroundImage(
        'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1686670691/noticon/x7pwcoyu1tvbxvc5ps9n.gif',
        canvas.renderAll.bind(canvas),
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
      // dispatch({ type: 'INIT', canvas: canvas });
      return () => {
        canvas.dispose();
      };
    }
  }, [delay500]);

  return (
    <Stack width="100%" height="100%" flex="1">
      <Toolbar />
      <Box flex="1" ref={containerRef}>
        <canvas id="canvas"></canvas>
      </Box>
      <BottomBar />
    </Stack>
  );
}
