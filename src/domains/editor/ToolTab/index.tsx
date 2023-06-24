import React from 'react';
import { Box, Flex, Stack, Wrap } from '@chakra-ui/react';
import { Toolbar } from './Toolbar';
import { MenuKey } from './constants';

export function ToolTab() {
  const [tab, setTab] = React.useState<Nullable<MenuKey>>(null);

  return (
    <Flex height="100%">
      <Toolbar tab={tab} setTab={setTab} />
    </Flex>
  );
}
