const mongoose = require('mongoose');

const requestSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phoneNo:{
        type:String,
        required:true
    },
    organizationName:{
        type:String,
        required:true
    },
    typeOfEwaste:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    collectionDate:{
        type:String,
        required:true
    },
    collectionAddress:{
        type:String,
        required:true
    },
    generatedBy:{
        type:mongoose.Types.ObjectId,
        
    },
    currentOwener:{
        type:mongoose.Types.ObjectId,
        
    },
    status:{
        type:String,
        
    }
}, { timestamps: true })

const RequestModel = mongoose.model('EwasteRequest',requestSchema);

module.exports = {
    RequestModel
}