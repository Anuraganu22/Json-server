const jsonServer = require("json-server")
const server =jsonServer.create()
const router =jsonServer.router('data/db.json')
const middleware=jsonServer.defaults()


server.use(middleware)
server.use(router)
server.listen(4000,()=>{
    console.log("sucessfully running")
})

