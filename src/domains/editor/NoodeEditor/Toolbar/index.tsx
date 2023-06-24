import React from 'react';
import { Box, Flex, Stack, Wrap } from '@chakra-ui/react';

interface Props {
  title?: string;
}

export function Toolbar({ title }: Props) {
  return <Flex h="48px">Toolbar - Menu</Flex>;
}
