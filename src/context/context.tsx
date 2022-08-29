import React from 'react';
import { IAppContext } from '../utils/interfaces';

const AppContext = React.createContext<IAppContext>({
  stickers: [],
  incrementSticker: () => () => {},
});

export default AppContext;
