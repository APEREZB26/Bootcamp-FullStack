import axios from "axios";

export const addCountry = ({date,content,id}) => {
  return axios.post('https://fast-refuge-52881.herokuapp.com/api/country', {date , content ,id})
      .then((response)=>{
      const {data} = response;
      return data;
  })
}