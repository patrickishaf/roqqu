const options = {
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
};

export default options;