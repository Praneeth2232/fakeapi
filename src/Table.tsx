import axios from "axios";
import { useEffect, useState } from "react";

function Table() {
  interface users {
    id: number;
    name: string;
    email: string;
    phone: string;
  }

  const [userData, setUserData] = useState<users[]>([]);
  const [error, setError] = useState('');


  useEffect(() => {
    axios
      .get<users[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUserData(res.data);
        console.log(res);
      }).catch(error=>setError(error.message));
  }, []);

  return (
    <div>
      <h1>{error}</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
          {userData.map(eachUser=>(
            <tr>
            <th scope="row">{eachUser.id}</th>
            <td>{eachUser.name}</td>
            <td>{eachUser.email}</td>
            <td>{eachUser.phone}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Table;