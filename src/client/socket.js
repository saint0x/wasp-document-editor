// client/socket.js

import socketIOClient from 'socket.io-client';

const socket = socketIOClient('http://localhost:8000');

export default socket;
