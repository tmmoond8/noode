import React from 'react';
import { fabric } from 'fabric';
import { Text, Flex, Stack, Wrap } from '@chakra-ui/react';
import { ColorButton } from './toolbarIconButtons/ColorButton';
import { NumberStepper } from './toolbarIconButtons/NumberStepper';

interface Props {
  object: fabric.Object;
}

export function SingleToolbar({ object }: Props) {
  console.log('object', object);
  return (
    <Flex alignItems="center">
      <Text>{object.type}</Text>
      <Text>|</Text>
      {typeof object.fill === 'string' && <ColorButton fill={object.fill} />}
      <Text>angle</Text>
      {typeof object.borderColor === 'string' && <ColorButton fill={object.borderColor} />}
    </Flex>
  );
}
