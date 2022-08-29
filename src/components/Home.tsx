import React, { useContext } from 'react';
import AppContext from '../context/context';
import StickerButtons from './StickerButtons';

const Home: React.FC = () => {
  const { stickers, incrementSticker } = useContext(AppContext);
  return (
    <React.Fragment>
      <h2 className="text-gray-500 text-lg mb-5">Qatar 2022 Panini Album</h2>
      <StickerButtons stickers={stickers} incrementSticker={incrementSticker} />
    </React.Fragment>
  );
};

export default Home;
