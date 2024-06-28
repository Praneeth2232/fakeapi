import axios from "axios";
import { useEffect, useState } from "react";

function Fakeapi() {
  interface Movies {
    Title: string;
    Year : number;
    Runtime : string;
    Poster : string;
  }

  const [userData, setUserData] = useState<Movies[]>([]);
  const [error, setError] = useState('');


  useEffect(() => {
    axios
      .get<Movies[]>("https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies")
      .then((res) => {
        setUserData(res.data);
        console.log(res);
      })
  }, []);

  return (
    <div>
      <h1>{error}</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Year</th>
            <th scope="col">Runtime</th>
            <th scope="col">Poster</th>
          </tr>
        </thead>
        <tbody>
          {userData.map(eachUser=>(
            <tr>
            <th scope="row">{eachUser.Title}</th>
            <td>{eachUser.Year}</td>
            <td>{eachUser.Runtime}</td>
            <td><div className="card" >
                <img src={eachUser.Poster} />
                <div className="card-body">
                <h5 className="card-title">{eachUser.Title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                </div>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Fakeapi;