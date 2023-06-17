import Head from 'next/head';
import { Stack, Container } from '@chakra-ui/react';
import { Header } from '@/domains/editor/Header';

export default function Home() {
  return (
    <Stack>
      <Header />
      <div>app</div>
    </Stack>
  );
}
