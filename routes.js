const { addBook, getAllBook, getBookById, editBookById, deleteBookById } = require('./kendali');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBook,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBook,
 },
 {
  method: 'GET',
  path: '/notes/{bookId}',
  handler: getBookById,
},
{
  method: 'PUT',
  path: '/notes/{bookId}',
  handler: editBookById,
},
{
  method: 'DELETE',
  path: '/notes/{bookId}',
  handler: deleteBookById,
},
];

module.exports = routes;