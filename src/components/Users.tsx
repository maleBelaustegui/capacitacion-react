import { useEffect, useState } from 'react';
import { reqResApi } from "../api/reqRes";
import { ReqResListado, User } from "../interfaces/reqRes";

export const Users = () => {

const [users, setUsers] = useState<User[]>([]);


  useEffect(() => {
  //llamado a la API - con fetch o con axios
    reqResApi
      .get<ReqResListado>("/users")
      .then((resp) => {
        console.log(resp.data.data);

      })
      .catch(console.log);
  }, []);

  return (
    <>
      <h3>Users:</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
          <tbody></tbody>
        </thead>
      </table>
    </>
  );
};
