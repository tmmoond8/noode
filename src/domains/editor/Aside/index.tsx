import React from 'react';
import { Box, Flex, Stack, Wrap } from '@chakra-ui/react';
import { BiChevronLeft } from 'react-icons/bi';
import { SideBar } from './SideBar';
import { ElementPanel } from './ElementPanel';
import { TextPanel } from './TextPanel';
import { UploadPanel } from './UploadPanel';
import { DrawPanel } from './DrawPanel';
import { useTheme } from '@/styles/chakraTheme';
import { css } from '@emotion/react';
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
      {tab && (
        <Box position="relative" width="343px" height="100%" backgroundColor="gray.700">
          {tab === 'element' && <ElementPanel />}
          {tab === 'text' && <TextPanel />}
          {tab === 'upload' && <UploadPanel />}
          {tab === 'draw' && <DrawPanel />}
          <Box
            position="absolute"
            right="-12px"
            top="50%"
            transform="translateY(-50%)"
            cursor="pointer"
            onClick={() => setTab(null)}
            css={css`
              .chevron-left {
                position: absolute;
                right: 0;
                top: 50%;
                transform: translateY(-50%);
              }
            `}
          >
            <FoldButton />
            <BiChevronLeft className="chevron-left" color="white" />
          </Box>
        </Box>
      )}
    </Flex>
  );
}

function FoldButton() {
  const theme = useTheme();
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 96" width="16" height="96" fill={theme.colors.gray['700']}>
      <path d="M0 0h3c0 20 12 12 12 32v32c0 20-12 12-12 32H0z" fill={theme.colors.gray['700']}></path>
      <path d="M2.5 0c0 20 12 12 12 32v32c0 20-12 12-12 32" fill={theme.colors.gray['700']}></path>
    </svg>
  );
}
