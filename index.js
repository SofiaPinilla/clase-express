const express = require("express");
const path = require('path');

const app = express();

const members = [
    {
      id: 1,
      name: "John Doe",
      email: "john@gmail.com",
      status: "active",
    },
    {
      id: 2,
      name: "Bob Williams",
      email: "bob@gmail.com",
      status: "inactive",
    },
    {
      id: 3,
      name: "Shannon Jackson",
      email: "shannon@gmail.com",
      status: "active",
    },
  ];
// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','index.html'))
// })

// cargar archivos html de forma estática
// app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req,res)=>{
    res.json(members)
})

app.get('/:id',(req,res)=>{
    const found = members.some(member => member.id === +req.params.id)

    if(found){
        res.json( members.filter(member => member.id === +req.params.id))
    }else{
        res.status(404).json({msg:`Miembro con el id ${req.params.id} no encontrado`})
    }
})



app.listen("3000", () => {
  console.log("Server started on port 3000");
});
