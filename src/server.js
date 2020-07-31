const app = require('./app');
const cors = require('cors');

//CORS
app.use(cors());

//  Error 404
app.use((req,resp,next ) => {
  const err = new Error('Not found');
  err.status = 404;
  next(err);
})
//Errors 
app.use((error,req,resp,next) => {
  resp.status(error.status || 500 );
  resp.json({ error: error.message })
})
app.listen(process.env.PORT || 4000);
