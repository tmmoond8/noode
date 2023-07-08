import React from 'react';
import { Box, Flex, Stack, Wrap } from '@chakra-ui/react';
import { shallow, useEditorUiStore } from '@/stores';
import { ColorPanel } from './ColorPanel';

export function ControlPanelContainer() {
  const ref = React.useRef<HTMLDivElement>(null);
  const { controlPanelData, setControlPanelData } = useEditorUiStore(
    (state) => ({
      controlPanelData: state.controlPanelData,
      setControlPanelData: state.setControlPanelData,
    }),
    shallow,
  );

  React.useEffect(() => {
    if (controlPanelData) {
      const handleClickWindow = (e: MouseEvent) => {
        const $header = globalThis.document.querySelector('.noode-header');
        if ($header && $header.contains(e.target as Node | null)) {
          e.stopPropagation();
          e.preventDefault();
          return;
        }
        const $toolbar = globalThis.document.querySelector('.noode-toolbar');
        if ($toolbar && $toolbar.contains(e.target as Node | null)) {
          e.stopPropagation();
          e.preventDefault();
          return;
        }

        if (ref.current && ref.current.contains(e.target as Node | null)) {
          e.stopPropagation();
          e.preventDefault();
          return;
        }
        setControlPanelData(null);
      };
      // 이벤트 달기

      globalThis.addEventListener('click', handleClickWindow);
      return () => {
        globalThis.removeEventListener('click', handleClickWindow);
      };
    }
  }, [controlPanelData]);

  return (
    <Box ref={ref} width="100%" height="100%" backgroundColor="#fff" boxShadow="1px 0 gray">
      {controlPanelData?.type && <ColorPanel />}
    </Box>
  );
}
