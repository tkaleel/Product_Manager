const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/products_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('✨✨ Established a connection: Products Database ✨✨'))
    .catch(err => console.log('⚠⚠ Something went wrong when connecting: Products Database ⚠⚠', err));