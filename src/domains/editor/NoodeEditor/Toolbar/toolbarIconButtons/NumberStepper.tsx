import React from 'react';
import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react';

interface Props {
  value: number;
  step?: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
}

export function NumberStepper({ value }: Props) {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } = useNumberInput({
    step: 1,
    defaultValue: value,
    min: 1,
    max: 6,
    precision: 2,
  });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();
  return (
    <HStack maxW="320px">
      <Button {...inc}>+</Button>
      <Input
        {...input}
        onChange={(a) => {
          console.log('aaa', a);
        }}
      />
      <Button {...dec}>-</Button>
    </HStack>
  );
}
