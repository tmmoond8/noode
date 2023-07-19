import React from 'react';
import {
  Box,
  Flex,
  Button,
  Stack,
  Select,
  Input,
  Text,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from '@chakra-ui/react';
import { BsLockFill, BsUnlock } from 'react-icons/bs';
import { shallow, useEditorUiStore, useFabricStore } from '@/stores';
import { isEqual } from 'lodash-es';
import { parseFloat } from '@/utils/string';

interface Props {
  text?: string;
}

export function ResizeButton({ text = '버튼' }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { whiteboardSize, setWhiteboardSize } = useEditorUiStore(
    (state) => ({
      whiteboardSize: state.whiteboardSize,
      setWhiteboardSize: state.setWhiteboardSize,
    }),
    shallow,
  );
  const { setWhiteboard } = useFabricStore(
    (state) => ({
      whiteboard: state.whiteboard,
      setWhiteboard: state.setWhiteboard,
    }),
    shallow,
  );
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const [customValue, setCustomValue] = React.useState<Bounds>({
    ...whiteboardSize,
    unit: 'px',
  });
  const [lock, setLock] = React.useState(true);

  const handleChangeCustomValue = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setCustomValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const isDisabled = isEqual(whiteboardSize, customValue);

  React.useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setCustomValue(whiteboardSize);
      }, 500);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isOpen]);

  return (
    <>
      <Button ref={buttonRef} colorScheme="teal" onClick={onOpen}>
        {text}
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={buttonRef}>
        <DrawerOverlay />
        <DrawerContent width="100vw" maxWidth="500px">
          <DrawerCloseButton />
          <DrawerHeader>Resize the Whiteboard</DrawerHeader>
          <DrawerBody>
            <Flex alignItems="flex-end">
              <Stack gap="8px" flex="2 1 100px">
                <Text fontSize="14px" color="gray.600">
                  Width
                </Text>
                <Input
                  size="lg"
                  type="number"
                  value={customValue.width}
                  onChange={handleChangeCustomValue}
                  name="width"
                />
              </Stack>
              <IconButton
                aria-label=""
                variant="unstyled"
                size="lg"
                icon={lock ? <BsLockFill /> : <BsUnlock />}
                onClick={() => setLock((prev) => !prev)}
                display="flex"
              />
              <Stack gap="8px" flex="2 1 100px">
                <Text fontSize="14px" color="gray.600">
                  height
                </Text>
                <Input
                  size="lg"
                  type="number"
                  value={customValue.height}
                  onChange={handleChangeCustomValue}
                  name="height"
                />
              </Stack>
              <Select
                name="unit"
                size="lg"
                flex="1 1 100px"
                value={customValue.unit}
                onChange={handleChangeCustomValue}
                ml="16px"
              >
                <option value="px">px</option>
                <option value="mm">mm</option>
                <option value="cm">cm</option>
                <option value="in">in</option>
              </Select>
            </Flex>
          </DrawerBody>
          <DrawerFooter>
            <Button variant={'outline'} mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button
              colorScheme="blue"
              isDisabled={isDisabled}
              onClick={() => {
                setWhiteboardSize(customValue);
                setWhiteboard((prev) => ({
                  ...prev,
                  width: parseFloat(customValue.width),
                  height: parseFloat(customValue.height),
                }));
                onClose();
              }}
            >
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
