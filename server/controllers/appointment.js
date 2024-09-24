const doctor = require('../models/doctor');
const user = require('../models/user');


const PatientReq = async(req,res)=>
    {
        try
        {
            const {userId,DocId} = req.body;
        const isDoct = await doctor.findById(DocId)
        if(!isDoct)
            {
                return res.status(404).json({msg:"Doctor cannot be found"});
            }
        const isUser = await user.findById(userId)
        if(!isUser)
            {
                return res.status(404).json({msg:"User cannot be found"})
            }
        const request = await doctor.findByIdAndUpdate(DocId,{
            $push:{
                Notification:
                    {
                        userId:userId,
                        Image:isUser.Image,
                        UserName:isUser.UserName,
                        Age:isUser.Age,
                    }
                
            }
        })
        return res.status(201).json({msg:"Request Sent sucessfully"});

        }
        catch(err)
        {
            console.log(err);
            return res.status(500).json({msg:err})
        }
    }

const DoctorRes = async(req,res)=>
    {
        try
        {
            const {userId,DoctorId,Status,Timings}=req.body;
            const isDoct = await doctor.findById(DoctorId)
                if(!isDoct)
                {
                    return res.status(404).json({msg:"Doctor cannot be found"});
                }
                const isUser = await user.findById(userId)
                if(!isUser)
                {
                    return res.status(404).json({msg:"User cannot be found"})
                }
                
                const notify = await user.findByIdAndUpdate(userId,{
                    $push:{
                        Notification:{
                            userId:DoctorId,
                            Image:isDoct.Image,
                            Fee:isDoct.Fee,
                            Status:Status,
                            Timing:Timings
                        }
                    }
                },{new:true})
                const removeNotify = await doctor.findByIdAndUpdate(DoctorId, {
                    $pull: {
                        Notification: { userId: userId }
                    }
                },{new:true});
                if(Status === "accepted")
                    {
                        const his = await doctor.findByIdAndUpdate(DoctorId,
                            {
                                $push:{
                                    Patients:{
                                        userId:userId,
                                        Image:isUser.Image,
                                        UserName:isUser.UserName,
                                        Age:isUser.Age,
                                        Status:Status
                                    }
                                }
                            }
                        )
                        const patien = await user.findByIdAndUpdate(userId,{
                            $push:{
                                History:{
                                    userId:DoctorId,
                                    Image:isDoct.Image,
                                    Fee:isDoct.Fee,
                                    Status:Status,
                                    UserName:isDoct.FirstName,
                                    PhNumber:isDoct.PhNumber
                                }
                            }
                        })
                        
                    }
                return res.status(201).json({msg:"Response sent sucessfully"});
        }
        catch(err)
        {
            console.log(err);
            return res.status(500).json({msg:err})
        }
    }

const PatientHis = async(req,res)=>
    {
        try
        {
            const {userId,docId} = req.body;
            const isUser = await user.findById(userId);
            if(!isUser)
                {
                    return res.status(404).json({msg:"User not found"})
                }
            const isDoc = await doctor.findById(docId)
            if(!isDoc)
                {
                    return res.status(404).json({msg:"Doctor not found"})
                }
            const history = isUser.History;
            return res.status(201).json(history)
        }
        catch(err)
        {
            console.log(err)
            return res.status(500).json({msg:"Internal Server Error"})
        }
    }
const bookAppointment = async(req,res)=>
    {
        try
        {
            const {data} = req.params;
            const doctors = await doctor.find({Specs:data});
            if(!doctors)
                {
                    console.log("No doctors found")
                    return res.status(404).json({msg:"No Doctors found"})
                }
                console.log(doctors)
            return res.status(201).json(doctors)
        }
        catch(err)
        {
            console.log(err);
            return res.status(500).json({msg:"Internal Server Error"})
        }
    }
const getDoc = async(req,res)=>
    {
        try
        {
            const {id} = req.params;
            const doc = await doctor.findById(id);
            if(!doc)
                {
                    return res.status(404).json({msg:"Doctor no found"})
                }
            return res.status(201).json(doc)
        }
        catch(err)
        {
            console.log(err);
            return res.status(500).json({msg:"Internal server Error"})
        }
    }
const clearNotify = async(req,res,next)=>
    {
        try
        {
            const {id,userId} = req.params;
            const isUser = await user.findById(userId);
            if(!isUser)
                {
                    return res.status(404).json({msg:"user not found"})
                }
                const index = isUser.Notification.findIndex(notification=> notification.userId === id )
                if(index === -1)
                    {
                        return res.status(404).json({msg:"Notification not found"});
                    }
                    isUser.Notification[index].isRead=true;
                    const updatedUser = await isUser.save();
            next()
            
        }
        catch(err)
        {
            console.log(err);
            return res.status(500).json({msg:"internal Server Error"})
        }
    }
const notifications = async(req,res)=>
    {
        try
        {
            const {userId} = req.params;
            const isUser = await user.findById(userId);
            if(!isUser)
                {
                    return res.status(404).json({msg:"User Not found"})
                }
            const notifs =  isUser.Notification.filter(notification => !notification.isRead);
            return res.status(201).json(notifs);

        }
        catch(err)
        {
            console.log(err);
            return res.status(500).json({msg:"Internal Server Error"})
        }
    }
const docNotify = async(req,res)=>
    {
        try
        {
            const {docId} = req.params;
        const doc = await doctor.findById(docId);
        if(!doc)
            {
                return res.status(404).json({msg:"Doctor not found"});
            }
        const notifs = doc.Notification.filter((notify)=> !notify.isRead);
        return res.status(201).json(notifs);
        }
        catch(err)
        {
            console.log(err);
            return res.status(500).json({msg:"Internal Server Error"})
        }
    }
    module.exports = {PatientReq,
        DoctorRes,PatientHis,bookAppointment,getDoc,
        clearNotify,notifications,
        docNotify

    };