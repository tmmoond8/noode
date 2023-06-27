import React from 'react';
import { fabric } from 'fabric';
import { Box, Text, VStack, Flex, Stack, Wrap, Button } from '@chakra-ui/react';
import { useFabricStore } from '@/stores';

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
                top,
                left,
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
