import React from 'react';
import { css } from '@emotion/react';
import { fabric } from 'fabric';
import { useTheme } from '@/styles/chakraTheme';
import { Box, Flex, Stack, Wrap } from '@chakra-ui/react';

interface Props {
  fill: string;
}

export function ColorButton({ fill }: Props) {
  const { colors } = useTheme();
  return (
    <Wrap
      padding="4px"
      borderRadius="2px"
      _hover={{
        bgColor: colors.gray[200],
      }}
    >
      <Box w="24px" h="24px" background={fill} borderRadius="2px" />
    </Wrap>
  );
}
