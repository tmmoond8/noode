import React from 'react';
import { IconButton, Box, Flex, Button, useDisclosure } from '@chakra-ui/react';
import { BiUndo, BiRedo } from 'react-icons/bi';
import { ResizeButton } from './ResizeButton';
import { ExportButton } from './ExportButton';
import { useFabricStore } from '@/stores';

interface Props {
  title?: string;
}

export function Header({ title }: Props) {
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
        <ExportButton />
        <Button>Save</Button>
        <Button>Login</Button>
      </Flex>
    </Flex>
  );
}
