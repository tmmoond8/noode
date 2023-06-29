import React from 'react';
import { fabric } from 'fabric';
import { Box, Text, VStack, Flex, Stack, Wrap, Button } from '@chakra-ui/react';
import { useFabricStore } from '@/stores';
import { uuid } from '@/utils/string';

interface Props {
  title?: string;
}

export function ElementPanel({ title }: Props) {
  const { canvas } = useFabricStore();
  return (
    <Box width="343px" height="100%" backgroundColor="gray.700" padding="20px">
      <VStack>
        <Button
          onClick={() => {
            const { top, left } = canvas?.getCenter() ?? {};
            canvas?.add(
              new fabric.Rect({
                width: 100,
                height: 100,
                fill: 'red',
                top,
                left,
                name: uuid('Rect-'),
                type: 'Rect',
              }),
            );
          }}
        >
          Rect 추가
        </Button>
        <Button
          onClick={() => {
            const { top, left } = canvas?.getCenter() ?? {};
            canvas?.add(
              new fabric.Circle({
                radius: 20,
                top,
                left,
                fill: 'blue',
                name: uuid('Circle-'),
                type: 'Circle',
              }),
            );
          }}
        >
          Circle 추가
        </Button>
        <Button
          onClick={() => {
            const { top, left } = canvas?.getCenter() ?? {};
            canvas?.add(
              new fabric.Triangle({
                width: 100,
                height: 100,
                top,
                left,
                fill: 'green',
                name: uuid('Triangle-'),
                type: 'Triangle',
              }),
            );
          }}
        >
          Triangle 추가
        </Button>
      </VStack>
    </Box>
  );
}
