import React, { useContext, useEffect, useState } from 'react';
import "./notify.css";
import axios from 'axios';
import { userContext } from '../../context/Contextapi';

const Notify = () => {
  const [notifications, setNotifications] = useState([]);
  const { Id, Token } = useContext(userContext);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/appoint/notify/${Id}`, {
          headers: {
            Authorization: `Bearer ${Token}`,
            "Content-Type": "application/json"
          }
        });
        setNotifications(response.data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, [Id, Token]);

  const clearNotify = async (id) => {
    try {
      const userId = Id;
      const response = await axios.put(`http://localhost:4000/api/appoint/notify/${id}/${userId}`, {
        isRead: true
      }, {
        headers: {
          Authorization: `Bearer ${Token}`,
          "Content-Type": "application/json"
        }
      });
      setNotifications(response.data);
    } catch (error) {
      console.error('Error clearing notification:', error);
    }
  };

  return (
    <div className='notify-container'>
      {notifications.length > 0 ? (
        notifications.map((noti) => (
          <div key={noti._id} className='notify-wrapper'>
            <img
              src={noti.Image}
              alt={`Dr. ${noti.Firstname}`}
              height={100}
              width={100}
              style={{ borderRadius: "50%" }}
            />
            <div>
              <h5>{`Dr. ${noti.Firstname}`}</h5>
              <p> has accepted your appointment</p>
              <p>You have an appointment at {noti.Timing}</p>
            </div>
            <button className='btn' onClick={() => clearNotify(noti._id)}>
              Clear
            </button>
          </div>
        ))
      ) : (
        <p>You do not have notifications</p>
      )}
    </div>
  );
};

export default Notify;
