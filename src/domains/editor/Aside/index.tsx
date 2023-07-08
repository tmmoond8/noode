import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { SideBar } from './SideBar';
import { TabContainer } from './TabContainer';
import { shallow, useEditorUiStore } from '@/stores';

export function SideTab() {
  const { tab, setTab } = useEditorUiStore(
    (state) => ({
      tab: state.tab,
      setTab: state.setTab,
    }),
    shallow,
  );

  return (
    <Flex height="100%" zIndex={10}>
      <SideBar />
      <Box position="relative" width="343px" height="100%" backgroundColor="gray.700">
        <TabContainer />
      </Box>
    </Flex>
  );
}
