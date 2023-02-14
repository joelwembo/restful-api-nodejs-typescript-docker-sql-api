const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Backend Server running at Hello from port 3000')
})
app.listen(3000, () => console.log('Server is up and running at port 3000'));