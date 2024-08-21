const express = require('express');
const path = require('path');

const app = express();

const indexRouter = require('./routes/index');

// Setting up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// To parse the form data into req.body
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
