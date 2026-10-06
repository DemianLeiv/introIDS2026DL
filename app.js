const express = require('express')
const users = require("./users.json")
const app= express()
const PORT = 3000

app.use(express.json())
app.post('/users',(request, response)=>{
    const body = request.body
   
   if (body){
        body.id=users.lengt+1
        users.push(body)
        FileSystem.writeFileSync(
            "./users.json",
            JSON.stringify(users,null,2)
        )
        response.status(201).son(body)
   }

    console.log(body)
})

app.get("/",(request, response)=>{
    response.json({"mensaje":"Hello world"})
    console.log("alguien pidio info en /")
    //console.log(users)
})

app.get("/users",(request, response)=>{
    response.json(users)
    console.log ("alguien pidio info en /users")
    // console.log(users)
})

app.get("/users/:id",(request, response)=>{
    let id = request.params.id
    let users= users.find((u)=> u.id == id)
    if(user){
        response.json(user)
    }else{
        response.status(404).json({"mensaje":"No se encontró usuario "+id})
    }
    
    console.log("alguien pidio usuarios en /users")
})

app.listen(PORT, ()=>{console.log("Escuchando en localhost:"+PORT)})
