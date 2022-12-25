const express = require('express')
const app = express()
app.get('/user/:id', function (req, res) {
    const users = [ {id:1,name:"chocolate",price:20},{id:2,name:"Milk",price:7},{id:3,name:"Juice",price:3} ];
        res.json(JSON.stringify(users.find((user) => user.id == req.params.id)));
      });
      app.get('/user', function (req, res) {
        const users = [ {id:1,name:"chocolate",price:20},{id:2,name:"Milk",price:7},{id:3,name:"Juice",price:3} ];
            res.json(users);
          });

app.listen(3000, () => {
    console.log("Server started on 3000 port")
})