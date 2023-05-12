import { useEffect, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResListado, User } from "../interfaces/reqRes";

export const Users = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    //llamado a la API - con fetch o con axios
    reqResApi
      .get<ReqResListado>("/users")
      .then((resp) => {
        setUsers(resp.data.data);
      })
      .catch(console.log);
  }, []);

  const renderItem = ({ id, first_name, last_name, email, avatar }: User) => {
    return (
      <tr key={id.toString()}>
        <td>
          <img
            src={avatar}
            alt={first_name}
            style={{
              width: 30,
              borderRadius: 100,
            }}
          />
        </td>
        <td>
          {first_name} {last_name}
        </td>
        <td>{email}</td>
      </tr>
    );
  };

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
        </thead>
        <tbody>{users.map(renderItem)}</tbody>
      </table>
    </>
  );
};
