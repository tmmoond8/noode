import React from 'react';
import { fabric } from 'fabric';
import { Box, VStack, Button, Wrap } from '@chakra-ui/react';
import { shallow, useFabricStore } from '@/stores';
import { uuid } from '@/utils/string';

interface Props {
  title?: string;
}

export function TextPanel({ title }: Props) {
  const { canvas } = useFabricStore((state) => ({ canvas: state.canvas }), shallow);
  return (
    <Box width="343px" height="100%" backgroundColor="gray.700" padding="20px">
      <VStack>
        <Button
          onClick={() => {
            const { top, left } = canvas?.getCenter() ?? {};
            canvas?.add(
              new fabric.Text('hello world!', {
                top,
                left,
                fontFamily: 'arial black',
                fill: '#000000',
                fontSize: 24,
                type: 'Text',
                name: uuid('TEXT-'),
              }),
            );
          }}
        >
          Text 추가
        </Button>
      </VStack>
    </Box>
  );
}
