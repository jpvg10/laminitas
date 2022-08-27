import React from 'react';
import { EStickerStatus } from '../utils/enums';
import { ISticker } from '../utils/interfaces';

interface IProps extends ISticker {
  increment: () => void;
}

const Sticker: React.FC<IProps> = ({ num, status, increment }) => {
  let bgColor: string;
  switch (status) {
    case EStickerStatus.HAVE_IT:
      bgColor = 'bg-lime-500 hover:bg-lime-600';
      break;
    case EStickerStatus.REPEATED:
      bgColor = 'bg-amber-500 hover:bg-amber-600';
      break;
    default:
      bgColor = 'bg-blue-300 hover:bg-blue-400';
  }

  return (
    <button
      className={`${bgColor} shadow-md rounded-full text-white py-2 m-2 min-w-[60px]`}
      onClick={increment}
    >
      {num}
    </button>
  );
};

export default Sticker;
