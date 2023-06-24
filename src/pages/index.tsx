import Head from 'next/head';
import { Stack, Flex, Container } from '@chakra-ui/react';
import { Header } from '@/domains/editor/Header';
import { ToolTab } from '@/domains/editor/Aside';
import { NoodeEditor } from '@/domains/editor/NoodeEditor';

export default function Home() {
  return (
    <Stack gap="0" height="100%">
      <Header />
      <Flex flex="1">
        <ToolTab />
        <NoodeEditor />
      </Flex>
    </Stack>
  );
}
