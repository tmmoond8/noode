import React from 'react';
import { fabric } from 'fabric';
import { Box, VStack, Button, Wrap } from '@chakra-ui/react';
import { shallow, useFabricStore } from '@/stores';
import { generateUUID } from '@/utils/string';

export function TextPanel() {
  const { canvas, setTextMap } = useFabricStore(
    (state) => ({ canvas: state.canvas, setTextMap: state.setTextMap }),
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
            const uuid = generateUUID('TEXT-');
            const text = new fabric.Textbox('hello world!', {
              top,
              left,
              editable: true,
              fontFamily: 'arial black',
              fill: '#000000',
              fontSize: 24,
              type: 'Text',
              name: uuid,
            });
            setTextMap(uuid, text);
            console.log('add text');
          }}
        >
          Text 추가
        </Button>
      </VStack>
    </Box>
  );
}
