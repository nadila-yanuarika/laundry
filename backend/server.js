const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Impor cors
const orderRoutes = require('./routes/orderRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: 'http://localhost:5173',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

app.use(bodyParser.json()); 
app.use('/orders', orderRoutes); 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
