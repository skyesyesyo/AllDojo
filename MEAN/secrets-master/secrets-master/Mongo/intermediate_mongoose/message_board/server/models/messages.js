var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PostSchema = new mongoose.Schema({
 name: {type: String, required:true, minlength: 4},
 post: {type: String, required:true, maxlength:255 },
 comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}], 
}, {timestamps: true})

var CommentSchema = new mongoose.Schema({
 name: {type: String, required:true, minlength: 4},
 comment: {type: String, required:true, maxlength:255 },
 _post: {type: Schema.Types.ObjectId, ref: 'Post'}, 
}, {timestamps: true})

mongoose.model('Post', PostSchema);


mongoose.model('Comment', CommentSchema);
