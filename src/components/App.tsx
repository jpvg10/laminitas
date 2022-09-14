import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  LOCAL_STORAGE_STATE,
  LOCAL_STORAGE_CONFIGURED,
} from '../utils/constants';
import { EStickerQuantity } from '../utils/enums';
import { ISticker } from '../utils/interfaces';
import About from './About';
import Configure from './Configure';
import Exchange from './Exchange';
import Home from './Home';
import MyQR from './MyQR';
import Navbar from './Navbar';

const App: React.FC = () => {
  const [stickers, setStickers] = useState<ISticker[]>([]);
  const [configured, setConfigured] = useState(false);

  useEffect(() => {
    const stickerState = localStorage.getItem(LOCAL_STORAGE_STATE);
    const lsConfigured = localStorage.getItem(LOCAL_STORAGE_CONFIGURED);
    if (stickerState && lsConfigured) {
      setStickers(JSON.parse(stickerState));
      setConfigured(true);
    }
  }, []);

  const configure = (n: number) => {
    setConfigured(true);

    const array: ISticker[] = [];
    for (let i = 0; i < n; i++) {
      array.push({ num: i + 1, quantity: EStickerQuantity.DONT_HAVE_IT });
    }
    setStickers(array);

    localStorage.setItem(LOCAL_STORAGE_STATE, JSON.stringify(array));
    localStorage.setItem(LOCAL_STORAGE_CONFIGURED, 'configured');
  };

  const reset = () => {
    const confirmation = window.confirm(
      "Are you sure you want to reset your progress? You can't undo this action."
    );
    if (confirmation) {
      setConfigured(false);
      setStickers([]);
      localStorage.removeItem(LOCAL_STORAGE_STATE);
      localStorage.removeItem(LOCAL_STORAGE_CONFIGURED);
    }
  };

  return (
    <Router>
      <Navbar />
      <main className="relative">
        <div className="px-2 flex flex-col items-center">
          <h1 className="text-3xl text-gray-700 font-bold mb-5">Laminitas</h1>
          <Routes>
            <Route path="/about" element={<About reset={reset} />} />
            <Route
              path="/exchange"
              element={
                <Exchange stickers={stickers} setStickers={setStickers} />
              }
            />
            <Route path="/my-qr" element={<MyQR stickers={stickers} />} />
            <Route
              path="/"
              element={
                configured ? (
                  <Home stickers={stickers} setStickers={setStickers} />
                ) : (
                  <Configure configure={configure} />
                )
              }
            />
          </Routes>
        </div>
      </main>
    </Router>
  );
};
export default App;
