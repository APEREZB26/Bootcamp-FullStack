import "./App.css";
import { useEffect, useState } from "react";
// import { Notes } from "./components/Notes";
import axios from "axios";
import { Country } from "./components/Country";

const App = () => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/users").then((res) => {
      const { data } = res;
      setCountry(data);
    });
  }, []);

  return (
    <div>
      {country.map((info)=>{
        return <Country key={info.id} id={info.id} username={info.username} />
      })}
    </div>
  );
};

export default App;
