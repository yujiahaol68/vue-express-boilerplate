let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserSchema = new Schema({
    name: {
        type: String,
        lowercase: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        min: 6,
        max: 50,
        required: true
    },
    email: {
        type: String,
        max: 50,
        required: true,
        unique: true
    },
    rememberToken: String,
    deleted_at: {
        type: Date
    }
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

mongoose.model('User', UserSchema);