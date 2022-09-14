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
      <h2 className="text-gray-500 text-lg mb-5">Sticker Album</h2>
      <div className="flex">
        <p className="px-2 py-1 bg-blue-300 text-white rounded font-bold mr-2">
          I don't have this sticker
        </p>
        <p className="px-2 py-1 bg-lime-500 text-white rounded font-bold mr-2">
          I have this sticker
        </p>
        <p className="px-2 py-1 bg-amber-500 text-white rounded font-bold">
          I have this sticker repeated
        </p>
      </div>
      <p className="mb-5">Click/touch a sticker number to update it</p>
      <StickerButtons stickers={stickers} onClick={incrementSticker} />
    </React.Fragment>
  );
};

export default Home;
