var message_board = require('../controller/message_board.js')
module.exports = function(app){
app.get('/', message_board.show);
app.post('/post', message_board.create_post);
app.post('/comment/:id', message_board.create_comment)
}