import { createContext } from "react";

const chartData = {
    options: {
        chart: {
            id: 'crypto chart',
            type: 'candlestick',
            toolbar: {
                show: false,
            }
        },
        title: {
            text: 'BTC / NGN: 26,792,926.87',
            align: 'left',
            offsetX: 20,
            offsetY: 20,
            style: {
                color: '#FFFFFF',
                fontSize: '1.1rem',
                fontWeight: 'light'
            }
        },
        xaxis: {
            type: 'category',
            labels: {
                formatter: function (value) {
                    let date = new Date(value);
                    let dateInt = date.getDate();
                    if (dateInt % 15 === 0) {
                        if (dateInt === 30) {
                            let array = date.toUTCString().split(' ');
                            return array[2];
                        }
                        return dateInt;
                    }
                    return '';
                },
                style: {
                    fontSize: '11px',
                    colors: '#AFAFB4E8',
                },
            },
        },
        yaxis: {
            opposite: true,
            labels: {
                style: {
                    fontSize: '11px',
                    colors: '#AFAFB4E8',
                },
            },
        },
        grid: {
            position: 'back',
            borderColor: '#91A0CE27',
            xaxis: {
                lines: {
                    show: true,
                }
            },
            yaxis: {
                lines: {
                    show: true,
                }
            }
        },
    },
    series: [{
        name: 'BTC/NGN: 26,792,926.87',
        data: [{
            x: new Date('November 13, 2016'),
            y: [1.07750, 1.08750, 1.07500, 1.08700]
        },
        {
            x: new Date('November 14, 2016'),
            y: [ 1.08300, 1.09000, 1.05740, 1.05760]
        },
        {
            x: new Date('November 15, 2016'),
            y: [ 1.05760, 1.06270, 1.04900, 1.05250]
        },
        {
            x: new Date('November 16, 2016'),
            y: [ 1.05250, 1.06750, 1.05250, 1.05750]
        },
        {
            x: new Date('November 17, 2016'),
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
            y: [1.06750, 1.07800, 1.06250, 1.07700]
        },
        {
            x: new Date('November 21, 2016'),
            y: [1.07500, 1.09000, 1.07000, 1.08500]
        },
        {
            x: new Date('November 22, 2016'),
            y: [1.08500, 1.08770, 1.07200, 1.08240]
        },
        {
            x: new Date('November 23, 2016'),
            y: [1.08200, 1.09250, 1.07750, 1.08800]
        },
        {
            x: new Date('November 24, 2016'),
            y: [1.08750, 1.09200, 1.07750, 1.08000]
        },
        {
            x: new Date('November 25, 2016'),
            y: [1.08100, 1.08300, 1.07250, 1.07300]
        },
        {
            x: new Date('November 26, 2016'),
            y: [1.07255, 1.07255, 1.06250, 1.06750]
        },
        {
            x: new Date('November 27, 2016'),
            y: [1.06750, 1.08000, 1.06750, 1.07800]
        },
        {
            x: new Date('November 28, 2016'),
            y: [1.07850, 1.08100, 1.07760, 1.07800]
        },
        {
            x: new Date('November 29, 2016'),
            y: [1.08000, 1.08100, 1.07600, 1.07700]
        },
        {
            x: new Date('November 30, 2016'),
            y: [1.07700, 1.07750, 1.06800, 1.06800]
        },
        {
            x: new Date('December 1, 2016'),
            y: [1.06870, 1.06870, 1.06000, 1.06750]
        },
        {
            x: new Date('December 2, 2016'),
            y: [1.06750, 1.07500, 1.06750, 1.07000]
        },
        {
            x: new Date('December 3, 2016'),
            y: [1.07100, 1.07250, 1.06800, 1.06900]
        },
        {
            x: new Date('December 4, 2016'),
            y: [1.07000, 1.07000, 1.06700, 1.06800]
        },
        {
            x: new Date('December 5, 2016'),
            y: [1.06850, 1.07200, 1.06500, 1.07200]
        },
        {
            x: new Date('December 6, 2016'),
            y: [1.07500, 1.07800, 1.07000, 1.07800]
        },
        {
            x: new Date('December 7, 2016'),
            y: [1.08350, 1.08250, 1.07750, 1.08250]
        },
        {
            x: new Date('December 8, 2016'),
            y: [1.08250, 1.08700, 1.08000, 1.08500]
        },
        {
            x: new Date('December 9, 2016'),
            y: [1.08450, 1.08500, 1.07750, 1.07850]
        },
        {
            x: new Date('December 10, 2016'),
            y: [1.07700, 1.07750, 1.06800, 1.06800]
        },
        {
            x: new Date('December 11, 2016'),
            y: [1.06870, 1.06870, 1.06000, 1.06750]
        },
        {
            x: new Date('December 12, 2016'),
            y: [1.06750, 1.07500, 1.06750, 1.07000]
        },
        {
            x: new Date('December 13, 2016'),
            y: [1.07100, 1.07250, 1.06800, 1.06900]
        },
        {
            x: new Date('December 14, 2016'),
            y: [1.07000, 1.07000, 1.06700, 1.06800]
        },
        {
            x: new Date('December 15, 2016'),
            y: [1.06850, 1.07200, 1.06500, 1.07200]
        },
        {
            x: new Date('December 16, 2016'),
            y: [1.07500, 1.07800, 1.07000, 1.07800]
        },
        {
            x: new Date('December 17, 2016'),
            y: [1.08350, 1.08250, 1.07750, 1.08250]
        },
        {
            x: new Date('December 18, 2016'),
            y: [1.08250, 1.08700, 1.08000, 1.08500]
        },
        {
            x: new Date('December 19, 2016'),
            y: [1.08450, 1.08500, 1.07750, 1.07850]
        },
        {
            x: new Date('November 20, 2016'),
            y: [1.07700, 1.07750, 1.06800, 1.06800]
        },
        {
            x: new Date('December 21, 2016'),
            y: [1.06870, 1.06870, 1.06000, 1.06750]
        },
        {
            x: new Date('December 22, 2016'),
            y: [1.06750, 1.07500, 1.06750, 1.07000]
        },
        {
            x: new Date('December 23, 2016'),
            y: [1.07100, 1.07250, 1.06800, 1.06900]
        },
        {
            x: new Date('December 24, 2016'),
            y: [1.07000, 1.07000, 1.06700, 1.06800]
        },
        {
            x: new Date('December 25, 2016'),
            y: [1.06850, 1.07200, 1.06500, 1.07200]
        },
        {
            x: new Date('December 26, 2016'),
            y: [1.07500, 1.07800, 1.07000, 1.07800]
        },
        {
            x: new Date('December 27, 2016'),
            y: [1.08350, 1.08250, 1.07750, 1.08250]
        },
        {
            x: new Date('December 28, 2016'),
            y: [1.08250, 1.08700, 1.08000, 1.08500]
        },
        {
            x: new Date('December 29, 2016'),
            y: [1.08450, 1.08500, 1.07750, 1.07850]
        },
        {
            x: new Date('December 30, 2016'),
            y: [1.08450, 1.08500, 1.07750, 1.07850]
        },
        {
            x: new Date('December 31, 2016'),
            y: [1.06870, 1.06870, 1.06000, 1.06750]
        },
        {
            x: new Date('January 1, 2017'),
            y: [1.06750, 1.07500, 1.06750, 1.07000]
        },
        {
            x: new Date('January 2, 2017'),
            y: [1.07100, 1.07250, 1.06800, 1.06900]
        },
        {
            x: new Date('January 3, 2017'),
            y: [ 1.08300, 1.09000, 1.05740, 1.05760]
        },
        {
            x: new Date('January 4, 2017'),
            y: [ 1.05760, 1.06270, 1.04900, 1.05250]
        },
        {
            x: new Date('January 5, 2017'),
            y: [ 1.05250, 1.06750, 1.05250, 1.05750]
        },
        {
            x: new Date('January 6, 2017'),
            y: [ 1.06000, 1.06850, 1.05250, 1.06750]
        },
        {
            x: new Date('January 7, 2017'),
            y: [1.06750, 1.07000, 1.05750, 1.05900]
        },
        {
            x: new Date('January 8, 2017'),
            y: [1.05900, 1.07000, 1.05750, 1.06750]
        },
        {
            x: new Date('January 9, 2017'),
            y: [1.06750, 1.07800, 1.06250, 1.07700]
        },
        {
            x: new Date('January 10, 2017'),
            y: [1.07500, 1.09000, 1.07000, 1.08500]
        },
        {
            x: new Date('January 11, 2017'),
            y: [1.08500, 1.08770, 1.07200, 1.08240]
        },
        {
            x: new Date('January 12, 2017'),
            y: [1.08200, 1.09250, 1.07750, 1.08800]
        },
        {
            x: new Date('January 13, 2017'),
            y: [1.08750, 1.09200, 1.07750, 1.08000]
        },
        {
            x: new Date('January 14, 2017'),
            y: [1.08100, 1.08300, 1.07250, 1.07300]
        },
        {
            x: new Date('January 15, 2017'),
            y: [1.07255, 1.07255, 1.06250, 1.06750]
        },
        {
            x: new Date('January 16, 2017'),
            y: [1.06750, 1.08000, 1.06750, 1.07800]
        },
        {
            x: new Date('January 17, 2017'),
            y: [1.07850, 1.08100, 1.07760, 1.07800]
        },
        {
            x: new Date('January 18, 2017'),
            y: [1.08000, 1.08100, 1.07600, 1.07700]
        },
        {
            x: new Date('January 19, 2017'),
            y: [1.07700, 1.07750, 1.06800, 1.06800]
        },
        {
            x: new Date('January 20, 2017'),
            y: [1.06870, 1.06870, 1.06000, 1.06750]
        },
        {
            x: new Date('January 21, 2017'),
            y: [1.06750, 1.07500, 1.06750, 1.07000]
        },
        {
            x: new Date('January 22, 2017'),
            y: [1.07100, 1.07250, 1.06800, 1.06900]
        },
        {
            x: new Date('January 23, 2017'),
            y: [1.07000, 1.07000, 1.06700, 1.06800]
        },
        {
            x: new Date('January 24, 2017'),
            y: [1.06850, 1.07200, 1.06500, 1.07200]
        },
        {
            x: new Date('January 24, 2017'),
            y: [1.07500, 1.07800, 1.07000, 1.07800]
        },
        {
            x: new Date('January 25, 2017'),
            y: [1.08350, 1.08250, 1.07750, 1.08250]
        },
        {
            x: new Date('January 26, 2017'),
            y: [1.08250, 1.08700, 1.08000, 1.08500]
        },
        {
            x: new Date('January 27, 2017'),
            y: [1.08450, 1.08500, 1.07750, 1.07850]
        },
        {
            x: new Date('January 28, 2017'),
            y: [1.07700, 1.07750, 1.06800, 1.06800]
        },
        {
            x: new Date('January 29, 2017'),
            y: [1.06870, 1.06870, 1.06000, 1.06750]
        },
        {
            x: new Date('January 30, 2017'),
            y: [1.06750, 1.07500, 1.06750, 1.07000]
        },
        {
            x: new Date('January 31, 2017'),
            y: [1.07100, 1.07250, 1.06800, 1.06900]
        },
        {
            x: new Date('February 1, 2017'),
            y: [1.07000, 1.07000, 1.06700, 1.06800]
        },
        {
            x: new Date('February 2, 2017'),
            y: [1.06850, 1.07200, 1.06500, 1.07200]
        },
        {
            x: new Date('February 3, 2017'),
            y: [1.07500, 1.07800, 1.07000, 1.07800]
        },
        {
            x: new Date('February 4, 2017'),
            y: [1.08350, 1.08250, 1.07750, 1.08250]
        },
        {
            x: new Date('February 5, 2017'),
            y: [1.08250, 1.08700, 1.08000, 1.08500]
        },
        {
            x: new Date('February 6, 2017'),
            y: [1.08450, 1.08500, 1.07750, 1.07850]
        },
        {
            x: new Date('February 7, 2017'),
            y: [1.07700, 1.07750, 1.06800, 1.06800]
        },
        {
            x: new Date('February 8, 2017'),
            y: [1.06870, 1.06870, 1.06000, 1.06750]
        },
        {
            x: new Date('February 9, 2017'),
            y: [1.06750, 1.07500, 1.06750, 1.07000]
        },
        {
            x: new Date('February 10, 2017'),
            y: [1.07100, 1.07250, 1.06800, 1.06900]
        },
        {
            x: new Date('February 11, 2017'),
            y: [1.07000, 1.07000, 1.06700, 1.06800]
        },
        {
            x: new Date('February 12, 2017'),
            y: [1.06850, 1.07200, 1.06500, 1.07200]
        },
        {
            x: new Date('February 13, 2017'),
            y: [1.07500, 1.07800, 1.07000, 1.07800]
        },
        {
            x: new Date('February 14, 2017'),
            y: [1.08350, 1.08250, 1.07750, 1.08250]
        },
        {
            x: new Date('February 15, 2017'),
            y: [1.08250, 1.08700, 1.08000, 1.08500]
        },
        {
            x: new Date('February 16, 2017'),
            y: [1.08450, 1.08500, 1.07750, 1.07850]
        },
        {
            x: new Date('February 17, 2017'),
            y: [1.08450, 1.08500, 1.07750, 1.07850]
        },
        {
            x: new Date('February 18, 2017'),
            y: [1.06870, 1.06870, 1.06000, 1.06750]
        },
        {
            x: new Date('February 19, 2017'),
            y: [1.06750, 1.07500, 1.06750, 1.07000]
        },
        {
            x: new Date('February 20, 2017'),
            y: [1.07100, 1.07250, 1.06800, 1.06900]
        },
    ],
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