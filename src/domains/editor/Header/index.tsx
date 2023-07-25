import React from 'react';
import { IconButton, Box, Flex, Button, useDisclosure } from '@chakra-ui/react';
import { BiUndo, BiRedo } from 'react-icons/bi';
import { ResizeButton } from './ResizeButton';
import { ExportButton } from './ExportButton';
import { useDispatch, useSelector, actions } from '@/stores';
import { ActionCreators } from 'redux-undo';

interface Props {
  title?: string;
}

export function Header({ title }: Props) {
  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  return (
    <Flex
      className="noode-header"
      as="header"
      alignItems="center"
      justifyContent="space-between"
      p="8px 12px"
      pt="max(8px,env(safe-area-inset-top))"
      bg="gray.300"
    >
      <Flex gap="8px">
        <Button>File</Button>
        <ResizeButton text="Resize" />
        <Box w="1px" bg="gray.100" />
        <IconButton
          aria-label=""
          icon={<BiUndo size="34" />}
          onClick={() => {
            dispatch(actions.age.undo());
          }}
        />
        {/* <IconButton aria-label="" icon={<BiRedo size="34" />} onClick={() => redo()} /> */}
        {store.age.present.age}
        <Button
          onClick={() => {
            // console.log('dddd', JSON.stringify(store));
            dispatch(actions.age.addNumber(2));
          }}
        >
          age up
        </Button>
        <Button
          onClick={() => {
            // console.log('dddd', JSON.stringify(store));
            dispatch(actions.age.addNumber(-2));
          }}
        >
          age down
        </Button>
        {store.level.present.level}
        <Button
          onClick={() => {
            // console.log('dddd', JSON.stringify(store));
            dispatch(actions.level.addNumber(2));
          }}
        >
          level up
        </Button>
        <Button
          onClick={() => {
            // console.log('dddd', JSON.stringify(store));
            dispatch(actions.level.addNumber(-2));
          }}
        >
          level down
        </Button>
      </Flex>

      <Flex gap="8px">
        <ExportButton />
        <Button>Save</Button>
        <Button>Login</Button>
      </Flex>
    </Flex>
  );
}
