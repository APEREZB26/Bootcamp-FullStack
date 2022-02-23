import "./App.css";
import { useEffect, useState } from "react";
// import { Notes } from "./components/Notes";
import axios from "axios";
import { Notes } from "./components/Notes";

const st = {
  background: "black",
  "border": '5px solid aliceblue',
  margin : '20px'
};

const App = () => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      const { data } = res;
      console.log(data)
      setCountry(data);
      console.log('ahora!')
    });
  }, []);

  return (
    <div>
      {country.map((info) => {
        return (
          <div key={info.altSpellings[0]}>
            <h5>{info.name.common} - {info.altSpellings[0]}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default App;
