const createCandleStick = (data) => {
    // return ({
    //     x: new Date(data['E']).toDateString(),
    //     y: [
    //         parseFloat(data['k']['o']),
    //         parseFloat(data['k']['h']),
    //         parseFloat(data['k']['l']),
    //         parseFloat(data['k']['c'])
    //     ],
    // });
    return ([data['E'], data['k']['o'], data['k']['h'], data['k']['l'], data['k']['c']]);
};

export default createCandleStick;