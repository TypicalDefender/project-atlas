const express = require('express');
const app = express();
const connectDB = require('./config/db');
const PORT = process.env.PORT || 3000;
connectDB();

app.use('/lol/users', require('./routes/api/users'));
app.use(express.json({extended : false}));
app.get('/lol', (req, res)=>{
  res.send('the server is running!!');
})

app.listen(PORT, ()=>{
  console.log('the server is running at http://localhost:3000')
});
