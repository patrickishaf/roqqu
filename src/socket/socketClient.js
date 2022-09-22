import { io, Socket } from "socket.io-client";
import { subscriptionRequest } from "./utils";

function closeConnection(event){
    console.log('CLOSED SOCKET CONNECTION: ', event);
}

export default function initSocket(url, callback) {
    const socket = io(url, {
        transports: ['websocket'],
        withCredentials: true,
    });

    socket.on('error', (error) => {
        console.log('SOCKET RAN INTO AN ERROR: ', error);
        socket.close();
    });

    socket.on('message', (msg) => {
        console.log('JUST RECEIVED A MESSAGE FROM THE SOCKET CONNECTION: ', msg);
        // socket.send(subscriptionRequest([
        //     "btcusdt@aggTrade",
        //     "btcusdt@depth"
        // ], 1))
    })

    socket.on('reconnect', (attempt) => {
        console.log('TRYING TO RECONNECT TO SERVER', attempt, 'TIMES...');
        socket.close();
    });

    socket.on('reconnect_error', (error) => {
        console.log('RECONNECTION ERROR: ', error);
    });

    return socket;
}

function createSocket(url, callback) {
    const socket = new WebSocket(url);

    socket.onopen = (event) => {
        console.log('SOCKET CONNECTION IS OPEN: ', event);
        socket.send(subscriptionRequest([
            "btcusdt@aggTrade",
            "btcusdt@depth"
        ], 1));
    }

    socket.onmessage = callback;
    
    socket.onclose = closeConnection;

    return socket;
}
