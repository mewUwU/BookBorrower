const mongoose = require('mongoose');

async function connect() {
    try{
        await mongoose.connect('mongodb://localhost:27017/f8_education', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connect successfully!')
    }catch (error){console.log('Connection failed!')}

}


module.exports = { connect };