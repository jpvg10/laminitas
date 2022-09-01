import React from 'react';
import { EStickerQuantity } from '../utils/enums';
import { ISticker } from '../utils/interfaces';

interface IProps extends ISticker {
  onClick: () => void;
}

const Sticker: React.FC<IProps> = ({ num, quantity, onClick }) => {
  let bgColor: string;
  switch (quantity) {
    case EStickerQuantity.HAVE_IT:
      bgColor = 'bg-lime-500 hover:bg-lime-600';
      break;
    case EStickerQuantity.REPEATED:
      bgColor = 'bg-amber-500 hover:bg-amber-600';
      break;
    default:
      bgColor = 'bg-blue-300 hover:bg-blue-400';
  }

  return (
    <button
      className={`${bgColor} shadow-md rounded-full text-white py-2 m-2 min-w-[60px]`}
      onClick={onClick}
    >
      {num}
    </button>
  );
};

export default Sticker;
