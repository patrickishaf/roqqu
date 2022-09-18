import { createContext } from "react";

const price = '12299.304781';

const exchangeState = {
    currencyPair: 'BTC /USDT',
    currencyName: 'Bitcoin',
    lastPrice: '18372.99 USDT',
    high: '18372.99 USDT',
    low: '18372.99 USDT',
    volume: '18372.99 USDT',
    dailyChange: '+3.04%',
    btcNgn: '26,792,926.87',
    orderBook: {
        price,
        amount: '5.304781',
        total: '5.304781',
    },
    orderBookData: [
        {
            price,
            amount: '5.304781',
            total: '5.304781',
            progress: '',
        },
    ],
    progresses: [
        '100%', '0%', '0%', '90%', '0%', '0%', '60%', '0%', '0%', '40%', '0%', '0%', '30%', '0%', '0%', '40%', '0%', '0%'
    ]
}

const ExchangeStateContext = createContext(exchangeState);

const ExchangeStateProvider = ({ children }) => {
    return (
        <ExchangeStateContext.Provider>
            {children}
        </ExchangeStateContext.Provider>
    );
}

export { ExchangeStateContext, ExchangeStateProvider };