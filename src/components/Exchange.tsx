import React, { useEffect, useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { LOCAL_STORAGE_STATE } from '../utils/constants';
import { ISticker } from '../utils/interfaces';
import { encode } from '../utils/encoder';

const Exchange: React.FC = () => {
  const [QRValue, setQRValue] = useState('');

  useEffect(() => {
    const stickerState = localStorage.getItem(LOCAL_STORAGE_STATE);
    const stickers: ISticker[] = JSON.parse(stickerState!);
    const value = encode(stickers);
    console.log(value);
    setQRValue(value);
  }, []);

  return (
    <React.Fragment>
      <h2 className="text-gray-500 text-lg mb-5">Exchange stickers</h2>
      <QRCodeSVG value={QRValue} />
      <p>Tell your friend to scan this QR code.</p>
    </React.Fragment>
  );
};

export default Exchange;
