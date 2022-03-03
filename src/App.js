import "./App.css";
import { useEffect, useState } from "react";
import { Country } from "./components/Country";
import { getAllCountry } from "./services/country/getAllCountry";
import { addCountry } from "./services/country/addCountry";
import axios from "axios";

const App = () => {
  const [country, setCountry] = useState([]);
  const [pais, setPais] = useState([]);
  const [newCountry, setNewcountry] = useState(0);

  useEffect(() => {
    getAllCountry().then((country) => {
      setCountry(country);
    });

    axios.get("https://restcountries.com/v3.1/all").then((pais) => {
      const { data } = pais;
      console.log(data);
      setPais(data);
    });
  }, []);

  const st = {
    color: "black",
  };

  const handleChange = (event) => {
    setNewcountry(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const countryAddToState = {
      date: newCountry,
      content: newCountry,
      nationality: selectedCountry,
    };

    addCountry(countryAddToState).then((newNote) => {
      setCountry((prevCountry) => prevCountry.concat(newNote));
    });
    setNewcountry("");
  };

  const selectedCountry = () =>{
    const select = document.getElementById('option').value().json();
    return select;
  }

  return (
    <div>
      {country.map((info) => {
        return (
          <Country
            key={info.id}
            date={info.date}
            content={info.content}
            nationality={info.nationality}
            id={info.id}
          />
        );
      })}
      <p>{newCountry}</p>
      <select style={st} id='option' onChange={selectedCountry}>
        {pais.map((pais) => { 
          return <option key={pais.cca2} style={st}>{pais.name.common}</option>;
        })}
      </select>
      <br />
      <input style={st} onChange={handleChange}></input>
      <button style={st} onClick={handleSubmit}>
        Hola
      </button>
    </div>
  );
};

export default App;
