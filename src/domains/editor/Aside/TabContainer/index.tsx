import React from 'react';
import { Box } from '@chakra-ui/react';
import { BiChevronLeft } from 'react-icons/bi';
import { ElementTab } from './ElementTab';
import { TextTab } from './TextTab';
import { UploadTab } from './UploadTab';
import { DrawTab } from './DrawTab';
import { useTheme } from '@/styles/chakraTheme';
import { css } from '@emotion/react';
import { shallow, useEditorUiStore } from '@/stores';

export function TabContainer() {
  const { tab, controlPanelData, setTab } = useEditorUiStore(
    (state) => ({
      tab: state.tab,
      setTab: state.setTab,
      controlPanelData: state.controlPanelData,
    }),
    shallow,
  );

  if (controlPanelData) {
    return <></>;
  }

  return (
    <>
      {tab === 'element' && <ElementTab />}
      {tab === 'text' && <TextTab />}
      {tab === 'upload' && <UploadTab />}
      {tab === 'draw' && <DrawTab />}
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
    </>
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
