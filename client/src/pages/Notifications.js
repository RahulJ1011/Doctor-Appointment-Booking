import React from 'react'
import Notify from '../components/notification/Notify'
import Book from '../components/notification/Book'
import Navbar from '../components/navbar/Navbar'

const Notifications = () => {
  return (
    <>
    <Navbar />
        <div className='notification' style={{
        display:"flex",
        marginTop:"20px",
        gap:"30px"
    }}>
         <div className='book' style={{
            flex:1,
           
            marginLeft:"10px"
         }}>
            <Book />
        </div>
      <div className='notify'
      style={{
        flex:2.5,
           marginRight:"10px"
      }}
      >
        <Notify />
      </div>
     
    </div>
    </>
  )
}

export default Notifications
