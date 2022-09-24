import { encode, decode } from './encoder';
import { EStickerQuantity } from './enums';
import { ISticker } from './interfaces';

const generate = (n: number, random?: boolean): ISticker[] => {
  const status: ISticker[] = [];
  for (let i = 0; i < n; i++) {
    const quantity = random
      ? Math.floor(Math.random() * 3)
      : EStickerQuantity.DONT_HAVE_IT;
    status.push({ num: i + 1, quantity });
  }
  return status;
};

describe('Encoder', () => {
  it('encodes all zeros', () => {
    const status = generate(60);
    const encodedStatus = encode(status);
    expect(encodedStatus).toEqual('0,0,0,0');
  });

  it('decodes all zeros', () => {
    const n = 60;
    const status = generate(n);
    const decodedStatus = decode('0,0,0,0', n);
    expect(decodedStatus).toEqual(status);
  });

  it('encode handles padding', () => {
    const status = generate(40);
    const encodedStatus = encode(status);
    expect(encodedStatus).toEqual('0,0,0');
  });

  it('decode handles padding', () => {
    const n = 40;
    const status = generate(n);
    const decodedStatus = decode('0,0,0', n);
    expect(decodedStatus).toEqual(status);
  });

  it('decode handles empty string', () => {
    const decodedStatus = decode('', 30);
    expect(decodedStatus).toEqual([]);
  });

  xit('randomized test', () => {
    const n = 600;
    const status = generate(n, true);
    const encondedStatus = encode(status);
    console.log(encondedStatus);
    const decodedStatus = decode(encondedStatus, n);
    expect(decodedStatus).toEqual(status);
  });
});
