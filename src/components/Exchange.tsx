import React, { useEffect, useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { LOCAL_STORAGE_STATE } from '../utils/constants';
import { ISticker } from '../utils/interfaces';

const Exchange: React.FC = () => {
  const [QRValue, setQRValue] = useState('');

  useEffect(() => {
    const stickerState = localStorage.getItem(LOCAL_STORAGE_STATE);
    const stickers: ISticker[] = JSON.parse(stickerState!);
    const value = stickers.reduce((acc: string, curr: ISticker) => {
      return acc + curr.quantity;
    }, '');
    console.log(value);
    setQRValue(value);
  }, []);

  return (
    <React.Fragment>
      <h2 className="text-gray-500 text-lg mb-5">Exchange stickers</h2>
      <QRCodeSVG value={QRValue} />
      <p>Tell your friend to scan this QR code.</p>
      <p>Or:</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Scan your friend's QR code
      </button>
    </React.Fragment>
  );
};

export default Exchange;
