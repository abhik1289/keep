const mongoose = require('mongoose');
const password = process.env.PASSWORD;

mongoose.connect(`mongodb+srv://123456:${password}@cluster0.6vdfh43.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,


}).then(()=>{
console.log("Db Connected");
}).catch((error)=>{
    console.log(error);
});

