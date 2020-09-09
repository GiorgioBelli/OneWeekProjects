
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http)

app.get('/', (req, res) => {
  res.send('<h1>Hey Socket.io</h1>');
});

io.on('connection', (socket) => {

    console.log(socket.id,"[connected]");

    socket.on("disconnect", () =>{
        console.log(socket.id,"[disconnected]");
    });

    socket.on("my id", () =>{
      io.to(socket.id).emit('my id',{message_sign: "my id",message_body: socket.id});
    });
    
    socket.on("add-message", (msgObj) => {
        console.log(socket.id,"->",msgObj.to,":", msgObj.content);
        io.to(msgObj.to).emit('personal message',{message_sign: 'personal message',message_body: JSON.stringify(msgObj)});
        
    })
})

http.listen(3000, () => {
  console.log('listening on *:3000');
});