import { createContext } from "react";

const homeState = {
    date: 'JANUARY 2, 2022',
    walletBalance: {
        symbol: 'BTC',
        btc: 0.2993029,
        usd: '3,700 USD',
    },
    activities: [
        {
            type: 'withdrawal',
            icon: '',
            title: 'Withdrew USDT',
            status: 'complete',
            amount: '992333.93USDT',
            date: 'Dec 21, 2021',
        },
        {
            type: 'exchange',
            icon: '',
            title: 'Echanged BTC',
            status: 'complete',
            amount: '992333.93USDT',
            date: 'Dec 21, 2021',
        },
        {
            type: 'deposit',
            icon: '',
            title: 'Deposit ETH',
            status: 'complete',
            amount: '992333.93USDT',
            date: 'Dec 21, 2021',
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