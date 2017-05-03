var express = require('express');
var bodyParser = require('body-parser');
var _ = require('lodash');
var morgan = require('morgan');
var app = express();
var PORT = 6050;

var arrays = [];
var id = 0;

app.use(morgan('dev'));
app.use(express.static('data'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/arrays', function(req, res){
  var array = req.body;
  id++;
  req.body.id = id + '';
  arrays.push(array);
  res.json(array);
});

app.get('/arrays', function(req, res){
  res.json(arrays);
});

app.get('/arrays/:id', function(req, res){
  var array = _.find(arrays, {id:req.params.id});
  res.json(array || {});
});

app.put('/arrays/:id', function(req, res){
  var update = req.body;
if(update.id){
  delete update.id;
  }


var array = _.findIndex(arrays, {id: req.params.id});
if(!arrays[array]){
res.send();
}else{
var updateArray = _.assign(arrays[array], update);
res.json(updateArray);
    }
});

app.delete('/arrays/:id', function(req, res){
  var array = _.findIndex(array, {id: req.params.id});
  if(!arrays[array]){
    res.send()
  }else{
    var deletedArray = array[array];
    lions.splice(array, 1);
    res.json(deletedArray);
  }
});



app.listen(PORT);
