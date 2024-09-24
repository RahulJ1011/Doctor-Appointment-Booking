import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { userContext } from '../../context/Contextapi'

const Docaccept = () => {
    const {Token,docId} = useContext(userContext)
    useEffect(()=> {
        const requests = async()=>
            {
                try
                {
                    const response = await axios.get(`http://localhost:4000/api/appoint/notify${docId}`,{
                        headers:{
                            Authorization:`Bearer ${Token}`,
                            "Content-Type":"application/json"
                        }
                    })
                }
                catch(Err)
                {
                    console.log(Err);
                }
            }
            requests()
    },[])
  return (
    <div>
      
    </div>
  )
}

export default Docaccept
