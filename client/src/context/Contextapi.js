import { createContext, useState, useEffect } from "react";

export const userContext = createContext();

const Context = ({ children }) => {
  const [Token, SetToken] = useState(() => localStorage.getItem('token') || null);
  const [userName, SetUserName] = useState(() => localStorage.getItem('name') || null);
  const [image, setImage] = useState(() => localStorage.getItem('pic') || "");
  const [DocId, SetDocId] = useState(() => localStorage.getItem('docID') || "");
  const [Id,setId] = useState(()=> localStorage.getItem("id")|| "");

  const saveToken = (userToken) => {
    localStorage.setItem('token', userToken);
    SetToken(userToken);
  };

  const getToken = () => {
    return Token;
  };

  const saveUserName = (name) => {
    localStorage.setItem("name", name);
    SetUserName(name);
  };

  const getUserName = () => {
    return userName;
  };

  const saveImage = (pic) => {
    localStorage.setItem("pic", pic);
    setImage(pic);
  };
  const saveId = (id)=>
    {
        localStorage.setItem("id",id);
        setId(id)
    }
    const saveDocId = (id)=>
        {
            localStorage.setItem("docID",id);
            SetDocId(id)
        }

  return (
    <userContext.Provider value={{
      Token,
      saveToken,
      getToken,
      saveUserName,
      getUserName,
      userName,
      image,
      saveImage,
      saveId,
      Id,
      saveDocId,
      DocId
    }}>
      {children}
    </userContext.Provider>
  );
};

export default Context;
