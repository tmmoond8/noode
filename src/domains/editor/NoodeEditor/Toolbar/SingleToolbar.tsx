import React from 'react';
import { fabric } from 'fabric';
import { Text, Flex, Stack, Wrap } from '@chakra-ui/react';

interface Props {
  object: fabric.Object;
}

export function SingleToolbar({ object }: Props) {
  console.log('object', object);
  return (
    <Flex alignItems="center">
      <Text>{object.type}</Text>
      <Text>|</Text>
    </Flex>
  );
}
