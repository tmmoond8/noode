import React, { useState, useEffect } from 'react';
import { fabric } from 'fabric';
import { shallow, useFabricStore } from '@/stores';

interface ITextProps {
  uuid: string;
  options: fabric.ITextboxOptions;
  canvas: fabric.Canvas;
  // onChange: (id: string, options: fabric.ITextboxOptions) => void;
}
export const Text = React.memo(function TextElement({ uuid, canvas, options }: ITextProps) {
  const [textbox] = useState<fabric.Textbox>(() => new fabric.Textbox(options.text ?? '', options));
  const { setTextMap } = useFabricStore((state) => ({ setTextMap: state.setTextMap }), shallow);
  console.log('text', uuid);

  useEffect(() => {
    canvas.add(textbox);
  }, [canvas, textbox]);

  useEffect(() => {
    textbox.setOptions(options);
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
