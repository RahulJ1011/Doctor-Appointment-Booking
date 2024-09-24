import React from 'react'
import Appointment from '../components/appoint/Appointment'
import Book from '../components/notification/Book'
import Navbar from '../components/navbar/Navbar'

const Appoint = () => {
  return (
    <>
    <Navbar />
    <div
    style={{
        display:"flex",
    }}
    >
        
        <div style={{
            flex:1
        }}>
            <Book />
        </div>
      <div style={{
        flex:2.5
      }}>
      <Appointment />
      </div>
    </div>
    </>
  )
}

export default Appoint
