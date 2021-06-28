// Dependencies
const express = require('express');
const app = express();

const PORT = process.env.PORT || 8081;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//not from hotrestaurant
app.use(express.static('public'));

require('./routes/apiRoutes.js')(app);
require('./routes/htmlRoutes.js')(app);

// Start the server 
app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}.`);
});




// // notes from 11.1

// const handleRequest = (req, res) => {
//   // Capture the url the request is made to
//   const path = req.url;


//   // When we visit different urls, read and respond with different files
//   switch (path) {
//     case '/notes':
//       return fs.readFile(`${__dirname}/notes.html`, (err, data) => {
//         if (err) throw err;
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.end(data);
//       });

//     // default to rendering index.html, if none of above cases are hit
//     default:
//       return fs.readFile(`${__dirname}/index.html`, (err, data) => {
//         if (err) throw err;
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.end(data);
//       });
//   }
// };

// // Create the server, assign it to a variable called "server"
// const server = http.createServer(handleRequest);

// // Starts our server.
// server.listen(PORT, () => {
//   console.log(`Server is listening on PORT: ${PORT}`);
// });




// // DRY version-----
// // function to take a filepath and respond with html
// const renderHTML = (filePath, res) => {
//   return fs.readFile(`${__dirname}${filePath}`, (err, data) => {
//     if (err) throw err;
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end(data);
//   });
// };

// const handleRequest = (req, res) => {
//   // Capture the url the request is made to
//   const path = req.url;

//   // When we visit different urls, call the function with different arguments
//   switch (path) {
//     case '/food':
//     case '/movies':
//     case '/frameworks':
//       return renderHTML(`${path}.html`, res);

//     default:
//       return renderHTML('/index.html', res);
//   }
// };
// // ----------