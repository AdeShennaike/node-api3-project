// require your server and launch it
const server = require("./api/server")

const Port = 9000

server.listen(Port, () => {
    console.log(`\n**Server running on localhost:${Port}**\n`)
})