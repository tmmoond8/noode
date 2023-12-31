import { FaShapes } from 'react-icons/fa';
import { BiCloudUpload, BiPencil } from 'react-icons/bi';
import { PiTextTBold } from 'react-icons/pi';

export const SIDE_MENUS = [
  {
    key: 'element',
    name: '요소',
    Icon: FaShapes,
  },
  {
    key: 'text',
    name: '텍스트',
    Icon: PiTextTBold,
  },
  {
    key: 'upload',
    name: '업로드',
    Icon: BiCloudUpload,
  },
  {
    key: 'draw',
    name: '그리기',
    Icon: BiPencil,
  },
] as const;

export type SideMenuKey = (typeof SIDE_MENUS)[number]['key'];

export enum MAJOR_ELEMENTS {
  WhiteBoard = 'WhiteBoard',
}
