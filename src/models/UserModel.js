import mongoose from '../database'
import bcrypt from 'bcryptjs'

const Schema = mongoose.Schema

const UserSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        required: true,
        select: false
    },
    Address: {
        type: Array,
        required: true,
    },
    contact: {
        type: Array,
        required: true
    },
    urlProfile: {
        type: String,
    },
    roles: [{
        type: String,
        required: true,
        enum: ['user','admin'],
        default: 'user'
    }]
})


UserSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash
    next()
})

const User = mongoose.model('User', UserSchema)

export default User
