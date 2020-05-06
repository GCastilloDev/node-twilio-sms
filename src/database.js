const mongoose = require('mongoose');

mongoose.connect(/*'mongodb://localhost/smsdb'*/
'mongodb+srv://<gcnctz@gmail.com>:<gustavo1987&1>@cluster0-ewynv.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log('DB is connected'))
.catch(err => console.log(err));