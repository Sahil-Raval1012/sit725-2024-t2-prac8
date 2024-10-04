const express = require('express');
const app = express();

app.use(express.static('public'));
app.get('/', (req, res) => 
  res.sendFile(__dirname + '/public/index.html')
);
const port = process.env.PORT||8080;
app.listen(port, () => 
  console.log(`app running on http://localhost:${port}`)
);
