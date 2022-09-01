import { EStickerQuantity } from './enums';

export interface ISticker {
  num: number;
  quantity: EStickerQuantity;
}

export interface IStickerState {
  stickers: ISticker[];
  setStickers: (stickers: ISticker[]) => void;
}
