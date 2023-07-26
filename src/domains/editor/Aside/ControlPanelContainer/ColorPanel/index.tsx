import React from 'react';
import { Box, Text, Grid, Stack, Wrap } from '@chakra-ui/react';
import { theme, Theme, useTheme } from '@/styles/chakraTheme';
import { shallow, useDispatch, useEditorUiStore, useFabricStore, useSelector } from '@/stores';
import { fabric } from 'fabric';

const { colors } = theme as Theme;

const getColorSet = (color: keyof typeof colors) => [
  { label: 'dark ' + color, value: colors[color][900] },
  { label: 'deep ' + color, value: colors[color][700] },
  { label: color, value: colors[color][500] },
  { label: 'pastel ' + color, value: colors[color][300] },
  { label: 'light ' + color, value: colors[color][100] },
  { label: 'pale ' + color, value: colors[color][50] },
];

const SOLID_COLOR_SET = [
  // 무채색
  { label: 'black', value: colors.black },
  { label: 'deep gray', value: colors.gray[700] },
  { label: 'gray', value: colors.gray[500] },
  { label: 'gray', value: colors.gray[300] },
  { label: 'light gray', value: colors.gray[100] },
  { label: 'white', value: colors.white },
  ...getColorSet('red'),
  ...getColorSet('blue'),
  ...getColorSet('teal'),
  ...getColorSet('green'),
  ...getColorSet('yellow'),
  ...getColorSet('orange'),
  ...getColorSet('purple'),
];

export function ColorPanel() {
  const { controlPanelData, setControlPanelData } = useEditorUiStore(
    (state) => ({
      controlPanelData: state.controlPanelData,
      setControlPanelData: state.setControlPanelData,
    }),
    shallow,
  );
  const { canvas, objectMap, selectedObjects } = useSelector((state) => ({
    canvas: state.ffabric.present.canvas,
    objectMap: state.ffabric.present.objectMap,
    selectedObjects: state.ffabric.present.selectedObjects,
  }));
  const { dispatch, actions } = useDispatch();
  // const { selectedObjects, setSelectedObjects, setObjectMap, canvas } = useFabricStore(
  //   (state) => ({
  //     canvas: state.canvas,
  //     selectedObjects: state.selectedObjects,
  //     objectMap: state.objectMap,
  //     setObjectMap: state.setObjectMap,
  //     setSelectedObjects: state.setSelectedObjects,
  //   }),
  //   shallow,
  // );
  const handleClick = (color: string) => {
    if (!controlPanelData) {
      return;
    }

    selectedObjects.forEach((object) => {
      dispatch(
        actions.ffabric.setObjectMap({
          uuid: object.name!,
          updater: (prev) => ({ ...prev, fill: color }),
        }),
      );
      // setObjectMap(object.name!, (prev) => ({ ...prev, fill: color }));
    });
    setControlPanelData({ ...controlPanelData });
    dispatch(
      actions.ffabric.setSelectedObjects(
        selectedObjects.map((object) => {
          const cloned = fabric.util.object.clone(object);
          cloned.set('fill', color);
          return cloned;
        }),
      ),
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
