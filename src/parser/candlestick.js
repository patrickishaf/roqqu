const createCandleStick = (data) => {
    return ([
        data['E'],
        data['k']['o'],
        data['k']['h'],
        data['k']['l'],
        data['k']['c']
    ]);
};

export default createCandleStick;