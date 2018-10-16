const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const app = express();
app.use(helmet());
app.use(morgan('combined'));
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.get('/', cors(), (req, res) =>{
  res.json({status:'ok'});
});
app.listen(PORT, ()=>{
  console.log(`listening on http://localhost:${PORT}`);
});

