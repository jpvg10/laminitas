import React from 'react';
import { LOCAL_STORAGE_STATE } from '../utils/constants';
import { ISticker, IStickerState } from '../utils/interfaces';
import StickerButtons from './StickerButtons';

const Home: React.FC<IStickerState> = ({ stickers, setStickers }) => {
  const incrementSticker = (num: number) => () => {
    const newStickers: ISticker[] = stickers.map((s) => {
      if (s.num === num) {
        const newQuantity = (s.quantity + 1) % 3;
        return { ...s, quantity: newQuantity };
      } else {
        return s;
      }
    });
    setStickers(newStickers);
    localStorage.setItem(LOCAL_STORAGE_STATE, JSON.stringify(newStickers));
  };

  return (
    <React.Fragment>
      <h2 className="text-gray-500 text-lg mb-5">Qatar 2022 Panini Album</h2>
      <StickerButtons stickers={stickers} onClick={incrementSticker} />
    </React.Fragment>
  );
};

export default Home;
