const express = require('express');
const routerApi = require('./routes');
const app = express();
const port = 3500;

app.use(express.json())

routerApi(app);

app.listen(port,()=>{
  console.log('Server running at port ' + port);
});
