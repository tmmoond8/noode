import React from 'react';
import { Flex } from '@chakra-ui/react';
import { shallow, useFabricStore, useSelector } from '@/stores';
import { SingleToolbar } from './SingleToolbar';

interface Props {
  title?: string;
}

export function Toolbar({ title }: Props) {
  const { selectedObjects } = useSelector((state) => ({
    selectedObjects: state.ffabric.present.selectedObjects,
  }));
  // const { selectedObjects } = useFabricStore(
  //   (state) => ({
  //     selectedObjects: state.selectedObjects,
  //   }),
  //   shallow,
  // );

  const isSingle = selectedObjects.length === 1;
  const isEmpty = selectedObjects.length === 0;
  const group = selectedObjects.length > 1;

  return (
    <Flex className="noode-toolbar" h="48px" overflow="hidden" padding="0 20px" alignItems="center">
      {isEmpty && <div>empty</div>}
      {isSingle && <SingleToolbar object={selectedObjects[0]} />}
    </Flex>
  );
}
