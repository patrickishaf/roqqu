import { createContext } from "react";
import bitcoin from '../assets/bitcoin.svg';
import tether from '../assets/tether.svg';
import ethereum from '../assets/ethereum.svg';
import binance from '../assets/binancecoin.svg';

const coreAssetsState = [
    {
        img: bitcoin,
        name: 'Bitcoin',
        symbol: 'BTC',
        rate: '54372.94USD',
        delta: '+2.43%',
    },
    {
        img: tether,
        name: 'Tether',
        symbol: 'USDT',
        rate: '1.02USD',
        delta: '+2.43%',
    },
    {
        img: ethereum,
        name: 'Ethereum',
        symbol: 'ETH',
        rate: '54372.94USD',
        delta: '+2.43%',
    },
    {
        img: binance,
        name: 'Binance Coin',
        symbol: 'BNB',
        rate: '54372.94USD',
        delta: '+2.43%',
    },
];

const CoreAssetsStateContext = createContext(coreAssetsState);

const CoreAssetsStateProvider = ({ children }) => {
    return (
        <CoreAssetsStateContext.Provider value={coreAssetsState}>
            {children}
        </CoreAssetsStateContext.Provider>
    );
}

export { CoreAssetsStateContext, CoreAssetsStateProvider };
