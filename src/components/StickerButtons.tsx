import React from 'react';
import { ISticker } from '../utils/interfaces';
import Sticker from './Sticker';

interface IProps {
  stickers: ISticker[];
  onClick: (num: number) => () => any;
}

const StickerButtons: React.FC<IProps> = ({ stickers, onClick }) => {
  const stickerButtons = stickers.map((sticker: ISticker) => (
    <Sticker
      key={sticker.num}
      num={sticker.num}
      quantity={sticker.quantity}
      onClick={onClick(sticker.num)}
    />
  ));

  return <div className="flex justify-center flex-wrap">{stickerButtons}</div>;
};

export default StickerButtons;
