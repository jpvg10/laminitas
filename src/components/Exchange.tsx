import React, { useEffect, useState } from 'react';
import { ISticker, IStickerState } from '../utils/interfaces';
import { decode } from '../utils/encoder';
import { useLocation } from 'react-router-dom';
import { EStickerQuantity } from '../utils/enums';
import StickerButtons from './StickerButtons';
import { useNavigate } from 'react-router-dom';

interface IProps extends IStickerState {
  totalStickers: number;
}

const Exchange: React.FC<IProps> = ({
  stickers: globalStickers,
  setStickers: globalSetStickers,
  totalStickers,
}) => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const [incomingState, setIncomingState] = useState<ISticker[]>([]);

  useEffect(() => {
    if (!search) {
      navigate('/');
    }

    // search === '?q=[queryState]'
    const queryState = search.substring(3);
    const newState = decode(queryState, totalStickers);
    setIncomingState(newState);
  }, [search, navigate, totalStickers]);

  // Freeze the value
  const [frozenGlobalState, setGlobalState] = useState<ISticker[]>([]);
  if (globalStickers.length > 0 && frozenGlobalState.length === 0) {
    setGlobalState(globalStickers);
  }

  const [iTake, setITake] = useState<ISticker[]>([]);
  const [friendTakes, setFriendTakes] = useState<ISticker[]>([]);

  useEffect(() => {
    const me = frozenGlobalState.filter((s) => {
      const t = incomingState.find((u) => u.num === s.num);
      return (
        s.quantity === EStickerQuantity.DONT_HAVE_IT &&
        t?.quantity === EStickerQuantity.REPEATED
      );
    });
    setITake(me);

    const friend = frozenGlobalState.filter((s) => {
      const t = incomingState.find((u) => u.num === s.num);
      return (
        s.quantity === EStickerQuantity.REPEATED &&
        t?.quantity === EStickerQuantity.DONT_HAVE_IT
      );
    });
    setFriendTakes(friend);
  }, [frozenGlobalState, incomingState]);

  const onClickITake = (num: number) => () => {
    const updater = (s: ISticker): ISticker => {
      if (s.num === num) {
        if (s.quantity === EStickerQuantity.DONT_HAVE_IT) {
          return { ...s, quantity: EStickerQuantity.HAVE_IT };
        } else if (s.quantity === EStickerQuantity.HAVE_IT) {
          // Accidental click
          return { ...s, quantity: EStickerQuantity.DONT_HAVE_IT };
        }
      }
      return s;
    };
    const newGlobalStickers = globalStickers.map(updater);
    globalSetStickers(newGlobalStickers);
    const newITake = iTake.map(updater);
    setITake(newITake);
  };

  const onClickFriendTakes = (num: number) => () => {
    const updater = (s: ISticker): ISticker => {
      if (s.num === num) {
        if (s.quantity === EStickerQuantity.REPEATED) {
          return { ...s, quantity: EStickerQuantity.HAVE_IT };
        } else if (s.quantity === EStickerQuantity.HAVE_IT) {
          // Accidental click
          return { ...s, quantity: EStickerQuantity.REPEATED };
        }
      }
      return s;
    };
    const newGlobalStickers = globalStickers.map(updater);
    globalSetStickers(newGlobalStickers);
    const newFriendTakes = friendTakes.map(updater);
    setFriendTakes(newFriendTakes);
  };

  return (
    <React.Fragment>
      <h2 className="text-gray-500 text-lg mb-5">Exchange stickers</h2>
      <p>I take:</p>
      <StickerButtons stickers={iTake} onClick={onClickITake} />
      <p>My friend takes:</p>
      <StickerButtons stickers={friendTakes} onClick={onClickFriendTakes} />
    </React.Fragment>
  );
};

export default Exchange;
