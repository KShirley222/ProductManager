const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/newproductdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}) 
    .then( ()=>console.log("Database connection exstablished"))
    .catch(err=>console.log("there was an error", err))