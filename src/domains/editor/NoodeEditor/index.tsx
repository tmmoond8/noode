import React from 'react';
import { Stack } from '@chakra-ui/react';
import { Toolbar } from './Toolbar';
import { BottomBar } from './BottomBar';
import { Canvas } from './Canvas';

export function NoodeEditor() {
  return (
    <Stack width="100%" height="100%" flex="1" overflow="hidden" gap="0">
      <Toolbar />
      <Canvas />
      <BottomBar />
    </Stack>
  );
}
