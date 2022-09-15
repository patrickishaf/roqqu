import { createContext } from "react";

const homeState = {
    date: 'JANUARY 2, 2022',
    walletBalance: {
        btc: 0.2993029,
        usd: '3700 USD',
    },
    activities: [
        {
            icon: '',
            title: 'Withdrew USDT',
            status: 'complete',
            amount: '992333.93USDT',
            date: 'Dec 21, 2021',
        },
        {
            icon: '',
            title: 'Echanged BTC',
            status: 'complete',
            amount: '992333.93USDT',
            date: 'Dec 21, 2021',
        },
        {
            icon: '',
            title: 'Deposit ETH',
            status: 'complete',
            amount: '992333.93USDT',
            date: 'Dec 21, 2021',
        },
    ],
    coreAssets: [
        {
            img: '',
            name: 'Bitcoin',
            symbol: 'BTC',
            rate: '54372.94USD',
            delta: '+2.43%',
        },
        {
            img: '',
            name: 'Tether',
            symbol: 'USDT',
            rate: '1.02USD',
            delta: '+2.43%',
        },
        {
            img: '',
            name: 'Ethereum',
            symbol: 'ETH',
            rate: '54372.94USD',
            delta: '+2.43%',
        },
        {
            img: '',
            name: 'Binance Coin',
            symbol: 'BNB',
            rate: '54372.94USD',
            delta: '+2.43%',
        },
    ],
};

const HomeStateContext = createContext(homeState);

const HomeStateProvider = ({ children }) => {
    return (
        <HomeStateContext.Provider value={homeState}>
            {children}
        </HomeStateContext.Provider>
    );
}

export { HomeStateContext, HomeStateProvider };