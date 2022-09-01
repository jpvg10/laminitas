import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LOCAL_STORAGE_STATE, TOTAL_STICKERS } from '../utils/constants';
import { EStickerQuantity } from '../utils/enums';
import { ISticker } from '../utils/interfaces';
import About from './About';
import Exchange from './Exchange';
import Home from './Home';
import MyQR from './MyQR';
import Navbar from './Navbar';

const App: React.FC = () => {
  const [stickers, setStickers] = useState<ISticker[]>([]);

  useEffect(() => {
    const stickerState = localStorage.getItem(LOCAL_STORAGE_STATE);
    if (stickerState) {
      setStickers(JSON.parse(stickerState));
    } else {
      const array: ISticker[] = [];
      for (let i = 0; i < TOTAL_STICKERS; i++) {
        array.push({ num: i, quantity: EStickerQuantity.DONT_HAVE_IT });
      }
      setStickers(array);
      localStorage.setItem(LOCAL_STORAGE_STATE, JSON.stringify(array));
    }
  }, []);

  return (
    <Router>
      <Navbar />
      <main className="relative">
        <div className="px-2 flex flex-col items-center">
          <h1 className="text-3xl text-gray-700 font-bold mb-5">Laminitas</h1>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route
              path="/exchange"
              element={
                <Exchange stickers={stickers} setStickers={setStickers} />
              }
            />
            <Route path="/my-qr" element={<MyQR stickers={stickers} />} />
            <Route
              path="/"
              element={<Home stickers={stickers} setStickers={setStickers} />}
            />
          </Routes>
        </div>
      </main>
    </Router>
  );
};
export default App;
