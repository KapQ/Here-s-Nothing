var express = require('express');
var app = express();

var todos = {
  id : 1
  title: "Mow the lawn"
  order: 1
  completed: false
}

app.get('/todos/', function(req, res){
  res.json({id : 1})
})

app.post('/todos', function(req,res){
  res.json({title : "Mow the lawn"})
})

app.get('/todos[/id]', function(req, res){
  res.json({order : 1})
})

app.put('/todos[/id]', function(req, res){
  res.json({title : "Update the lawn"})
})

app.patch('/todos[/id]', function(req, res){
  res.json({completed : false})
})

app.delete('/todos[/id]', function(req, res){
  res.json({completed : false})
})
