const http = require('http')

const PORT = 8000
const serverHander = require('../app')

const server = http.createServer(serverHander)

server.listen(PORT , () => {
  console.log("listen 8000 port")
})