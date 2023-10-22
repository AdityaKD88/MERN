const mongoose = require('mongoose');

const url = "mongodb+srv://Aditya:akd889977@cluster0.yjttxm4.mongodb.net/mydatabase?retryWrites=true&w=majority";

mongoose.connect(url)

.then((result) => {
    console.log('database connected');
    // console.log(result);
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;