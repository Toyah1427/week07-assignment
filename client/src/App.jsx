import { useState, useEffect } from "react";
import FanForm from "./FanForm.jsx";

export default function App() {
  const [fans, setFans] = useState([]);
  
  useEffect(() => {
    getFans();
  }, []);
  async function getFans() {
    const response = await fetch("http://localhost:8080/fans");
    const data = await response.json();
    setFans(data);
  }
  
  return (
    <div>
      <h1>BMovies</h1>
      {fans.map((fan) => {
      return (
        <div key={fan.id}>
          <h2>
            {fan.name} age {fan.age}
          </h2>
          <p>{fan.name} loves </p>
          <ul>
            {fan.movies.map((movie) => {
              return <li key={movie}>{movie}</li>;
            })}
          </ul>
        </div>
      );
    })}
    <FanForm />
    </div>
  );
}