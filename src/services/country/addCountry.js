import axios from "axios";

export const addCountry = ({date,content,id,nationality}) => {
  return axios.post('https://fast-refuge-52881.herokuapp.com/api/country', {date , content ,id, nationality})
      .then((response)=>{
      const {data} = response;
      return data;
  })
}