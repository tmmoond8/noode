import React from 'react';
import { fabric } from 'fabric';
import { Text, Flex } from '@chakra-ui/react';
import { ColorButton } from './toolbarIconButtons/ColorButton';
import { shallow, useEditorUiStore } from '@/stores';

interface Props {
  object: fabric.Object;
}

export function SingleToolbar({ object }: Props) {
  const { setControlPanelData } = useEditorUiStore(
    (state) => ({
      controlPanelData: state.controlPanelData,
      setControlPanelData: state.setControlPanelData,
    }),
    shallow,
  );

  return (
    <Flex alignItems="center">
      <Text>{object.type}</Text>
      <Text>|</Text>
      {typeof object.fill === 'string' && (
        <ColorButton
          fill={object.fill}
          onClick={() => {
            setControlPanelData({
              type: 'color',
            });
          }}
        />
      )}
      <Text>angle</Text>
      {typeof object.borderColor === 'string' && <ColorButton fill={object.borderColor} />}
    </Flex>
  );
}
