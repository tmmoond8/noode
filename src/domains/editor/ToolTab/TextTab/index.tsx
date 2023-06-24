import React from 'react';
import { Box, Text, Stack, Wrap } from '@chakra-ui/react';

interface Props {
  title?: string;
}

export function TextTab({ title }: Props) {
  return (
    <Box width="343px" height="100%" backgroundColor="gray.700" padding="20px">
      <Text size="3xl" color="whiteAlpha.600">
        TextTab
      </Text>
    </Box>
  );
}
