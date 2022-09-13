import { EStickerQuantity } from './enums';
import { ISticker } from './interfaces';

export const encode = (state: ISticker[]): string => {
  const bits = state.reduce((acc: string, curr: ISticker) => {
    if (curr.quantity === EStickerQuantity.DONT_HAVE_IT) {
      return acc + '00';
    } else if (curr.quantity === EStickerQuantity.HAVE_IT) {
      return acc + '01';
    } else {
      return acc + '10';
    }
  }, '');

  const numbers: number[] = [];
  let l = 0;
  let r = 30;
  let done = false;
  let word = '';
  while (!done) {
    if (r < bits.length) {
      word = bits.substring(l, r);
      l += 30;
      r += 30;
    } else {
      r = bits.length - 1;
      word = bits.substring(l, r);
      for (let i = word.length; i < 30; i++) {
        word = word + '0';
      }
      done = true;
    }
    const num = parseInt(word, 2);
    numbers.push(num);
  }

  return numbers.join(',');
};

export const decode = (
  stringState: string,
  maxStickers: number
): ISticker[] => {
  const numbers = stringState.split(',');
  const state: ISticker[] = [];
  let i = 0;

  numbers.forEach((value: string) => {
    const num = parseInt(value, 10);
    let binary = num.toString(2);
    while (binary.length < 30) {
      binary = '0' + binary;
    }
    for (let j = 0; j < binary.length - 1; j += 2) {
      const fragment = binary.substring(j, j + 2);
      if (fragment === '00') {
        state.push({ num: i, quantity: EStickerQuantity.DONT_HAVE_IT });
      } else if (fragment === '01') {
        state.push({ num: i, quantity: EStickerQuantity.HAVE_IT });
      } else {
        state.push({ num: i, quantity: EStickerQuantity.REPEATED });
      }
      i++;
    }
  });

  return state.slice(0, maxStickers);
};
