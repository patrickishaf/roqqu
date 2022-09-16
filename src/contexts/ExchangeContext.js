import { createContext } from "react";

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
        orders: [
            {
                price: '',
                amount: '',
                total: '',
            },
        ]
    }
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