import React from 'react';
import { Text, Stack } from '@chakra-ui/react';
import { useTheme } from '@/styles/chakraTheme';
import { css } from '@emotion/react';
import { SIDE_MENUS } from '@/constants';
import { useEditorUiStore, shallow } from '@/stores';

export function SideBar() {
  const theme = useTheme();
  const { tab, setTab, setControlPanelData } = useEditorUiStore(
    (state) => ({
      tab: state.tab,
      setTab: state.setTab,
      setControlPanelData: state.setControlPanelData,
    }),
    shallow,
  );

  return (
    <Stack bg="gray.800" height="100%" width="72px" padding="12px 0" gap="0" onClick={() => setControlPanelData(null)}>
      {SIDE_MENUS.map(({ name, key, Icon }) => (
        <Stack
          key={key}
          justifyContent="center"
          alignItems="center"
          height="72px"
          gap="4px"
          cursor="pointer"
          onClick={() => setTab(key)}
          css={css`
            & {
              svg,
              p {
                color: ${theme.colors.whiteAlpha['700']};
                transition: color 0.3s ease-out;
              }
            }
            &:hover {
              svg,
              p {
                color: white;
              }
            }

            ${tab === key &&
            css`
              svg,
              p {
                color: white;
              }
            `}
          `}
        >
          <Icon size={20} />
          <Text fontSize="xs">{name}</Text>
        </Stack>
      ))}
    </Stack>
  );
}
