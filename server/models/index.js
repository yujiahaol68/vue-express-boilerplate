const mongoose = require('mongoose');
const config = require('../config');

module.exports = () => {
    mongoose.Promise = global.Promise;
    // connect DB
    try {
       let db = mongoose.connect(config.db, {server: {poolSize: 20}});
    } catch(err) {
        console.error(err);
        process.exit(1);
    }

    require('../migrations/user');

    return db;
}





