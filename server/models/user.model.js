import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
        default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS5s9W9ma_jYfJk04gx3Q7pUYqABceh_09Q5EmECeG6ilLmlZIX3nj7a71waimMhXbRF0&usqp=CAU',
    },
},{timestamps: true});

const User = mongoose.model('User', userSchema)
export default User;



