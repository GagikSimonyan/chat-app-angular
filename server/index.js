const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
    cors: {
        origins: ['http://localhost:4200']
    }
});


io.on('connection', (socket) => {
    console.log('Socket ID : ', socket.id)

    socket.on('message', (data) => {
        io.emit('message', data);
    });
});

http.listen(3001, () => {
    console.log('listening on port : 3001');
});









// let express = require('express');
// let app = express();
//
// let http = require('http');
// let server = http.Server(app);
//
// let socketIO = require('socket.io');
// let io = socketIO(server);
//
// const port = process.env.PORT || 3001;
//
// io.on('connection', (socket) => {
//     socket.on('join', (data) => {
//         socket.join(data.room);
//         socket.broadcast.to(data.room).emit('user joined');
//     });
//
//     socket.on('message', (data) => {
//         io.in(data.room).emit('new message', {user: data.user, message: data.message});
//     });
// })
//
// server.listen(port, () => {
//     console.log(`started on port: ${port}`);
// });

