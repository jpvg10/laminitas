import React from 'react';
import { IAppContext, ISticker } from '../utils/interfaces';
import Sticker from './Sticker';

const StickerButtons: React.FC<IAppContext> = ({
  stickers,
  incrementSticker,
}) => {
  const stickerButtons = stickers.map((sticker: ISticker) => (
    <Sticker
      key={sticker.num}
      num={sticker.num}
      quantity={sticker.quantity}
      increment={incrementSticker(sticker.num)}
    />
  ));

  return <div className="flex justify-center flex-wrap">{stickerButtons}</div>;
};

export default StickerButtons;
