import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Book from '../components/notification/Book'
import History from '../components/history/History'

const PatientHistory = () => {
  return (
    <>
    <Navbar />
    <div style={{
        display:"flex",
        gap:"20px"
    }}>
        <div style={{
            flex:1
        }}>
            <Book />
        </div>
        <div style={{flex:2.5}}>
            <History />
        </div>
    </div>
    </>
  )
}

export default PatientHistory
