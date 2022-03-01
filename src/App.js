import "./App.css";
import { useEffect, useState } from "react";
import { Country } from "./components/Country";
import {getAllCountry} from "./services/country/getAllCountry";
import {addCountry} from "./services/country/addCountry";

const App = () => {
  const [country, setCountry] = useState([]);
  const [newCountry, setNewcountry] = useState(0);

  useEffect(() => {
    getAllCountry().then((country)=>{
        setCountry(country)
    })
  }, []);

  const st ={
      color : "black",
  }

  const handleChange = (event)  =>{
    setNewcountry(event.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    const countryAddToState = {
      date: newCountry,
      content: newCountry
    }

    addCountry(countryAddToState).then((newNote)=>{
      setCountry((prevCountry)=>prevCountry.concat(newNote))
    })
    setNewcountry("")
  }


  return (
    <div>
      {country.map((info)=>{
        return( <Country key={info.id} date={info.date} content={info.content} id={info.id}/>)
      })}
      <p>{newCountry}</p>
      <input style={st} onChange={handleChange}></input>
      <button style={st} onClick={handleSubmit}>Hola</button>
    </div>
  );
};

export default App;
