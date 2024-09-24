const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const user = require('../models/user');
const doctor = require('../models/doctor');

const register = async(req,res)=>
    {
        try
        {
            const {UserName,Email,
                Password,PhNumber,
                Age,Gender,Image,
            } = req.body;
            const isuser = await user.findOne({Email});
            if(isuser)
                {
                    return res.status(400).json({msg:"User already exists"})
                }
            const hashedPassword = await bcrypt.hash(Password,10);
            const newUser = new user({
                UserName,
                Email,
                Password:hashedPassword,
                Age,
                Gender,
                Image,
                PhNumber
            })
            await newUser.save();
            return res.status(201).json(newUser);
        }
        catch(err)
        {
            console.log(err);
            return res.status(500).json({msg:err});
        }
    }
    const DoctorRegister = async(req,res)=>
        {
            try
            {
                const {FirstName,LastName,Email,
                    Password,PhNumber,
                    Age,Gender,Image,Experience,
                    Specs,Address,Fee
                } = req.body;
                const isuser = await doctor.findOne({Email});
                if(isuser)
                    {
                        return res.status(400).json({msg:"User already exists"})
                    }
                const hashedPassword = await bcrypt.hash(Password,10);
                const newUser = new doctor({
                    FirstName,
                    LastName,
                    Email,
                    Password:hashedPassword,
                    Age,
                    Gender,
                    Image,
                    PhNumber,
                    Experience,
                    Specs,
                    Address,
                    Fee
                })
                await newUser.save();
                return res.status(201).json(newUser);
            }
            catch(err)
            {
                console.log(err);
                return res.status(500).json({msg:err});
            }
        }
const  Doctorlogin = async(req,res)=>
    {
        try
        {
            const {Email,Password,role} = req.body;
            const isDoctor = await doctor.findOne({Email});
            if(isDoctor)
                {
                   if(role !== "Doctor")
                    {
                        return res.status(404).json({msg:"Invalid credientials"})
                    }
                    
                }
                if(!isDoctor)
                    {
                        return res.status(404).json({msg:"Invalid credientials"})
                    }
            const check = await bcrypt.compare(Password,isDoctor.Password);
            if(!check)
                {
                    return res.status(400).json({msg:"Password does not match with Email"});
                }
            const token = jwt.sign({
                id:isDoctor._id,
            },"doctor123");
            const loggedUser = isDoctor.toObject();
            delete loggedUser.Password;
            return res.status(201).json({token,loggedUser})
        }
        catch(err)
        {
            console.log(err);
            return res.status(500).json({msg:err})
        }
    }
const PatientLogin = async(req,res)=>
    {
        try
        {
            const {Email,Password} = req.body;
            const isUser = await user.findOne({Email});
            if(!isUser)
                {
                    return res.status(404).json({
                        msg:"User not found"
                    })
                }
            const check = await bcrypt.compare(Password,isUser.Password);
            if(!check)
                {
                    return res.status(400).json({msg:"Invalid Password"})
                }
                const token = jwt.sign({
                    id:isUser._id,
                },"doctor123");
                const loggedUser = isUser.toObject();
                delete loggedUser.Password;
            return res.status(201).json({token,loggedUser})
        }
        catch(err)
        {
            console.log(err);
            return res.status(500).json({msg:err})
        }
    }
module.exports= {register,Doctorlogin,PatientLogin,DoctorRegister}