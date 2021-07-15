import openSocket from "socket.io-client";
const socket = openSocket('http://localhost:4000');

export const start = (cb) => {
    socket.on('ticker', tickers => cb(tickers));
    socket.emit('start', 1000)
}