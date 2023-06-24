import Head from 'next/head';
import { Stack, Flex, Container } from '@chakra-ui/react';
import { Header } from '@/domains/editor/Header';
import { ToolTab } from '@/domains/editor/ToolTab';

export default function Home() {
  return (
    <Stack gap="0" height="100%">
      <Header />
      <Flex flex="1">
        <ToolTab />
        <div>editor</div>
      </Flex>
    </Stack>
  );
}
