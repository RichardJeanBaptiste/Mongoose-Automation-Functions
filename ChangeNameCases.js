const mongoose = require('mongoose');
const MONGOURI = process.env.MONGO_URI;


const TestSchema = new mongoose.Schema({
    name: {
        type: String,
    },
})


const conn = mongoose.createConnection(MONGOURI, {useNewUrlParser: true, useUnifiedTopology:true, poolSize:1});
const TestModel = conn.model('Test', TestSchema);


TestModel.find({}, (err, docs) => {

    for(i = 0; i < docs.length; i++){

        let uppercasename = docs[i].name;
        let lowercasename = uppercasename.toLowerCase();

        TestModel.updateMany({name: uppercasename}, {name: lowercasename}).exec();
        //console.log(docs[i].name);
    }

})
