import React from 'react';
import { Box } from '@chakra-ui/react';
import { shallow, useEditorUiStore } from '@/stores';
import { ColorPanel } from './ColorPanel';

export function ControlPanelContainer() {
  const ref = React.useRef<HTMLDivElement>(null);
  const { controlPanelData } = useEditorUiStore(
    (state) => ({
      controlPanelData: state.controlPanelData,
    }),
    shallow,
  );

  return (
    <Box ref={ref} width="100%" height="100%" backgroundColor="#fff" boxShadow="1px 0 gray">
      {controlPanelData?.type && <ColorPanel />}
    </Box>
  );
}
