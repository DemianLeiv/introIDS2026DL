const express = require("express")
const users = require("./users.json")
const app= express()
const PORT = 3000

app.get('/',(request,response)=>{
    response.json({"mensaje":"Hello world"})
    console.log("alguien pidio info en /")
    console.log(users)
})

app.get('/users',(request,response)=>{
    response.json(users)
    console.log ("alguien pidio info en /users")
    // console.log(users)
})

app.get('/users/:id',(request,response)=>{
    let id = request.params.id
    if(id >0 && id< users.lenght){
        response.json(users[request.params,id])
    }else{
        response.status(404).json({"mensaje":"error en id"})
    }
    console.log("alguien pidio usuarios en /users")
})

app.listen(PORT, ()=>{console.log("Escuchando en localhost:"+PORT)})
