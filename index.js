const express = require('express');
const bodyparser = require('body-parser')
const app = express();
const path = require('path')



//public files
app.use('/static',express.static(path.join(__dirname, 'public')));
//setting up rendering engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug')

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

//import routes
const authRoute = require('./routes/index')
const userRoute = require('./routes/users')

//using routes
app.use('/api/auth/',authRoute)
app.use('/api/user/',userRoute)


PORT = process.env.PORT || 2002;

app.listen(PORT,()=>{
 console.log(`listening on port ${PORT}`)
})