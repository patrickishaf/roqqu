import { createContext } from "react";

const chartData = {
    options: {
        chart: {
            id: 'crypto chart',
            type: 'candlestick',
        },
        xaxis: {
            type: 'category',
            labels: {
                formatter: function (value) {
                    let date = new Date(value);
                    return date.getDate();
                }
            }
        },
    },
    title: {
        text: 'BTC / NGN: 26,792,926.87',
        align: 'left',
    },
    series: [{
        name: 'BTC/NGN: 26,792,926.87',
        data: [{
            x: new Date('November 18, 2016'),
            y: [ 1.06000, 1.06850, 1.05250, 1.06750]
        },
        {
            x: new Date('November 18, 2016'),
            y: [1.06750, 1.07000, 1.05750, 1.05900]
        },
        {
            x: new Date('November 19, 2016'),
            y: [1.05900, 1.07000, 1.05750, 1.06750]
        },
        {
            x: new Date('November 20, 2016'),
            y: [1.05900, 1.07000, 1.05750, 1.06750]
        },
        {
            x: new Date('November 21, 2016'),
            y: [1.05900, 1.07000, 1.05750, 1.06750]
        },
        {
            x: new Date('November 22, 2016'),
            y: [1.05900, 1.07000, 1.05750, 1.06750]
        },
        {
            x: new Date('November 23, 2016'),
            y: [1.05900, 1.07000, 1.05750, 1.06750]
        },
        {
            x: new Date('November 24, 2016'),
            y: [1.05900, 1.07000, 1.05750, 1.06750]
        },
        {
            x: new Date('November 25, 2016'),
            y: [1.05900, 1.07000, 1.05750, 1.06750]
        },
        {
            x: new Date('November 26, 2016'),
            y: [1.05900, 1.07000, 1.05750, 1.06750]
        },
        {
            x: new Date('November 27, 2016'),
            y: [1.05900, 1.07000, 1.05750, 1.06750]
        },
        {
            x: new Date('November 28, 2016'),
            y: [1.05900, 1.07000, 1.05750, 1.06750]
        },
        {
            x: new Date('November 29, 2016'),
            y: [1.05900, 1.07000, 1.05750, 1.06750]
        },
        {
            x: new Date('November 30, 2016'),
            y: [1.05900, 1.07000, 1.05750, 1.06750]
        },
        {
            x: new Date('December 1, 2016'),
            y: [1.05900, 1.07000, 1.05750, 1.06750]
        },
        {
            x: new Date('December 2, 2016'),
            y: [1.05900, 1.07000, 1.05750, 1.06750]
        },
        {
            x: new Date('December 3, 2016'),
            y: [1.05900, 1.07000, 1.05750, 1.06750]
        },
        {
            x: new Date('December 4, 2016'),
            y: [1.05900, 1.07000, 1.05750, 1.06750]
        },
        {
            x: new Date('December 5, 2016'),
            y: [1.05900, 1.07000, 1.05750, 1.06750]
        },
        {
            x: new Date('June 14, 2017'),
            y: [1.05900, 1.07000, 1.05750, 1.06750]
        },],
    }],
}

const ChartDataContext = createContext(chartData);

const ChartDataProvider = ({ children }) => {
    return (
        <ChartDataContext.Provider value={chartData}>
            {children}
        </ChartDataContext.Provider>
    )
}

export { ChartDataContext, ChartDataProvider };