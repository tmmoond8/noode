import React, { useState, useEffect } from 'react';
import { fabric } from 'fabric';
import { shallow, useFabricStore } from '@/stores';

interface ITextboxProps {
  uuid: string;
  options: fabric.ITextboxOptions;
  canvas: fabric.Canvas;
}
export const Textbox = React.memo(function TextboxElement({ uuid, canvas, options }: ITextboxProps) {
  const [textbox] = useState<fabric.Textbox>(() => new fabric.Textbox(options.text ?? '', options));
  const { setTextMap } = useFabricStore((state) => ({ setTextMap: state.setTextMap }), shallow);
  const initRef = React.useRef(false);

  useEffect(() => {
    if (!initRef.current) {
      initRef.current = true;
      canvas.add(textbox);
    }
  }, [canvas, textbox]);

  useEffect(() => {
    textbox.setOptions(options);
    textbox.setCoords();
  }, [options, textbox]);

  useEffect(() => {
    const update = () => {
      setTextMap(uuid, textbox.toObject());
    };
    textbox.on('moved', update);
    textbox.on('scaled', update);
    textbox.on('rotated', update);
    textbox.on('changed', update);
  }, [uuid, setTextMap, textbox]);

  return <></>;
});
