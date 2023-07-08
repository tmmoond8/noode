import React from 'react';
import { IconButton, Box, Flex, Button, Stack, Wrap, useDisclosure } from '@chakra-ui/react';
import { BiUndo, BiRedo } from 'react-icons/bi';
import { ResizeButton } from './ResizeButton';

interface Props {
  title?: string;
}

export function Header({ title }: Props) {
  const resizeModal = useDisclosure();
  return (
    <Flex
      className="noode-header"
      as="header"
      alignItems="center"
      justifyContent="space-between"
      p="8px 12px"
      pt="max(8px,env(safe-area-inset-top))"
      bg="gray.300"
    >
      <Flex gap="8px">
        <Button>File</Button>
        <ResizeButton text="Resize" />
        <Box w="1px" bg="gray.100" />
        <IconButton aria-label="" icon={<BiUndo size="34" />} />
        <IconButton aria-label="" icon={<BiRedo size="34" />} />
      </Flex>

      <Flex gap="8px">
        <Button>Login</Button>
      </Flex>
    </Flex>
  );
}
