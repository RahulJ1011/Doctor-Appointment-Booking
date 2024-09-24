const mongoose = require('mongoose');
const connection = ()=>
    {
        try
        {
            const connect = mongoose.connect("mongodb+srv://rahul876j:Doctor123@cluster0.6cutgqh.mongodb.net/=true&w=majority&appName=Cluster0")
            console.log("Mongoose is connected")
        }
        catch(err)
        {
            console.log(err);
            
        }
    }
module.exports = {connection}