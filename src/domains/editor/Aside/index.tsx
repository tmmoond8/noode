import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { SideBar } from './SideBar';
import { TabContainer } from './TabContainer';
import { ControlPanelContainer } from './ControlPanelContainer';
import { shallow, useEditorUiStore } from '@/stores';

export function Aside() {
  const { tab, controlPanelData } = useEditorUiStore(
    (state) => ({
      tab: state.tab,
      controlPanelData: state.controlPanelData,
    }),
    shallow,
  );

  return (
    <Flex height="100%" zIndex={10}>
      <SideBar />
      {(tab || controlPanelData) && (
        <Box position="relative" width="343px" height="100%" backgroundColor="gray.700">
          <TabContainer />
          <ControlPanelContainer />
        </Box>
      )}
    </Flex>
  );
}
