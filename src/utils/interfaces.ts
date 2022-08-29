import { EStickerQuantity } from './enums';

export interface ISticker {
  num: number;
  quantity: EStickerQuantity;
}

export interface IAppContext {
  stickers: ISticker[];
  incrementSticker: (num: number) => () => void;
}
