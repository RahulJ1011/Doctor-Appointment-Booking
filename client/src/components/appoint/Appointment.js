import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../navbar/Navbar';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import "./appointment.css"
import { userContext } from '../../context/Contextapi';
const Appointment = () => {
    const { id } = useParams();
    const {Token} = useContext(userContext)
    const navigate = useNavigate()
    const [data, setData] = useState([]);

    useEffect(() => {
        const getDoctor = async () => {
            try {
                const res = await axios.get(`http://localhost:4000/api/appoint/getdoc/${id}`,
                    {
                        headers:{
                            Authorization:`Bearer ${Token}`,
                            "Content-Type":"application/json"
                        }
                    }
                );
                setData(res.data); 
            } catch (error) {
                console.error("Error fetching the doctor data:", error);
            }
        };

        if (id) {
            getDoctor();
        }
    }, [id]); 

    const bookAppointment = async()=>
        {
            const DocId = id
            const userId= '667a57c53e34ab02d47cc4be'
            try
            {
                const res = await axios.post("http://localhost:4000/api/appoint/book",
                    {
                        DocId,
                        userId
                    },

                    {
                        headers:{
                            Authorization:`Bearer ${Token}`,
                            "Content-Type":"application/json"
                        }
                    }
                    
                )
               alert("Appointment Booked sucessfully");
               navigate("/welcome")
               
            }
            catch(err)
            {
                console.log(err)
            }
        }
    return (
        <div>
            {id && (
                <>
                    <Navbar />
                   
                    <div className='appoint-container'>
                    <div className='doc-container'>
                    {data ? (
                                <div className='doc-wrapper'>
                                    <h3>Doctor Details</h3>
                                    <img src={data.Image} height={300} width={300} alt={`Dr. ${data.FirstName} ${data.LastName}`} />
                                    <p>{`Dr. ${data.FirstName} ${data.LastName}`}</p>
                                    <p>Fee: {data.Fee}</p>
                                    <p>Specialist: {data.Specs}</p>
                                    <p>Experience: {data.Experience} years</p>
                                    <p>PhNumber: {data.PhNumber}</p>
                                    <p>{data.Address}</p>
                                    <button className='btn' type='submit' onClick={bookAppointment}>
                                        Book
                                    </button>
                                </div>
                            ) : (
                                <p>Loading doctor details...</p>
                            )}
                        
                       
                    </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Appointment;
