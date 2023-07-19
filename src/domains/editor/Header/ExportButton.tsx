import React from 'react';
import get from 'lodash-es/get';
import { Button } from '@chakra-ui/react';
import { useFabricStore } from '@/stores';

export function ExportButton() {
  const { canvas, whiteboard } = useFabricStore((state) => ({
    canvas: state.canvas,
    whiteboard: state.whiteboard,
  }));
  return (
    <Button
      onClick={() => {
        if (!canvas || !whiteboard) {
          return;
        }
        const { left = 1, top = 1, width = 1, height = 1 } = whiteboard;
        const dataURL = canvas.toDataURL({
          format: 'png',
          quality: 1,
          left: left - width / 2,
          top: top - height / 2,
          width,
          height,
        });
        const month = (new Date().getMonth() + 1).toString().padStart(2, '0');
        const date = new Date().getDate().toString().padStart(2, '0');
        const filename = `누디자인_${month}-${date}_${Math.floor(Math.random() * 767)}.png`;

        if (typeof get(globalThis.navigator, 'msSaveBlob') === 'function') {
          const dataURLtoBlob = (dataURL: string) => {
            const arr = dataURL.split(',');
            const headText = arr[0].match(/:(.*?);/);
            const mime = headText?.[1];
            const bstr = atob(arr[1]);
            let n = bstr.length;
            const u8arr = new Uint8Array(n);
            while (n--) {
              u8arr[n] = bstr.charCodeAt(n);
            }
            return new Blob([u8arr], {
              type: mime,
            });
          };
          (globalThis.navigator as any).msSaveBlob(dataURLtoBlob(dataURL), filename);
        } else {
          var link = document.createElement('a');
          link.href = dataURL;
          link.download = filename;
          link.click();
        }
      }}
    >
      Export
    </Button>
  );
}
