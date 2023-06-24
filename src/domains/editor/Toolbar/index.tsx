import React from 'react';
import { Text, Stack } from '@chakra-ui/react';
import { FaShapes } from 'react-icons/fa';
import { BiCloudUpload, BiPencil } from 'react-icons/bi';
import { PiTextTBold } from 'react-icons/pi';
import { useTheme } from '@/styles/chakraTheme';
import { css } from '@emotion/react';

interface Props {
  title?: string;
}

export function Toolbar({ title }: Props) {
  const menus = [
    {
      name: '요소',
      Icon: FaShapes,
    },
    {
      name: '텍스트',
      Icon: PiTextTBold,
    },
    {
      name: '업로드',
      Icon: BiCloudUpload,
    },
    {
      name: '그리기',
      Icon: BiPencil,
    },
  ];
  const theme = useTheme();

  return (
    <Stack bg="gray.800" height="100%" width="72px" padding="12px 0" gap="0">
      {menus.map(({ name, Icon }) => (
        <Stack
          key={name}
          justifyContent="center"
          alignItems="center"
          height="72px"
          gap="4px"
          cursor="pointer"
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
          `}
        >
          <Icon size={20} />
          <Text fontSize="xs">{name}</Text>
        </Stack>
      ))}
    </Stack>
  );
}
