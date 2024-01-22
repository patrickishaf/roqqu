// type Interval = '1h' | '2h' | '4h' | '1d' | '1w' | '1m'

export const convertSingleCandle = (data) => {
  const model = {
    time: data[0],
    open: parseFloat(data[1]),
    high: parseFloat(data[3]),
    low: parseFloat(data[2]),
    close: parseFloat(data[4])
  }
  return model
}

export const convertToCandles = (res) => {
  const models = res.map((data) => convertSingleCandle(data))
  return models
}

export const formatDate = (date) => {
  let month = date.getMonth() + 1
  if (month < 10) month = `0${month}`
  let day = date.getDate()
  if (day < 10) day = `0${day}`
  return `${month}/${day}`
}

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