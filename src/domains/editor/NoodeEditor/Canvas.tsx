import React from 'react';
import { fabric } from 'fabric';
import { Box, Flex, Stack, Wrap } from '@chakra-ui/react';
import { shallow, useEditorUiStore, useFabricStore } from '@/stores';
import { useDelay } from '@/hooks';
import { WhiteBoard } from './WhiteBoard';

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
  const { canvas, setCanvas } = useFabricStore(
    (state) => ({ canvas: state.canvas, setCanvas: state.setCanvas }),
    shallow,
  );

  const containerRef = React.useRef<HTMLDivElement>(null);
  const delay500 = useDelay(500);

  React.useEffect(() => {
    console.log('aaa', delay500);
    if (containerRef.current && delay500) {
      console.log('bbbb');
      const _canvas = new fabric.Canvas('canvas');
      setCanvas(_canvas);
      const { offsetHeight, offsetWidth } = containerRef.current;
      _canvas.setWidth(offsetWidth);
      _canvas.setHeight(offsetHeight);

      const background = new fabric.Rect({
        width: offsetWidth,
        height: offsetHeight,
        fill: 'grey',
        selectable: false,
      });

      _canvas.add(background);

      // _canvas.add(
      //   new fabric.Text('very tips, much thanks 🐕\nDLgEWDm7k12iPxMjpxteucPNH5qpFQdTqS', {
      //     left: 30,
      //     top: containerRef.current.offsetHeight - 50,
      //     fontFamily: 'arial black',
      //     fill: '#000000',
      //     fontSize: 15,
      //   }),
      // );
      // var center = _canvas.getCenter();
      // _canvas.setBackgroundImage(
      //   'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1686670691/noticon/x7pwcoyu1tvbxvc5ps9n.gif',
      //   _canvas.renderAll.bind(_canvas),
      //   {
      //     scaleX: 1.2,
      //     scaleY: 1.2,
      //     // width: 600,
      //     // height: 600,
      //     top: center.top,
      //     left: center.left,
      //     originX: 'center',
      //     originY: 'center',
      //   },
      // );
      fabric.Object.prototype.transparentCorners = true;
      fabric.Object.prototype.cornerColor = 'blue';
      fabric.Object.prototype.cornerStyle = 'circle';
      return () => {
        // _canvas.dispose();
      };
    }
  }, [delay500]);

  React.useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setEditorSize({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
      console.log(',kkkk');
    };
    handleResize();
    if (globalThis) {
      globalThis.addEventListener('resize', handleResize);
      return () => {
        globalThis.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  React.useEffect(() => {
    if (!canvas || !containerRef.current) {
      return;
    }
    canvas.setWidth(containerRef.current.offsetWidth);
    canvas.setHeight(containerRef.current.offsetHeight);
    canvas.renderAll();
  }, [tab, canvas]);

  return (
    <Box flex="1" ref={containerRef}>
      <canvas id="canvas" />
      <WhiteBoard />
    </Box>
  );
}
