import React, { useEffect, useState } from 'react';
import { LOCAL_STORAGE_STATE, TOTAL_STICKERS } from '../utils/constants';
import { StickerStatus } from '../utils/enums';
import { ISticker } from '../utils/interfaces';
import Sticker from './Sticker';

const Home: React.FC = () => {
  const [stickers, setStickers] = useState<ISticker[]>([]);

  useEffect(() => {
    const stickerState = localStorage.getItem(LOCAL_STORAGE_STATE);
    if (stickerState) {
      setStickers(JSON.parse(stickerState));
    } else {
      const array: ISticker[] = [];
      for (let i = 0; i <= TOTAL_STICKERS; i++) {
        array.push({ num: i, status: StickerStatus.DONT_HAVE_IT });
      }
      setStickers(array);
      localStorage.setItem(LOCAL_STORAGE_STATE, JSON.stringify(array));
    }
  }, []);

  const incrementSticker = (num: number) => () => {
    const newStickers: ISticker[] = stickers.map((s) => {
      if (s.num === num) {
        const newStatus = (s.status + 1) % 3;
        return { ...s, status: newStatus };
      } else {
        return s;
      }
    });
    setStickers(newStickers);
    localStorage.setItem(LOCAL_STORAGE_STATE, JSON.stringify(newStickers));
  };

  const stickerButtons = stickers.map((sticker: ISticker) => (
    <Sticker
      key={sticker.num}
      num={sticker.num}
      status={sticker.status}
      increment={incrementSticker(sticker.num)}
    />
  ));

  return (
    <div className="px-2 flex flex-col items-center">
      <p className="text-3xl text-gray-700 font-bold mb-5">Laminitas</p>
      <p className="text-gray-500 text-lg mb-5">Qatar 2022 Panini Album</p>
      <div className="flex justify-center flex-wrap">{stickerButtons}</div>
    </div>
  );
};

export default Home;
