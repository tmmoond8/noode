import React, { useState, useEffect } from 'react';
import { fabric } from 'fabric';
import { shallow, useFabricStore } from '@/stores';

interface IRectProps {
  uuid: string;
  options: fabric.IRectOptions;
  canvas: fabric.Canvas;
  // onChange: (id: string, options: fabric.ITextboxOptions) => void;
}
export const Rect = React.memo(function RectElement({ uuid, canvas, options }: IRectProps) {
  const [rect] = useState<fabric.Rect>(() => new fabric.Rect(options));
  const { setTextMap } = useFabricStore((state) => ({ setTextMap: state.setTextMap }), shallow);
  console.log('rect', options.left, options.top);

  useEffect(() => {
    canvas.add(rect);
  }, [canvas, rect]);

  useEffect(() => {
    rect.setOptions(options);
  }, [options, rect]);

  useEffect(() => {
    const update = () => {
      setTextMap(uuid, rect.toObject());
    };
    rect.on('moved', update);
    rect.on('scaled', update);
    rect.on('rotated', update);
    rect.on('changed', update);
  }, [uuid, setTextMap, rect]);

  return <></>;
});
