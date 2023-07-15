import React from 'react';
import { Box, Text, Grid, Stack, Wrap } from '@chakra-ui/react';
import { theme, Theme, useTheme } from '@/styles/chakraTheme';
import { shallow, useEditorUiStore, useFabricStore } from '@/stores';
import { fabric } from 'fabric';

const { colors } = theme as Theme;

const SOLID_COLOR_SET = [
  { label: 'black', value: colors.black },
  { label: 'deep gray', value: colors.gray[700] },
  { label: 'gray', value: colors.gray[500] },
  { label: 'gray', value: colors.gray[300] },
  { label: 'light gray', value: colors.gray[100] },
  { label: 'white', value: colors.white },
];

export function ColorPanel() {
  const { controlPanelData, setControlPanelData } = useEditorUiStore(
    (state) => ({
      controlPanelData: state.controlPanelData,
      setControlPanelData: state.setControlPanelData,
    }),
    shallow,
  );
  const { selectedObjects, setSelectedObjects, setObjectMap, canvas } = useFabricStore(
    (state) => ({
      canvas: state.canvas,
      selectedObjects: state.selectedObjects,
      objectMap: state.objectMap,
      setObjectMap: state.setObjectMap,
      setSelectedObjects: state.setSelectedObjects,
    }),
    shallow,
  );
  const handleClick = (color: string) => {
    if (!controlPanelData) {
      return;
    }

    selectedObjects.forEach((object) => {
      setObjectMap(object.name!, (prev) => ({ ...prev, fill: color }));
    });
    setControlPanelData({ ...controlPanelData });
    setSelectedObjects(
      selectedObjects.map((object) => {
        const cloned = fabric.util.object.clone(object);
        cloned.set('fill', color);
        return cloned;
      }),
    );
  };

  return (
    <Box padding="16px">
      <Text>Colors</Text>
      <Grid flexWrap="wrap" gap="8px" gridTemplateRows="repeat(6, 1fr)" gridTemplateColumns="repeat(6, 1fr)">
        {SOLID_COLOR_SET.map(({ label, value }) => (
          <ColorButton key={label + value} onClick={() => handleClick(value)} color={value} />
        ))}
      </Grid>
    </Box>
  );
}

function ColorButton({ color, onClick }: { color: string; onClick: () => void }) {
  const { colors } = useTheme();
  return (
    <Box
      padding="4px"
      borderRadius="2px"
      _hover={{
        bgColor: colors.gray[200],
      }}
      onClick={onClick}
      cursor="pointer"
      aspectRatio="1"
    >
      <Box w="100%" h="100%" background={color} borderRadius="2px" border="1px solid #efefefef" />
    </Box>
  );
}
