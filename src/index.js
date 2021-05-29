const express = require('express')
require('./db/mongoose') //just connects
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.get('/', (req,res)=>{
    res.send('goto /user or /tasks for more info')
})

app.listen(port, () =>{
    console.log('Server is up on ' + port)
})

const Task = require('./models/task')
const User = require('./models/user')

// const main = async () => {
//     // const task = await Task.findById('60b131b785b10a206cbccd07')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     const user = await User.findById('60b12e9faba9894204e67550')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

// main()