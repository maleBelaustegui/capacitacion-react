import { useState, useRef, useEffect } from "react";
import { ReqResListado, User } from "../interfaces/reqRes";
import { reqResApi } from "../api/reqRes";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  const pageRef = useRef(1);

  useEffect(() => {
    //llamado a la API - con fetch o con axios
    getUsers();
  }, []);

  const getUsers = async () => {
    const resp = await reqResApi.get<ReqResListado>("/users", {
      params: {
        page: pageRef.current,
      },
    });

    if (resp.data.data.length > 0) {
      setUsers(resp.data.data);
     
    } else {
        pageRef.current--;
        alert("There are no more users");
    }
  }


  const nextPage = ()=>{
    pageRef.current++;
    getUsers()

  }

const prevPage = () => {
    if(pageRef.current > 1){
      pageRef.current --;
      getUsers()  
    }
}

  return {
    users,
    nextPage,
    prevPage
  };
};
