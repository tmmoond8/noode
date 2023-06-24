import React from 'react';
import { Box, Text, Flex, Stack, Wrap } from '@chakra-ui/react';

interface Props {
  title?: string;
}

export function ElementPanel({ title }: Props) {
  return (
    <Box width="343px" height="100%" backgroundColor="gray.700" padding="20px">
      <Text size="3xl" color="whiteAlpha.600">
        ElementPanel
      </Text>
    </Box>
  );
}
