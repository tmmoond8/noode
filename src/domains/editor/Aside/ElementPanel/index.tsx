import React from 'react';
import { fabric } from 'fabric';
import { Box, Text, VStack, Flex, Stack, Wrap, Button } from '@chakra-ui/react';
import { shallow, useFabricStore } from '@/stores';
import { generateUUID } from '@/utils/string';

interface Props {
  title?: string;
}

export function ElementPanel({ title }: Props) {
  const { canvas, setObjectMap } = useFabricStore(
    (state) => ({
      canvas: state.canvas,
      setObjectMap: state.setObjectMap,
    }),
    shallow,
  );
  return (
    <Box width="343px" height="100%" backgroundColor="gray.700" padding="20px">
      <VStack>
        <Button
          onClick={() => {
            if (!canvas) {
              return;
            }
            const { top, left } = canvas.getCenter() ?? {};
            const uuid = generateUUID('Rect-');
            const rect = new fabric.Rect({
              width: 100,
              height: 100,
              fill: 'red',
              top,
              left,
              name: uuid,
              type: 'Rect',
            });
            setObjectMap(uuid, rect);
          }}
        >
          Rect 추가
        </Button>
        <Button
          onClick={() => {
            if (!canvas) {
              return;
            }
            const { top, left } = canvas.getCenter() ?? {};
            const uuid = generateUUID('Circle-');
            const circle = new fabric.Circle({
              radius: 20,
              top,
              left,
              fill: 'blue',
              name: uuid,
              type: 'Circle',
            });
            // canvas.add(circle);
            setObjectMap(uuid, circle);
          }}
        >
          Circle 추가
        </Button>
        <Button
          onClick={() => {
            if (!canvas) {
              return;
            }
            const { top, left } = canvas.getCenter() ?? {};
            const uuid = generateUUID('Triangle-');
            const triangle = new fabric.Triangle({
              width: 100,
              height: 100,
              top,
              left,
              fill: 'green',
              name: uuid,
              type: 'Triangle',
            });
            // canvas.add(triangle);
            setObjectMap(uuid, triangle);
          }}
        >
          Triangle 추가
        </Button>
      </VStack>
    </Box>
  );
}
