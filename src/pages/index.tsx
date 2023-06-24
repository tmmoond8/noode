import Head from 'next/head';
import { Stack, Flex, Container } from '@chakra-ui/react';
import { Header } from '@/domains/editor/Header';
import { Toolbar } from '@/domains/editor/Toolbar';

export default function Home() {
  return (
    <Stack gap="0" height="100%">
      <Header />
      <Flex flex="1">
        <Toolbar />
        <div>app</div>
      </Flex>
    </Stack>
  );
}
