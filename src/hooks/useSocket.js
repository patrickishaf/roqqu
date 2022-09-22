import { useState, useEffect, useDebugValue } from "react";

const useSocket = (url, callback) => {
    const [socket, setSocket] = useState();
    const [send, setSendData] = useState();
    const [close, setClose] = useState();

    useEffect(() => {
        const socketClient = new WebSocket(url);

        setSocket(socketClient);

        socketClient.onmessage = ({ data }) => {
            callback(data);
        };

        setSendData((data) => {
            socketClient.send(JSON.stringify(data));
        });

        setClose(() => {
            socketClient.close();
        });

    }, [url]);

    useDebugValue(socket);
    useDebugValue(send);
    useDebugValue(close);

    return { socket, send, close }
}

export default useSocket;