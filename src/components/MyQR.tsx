import React, { useEffect, useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { encode } from '../utils/encoder';
import { ISticker } from '../utils/interfaces';

interface IProps {
  stickers: ISticker[];
}

const MyQR: React.FC<IProps> = ({ stickers }) => {
  const [QRValue, setQRValue] = useState('');

  useEffect(() => {
    const value = encode(stickers);
    console.log(value);
    setQRValue(value);
  }, [stickers]);

  return (
    <React.Fragment>
      <h2 className="text-gray-500 text-lg mb-5">My QR Code</h2>
      <QRCodeSVG value={QRValue} />
      <p>Tell your friends to scan this QR code.</p>
      <p>Important! This code changes every time you update your stickers.</p>
    </React.Fragment>
  );
};

export default MyQR;
