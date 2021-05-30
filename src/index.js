const app = require('./app')
const port = process.env.PORT

app.get('/', (req,res)=>{
    res.send('goto /user or /tasks for more info')
})

app.listen(port, () =>{
    console.log('Server is up on ' + port)
})