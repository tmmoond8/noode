import React from 'react';
import { Box, Flex, Stack, Wrap } from '@chakra-ui/react';
import { shallow, useFabricStore } from '@/stores';
import { SingleToolbar } from './SingleToolbar';

interface Props {
  title?: string;
}

export function Toolbar({ title }: Props) {
  const { selectedObjects } = useFabricStore(
    (state) => ({
      selectedObjects: state.selectedObjects,
    }),
    shallow,
  );

  const isSingle = selectedObjects.length === 1;
  const isEmpty = selectedObjects.length === 0;
  const group = selectedObjects.length > 1;

  console.log('selectedObjects', selectedObjects);

  // if (isEmpty) {
  //   return <Flex h="48px">Toolbar - Menu</Flex>;
  // }

  // if (isSingle) {
  //   const singleObject = selectedObjects[0];
  //   return (
  //     <Flex h="48px">
  //       {singleObject.name} {singleObject.type}
  //     </Flex>
  //   );
  // }
  return (
    <Flex h="48px" overflow="hidden" padding="0 20px" alignItems="center">
      {isEmpty && <div>empty</div>}
      {isSingle && <SingleToolbar object={selectedObjects[0]} />}
    </Flex>
  );
}
