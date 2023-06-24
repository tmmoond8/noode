import React from 'react';
import { Box, Text, Stack, Wrap } from '@chakra-ui/react';

interface Props {
  title?: string;
}

export function DrawPanel({ title }: Props) {
  return (
    <Box padding="20px">
      <Text size="3xl" color="whiteAlpha.600">
        DrawPanel
      </Text>
    </Box>
  );
}
