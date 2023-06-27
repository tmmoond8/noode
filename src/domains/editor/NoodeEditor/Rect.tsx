import React from 'react';
import { fabric } from 'fabric';
import { Box, Flex, Stack, Wrap } from '@chakra-ui/react';

interface Props extends fabric.Rect {
  title?: string;
}

export function Rect({ title }: Props) {
  return <Box>title</Box>;
}
