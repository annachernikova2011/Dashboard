const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const indexRouter = require('./routes/indexRouter');

require('dotenv').config();

const app = express();
app.use(cors({
  credentials: true,
  origin: true,
}));
const PORT = process.env.PORT || 3001;
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', indexRouter);

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
