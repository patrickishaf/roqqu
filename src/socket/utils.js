export const subscriptionRequest = (params, id) => JSON.stringify({
    method: "SUBSCRIBE",
    params,
    id
});

export const unsubscriptionRequest = (params, id) => JSON.stringify({
    method: "UNSUBSCRIBE",
    params,
    id
});

export const listSubscriptionsRequest = (id) => JSON.stringify({
    method: "LIST_SUBSCRIPTIONS",
    id
});

export const setPropertyRequest = (id) => JSON.stringify({
    method: "SET_PROPERTY",
    params: ["combined", true],
    id
});

export const getPropertyRequest = (id) => JSON.stringify({
    method: "GET_PROPERTY",
    params: ["combined"],
    id
});

export const sendDataToSocket = (data, socket) => {
    socket.send(data);
    return socket;
}