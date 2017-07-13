// Require the Express Module
var express = require('express');

// Create an Express App
var app = express();

//require mongoose (to use mongoose with MongoDB)
var mongoose = require('mongoose');
// This is how we connect to the mongodb database using mongoose -- after /localhost/____
mongoose.connect('mongodb://localhost/message_board');

// define Schema variable
var Schema = mongoose.Schema;

//creating PostSchema
var PostSchema = new mongoose.Schema({
  name:  { type: String, required: true, minlength: 4},
  message: { type: String, required: true},
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
}, {timestamps: true });

//creating CommentSchema
var CommentSchema = new mongoose.Schema({
  name:  { type: String, required: true, minlength: 4},
  _post: {type: Schema.Types.ObjectId, ref: 'Post'},
  comment: {type: String, required: true }
}, {timestamps: true });

//set models by passing them to their respective Schemas & storing models in variables
var Post = mongoose.model('Post', PostSchema)
var Comment = mongoose.model('Comment', CommentSchema)

// Use native promises
mongoose.Promise = global.Promise;

// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');

// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));

// Require path
var path = require('path');

// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));

// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

// Routes

// Root Request
app.get('/', (req, res) => {
  Post.find({})
  .populate('comments')
  .exec( (err, data) => {
    if(err){
      console.log('***************')
      console.log(err);
      console.log('***************')
      return;
      res.render('index', {errors: data.errors});
    }else{
      console.log('line 67')
      console.log(data)
      res.render('index', {post: data, errors: err})
    }
  })
});

app.post('/submit_message', (req, res) => {
  let post = new Post(req.body);
  post.save( (err, savedPost) => {
    if(err){
      Post.find({}, (postErr, data) => {
        if(postErr){
          return;
        } else{
          res.render('index', {errors: err, post: data})
        }
      })
    }else{
      res.redirect('/')
    }
  })
});

app.post('/submit_comment/:id', (req, res) => {
  Post.findOne({_id: req.params.id}, (err, post) => {
    var comment = new Comment(req.body);
    comment._post = post._id
    // console.log (comment)
    comment.save( (err, savedComment) => {
      console.log("the saved comment is", savedComment);
      post.comments.push(comment);
      // console.log(savedComment)
      post.save( (err, savedPost) => {
        console.log('line 100')
        console.log(savedPost);
        if(err){
          Post.find({}, (postErr, data) => {
          if(postErr){
            console.log("Ended on line 105")
            return;
          } else{
          res.render('index', {errors: err.errors, post: data})
        }
      })
      } else {
        res.redirect('/')
      }
    })
  })

  })
});

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
  console.log("listening on port 8000");
});