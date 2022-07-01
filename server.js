const jsonServer = require("json-server")
const server =jsonServer.create()
const router =jsonServer.router('data/db.json')
const middleware=jsonServer.defaults()
const PORT =4000

server.use(middleware)
server.use(router)
server.listen(4000,()=>{
    console.log(`server running on port : ${PORT}`)
})

