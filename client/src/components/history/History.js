import axios from 'axios'
import React, { useEffect, useState } from 'react'

const History = () => {
  const [data,setData] = useState([])
  /* useEffect(()=>
  {
    const history = async()=>
      {
        const res = await axios.get("http://localhost:4000/history",{
          userId
        })
        setData(res.data);
        
      }
  },[history]) */
  return (
    <div className='history-container'>
      <h4>History</h4>
        <div className='history-wrapper'>
          <h5>Dr.Raju</h5>
          <img src='https://firebasestorage.googleapis.com/v0/b/blog-925dd.appspot.com/o/post%2Flimak?alt=media&'
          height={200}
          width={200}
          />
          <p>Fee:500</p>
          <p>Mobile No. 9445489088</p>
          </div>      
    </div>
  )
}

export default History
