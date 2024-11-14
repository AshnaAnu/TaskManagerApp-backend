const jsonServer = require('json-server')

const TaskManagerServer = jsonServer.create()

const middleware = jsonServer.defaults()

const route = jsonServer.router('db.json')


const PORT = 3000 || process.env.PORT

TaskManagerServer.use(middleware)
TaskManagerServer.use(route)

TaskManagerServer.listen(PORT,()=>{
    console.log("Task Manager App Server Running on Port"+PORT);
    
})